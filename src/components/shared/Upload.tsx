import React, { useState, useCallback, useContext } from "react";
import Image from "next/image";
import type { UserType } from "../../types/types";
import type { VFC } from "react";
import { useDropzone } from "react-dropzone";
import firebase, { storage } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export type firebaseOnLoadProp = {
  bytesTransferred: number;
  totalBytes: number;
  state: firebase.storage.TaskState;
  // このほかにもmetadata,task,refがある
};

type Upload = { user?: UserType };

export const Upload: VFC<Upload> = (props) => {
  const [myFiles, setMyFiles] = useState<File[]>([]);
  const [clickable, setClickable] = useState(false);
  const [src, setSrc] = useState("");
  const [authUser, authLoading, authError] = useAuthState(firebase.auth());
  const uid = authUser?.uid;

  //ドロップ処理 && リジェクト時
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (!acceptedFiles[0]) return;

    try {
      setMyFiles([...acceptedFiles]);
      setClickable(true);
      handlePreview(acceptedFiles);
    } catch (error) {
      alert(error);
    }
  }, []);

  const onDropRejected = () => {
    alert("画像のみ受け付けることができます。");
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDropRejected,
  });

  const handleUpload = (accepterdImg: any) => {
    try {
      // アップロード処理
      const uploadTask: any = storage
        .ref(`/images/${myFiles[0].name}`)
        .put(myFiles[0]);

      uploadTask.on(
        //①イベント発火条件▷タスクイベントの条件が変化した時
        firebase.storage.TaskEvent.STATE_CHANGED,

        //②発火した時に実行する関数▷アップロードの進捗を%表記で表示
        function (snapshot: firebaseOnLoadProp) {
          //ローディングとか出しても良いかもね
          const progress: number =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED:
              console.log("Upload is paused");
              break;
            case firebase.storage.TaskState.RUNNING:
              console.log("Upload is running");
              break;
          }
        },

        //③アップロード失敗時に実行する関数
        function (error: any) {
          // 失敗した時
          switch (error.code) {
            case "storage/unauthorized":
              console.error("許可がありません");
              break;

            case "storage/canceled":
              console.error("アップロードがキャンセルされました");
              break;

            case "storage/unknown":
              console.error("予期せぬエラーが発生しました");
              break;
          }
        },

        //④アップロード成功時に実行する関数
        function () {
          try {
            uploadTask.snapshot.ref
              .getDownloadURL()
              .then(function (downloadURL: string) {
                console.log("ダウンロードしたURL" + downloadURL);
                firebase.firestore().collection("users").doc(uid).update({
                  profilePicture: downloadURL,
                });
              });
          } catch (error) {
            switch (error.code) {
              case "storage/object-not-found":
                console.log("ファイルが存在しませんでした");
                break;
              case "storage/unauthorized":
                console.log("許可がありません");
                break;
              case "storage/canceled":
                console.log("キャンセルされました");
                break;
              case "storage/unknown":
                console.log("予期せぬエラーが生じました");
                break;
            }
          }
        }
      );
    } catch (error) {
      console.log("エラーキャッチ", error);
    }
  };

  const handlePreview = (files: any) => {
    if (files === null) {
      return;
    }
    const file = files[0];
    if (file === null) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setSrc(reader.result as string);
    };
  };

  return (
    <div>
      <div className="w-4/5 px-4 py-2 mx-auto my-4 text-center rounded-md">
        <div
          className="bg-gray-400 border-2 border-gray-500 rounded-md"
          {...getRootProps()}
        >
          {/* この中をタップすれば画像を選択できる */}
          <input {...getInputProps()} />
          {myFiles.length === 0 ? (
            <p className="py-4">画像を選択またはドラッグ＆ドロップできます</p>
          ) : (
            <div>
              {myFiles.map((file: File) => (
                <React.Fragment key={file.name}>
                  {src && <Image src={src} width={200} height={160} />}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
        <button
          disabled={!clickable}
          type="submit"
          className="px-4 py-2 my-4 bg-gray-200 rounded-md"
          onClick={() => handleUpload(myFiles)}
        >
          {props.user ? "変更する" : "設定する"}
        </button>
      </div>
    </div>
  );
};
