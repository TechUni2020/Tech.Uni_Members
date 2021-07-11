/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import { useEffect, FC, useState } from "react";
import { useRouter } from "next/router";
import firebase from "firebase/app";
import "firebase/storage";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { useDownloadURL } from "react-firebase-hooks/storage";
import { Layout } from "../../components/shared/Layout";
import { List } from "../../components/shared/List";

const MyPage: FC = (props: any) => {
  const router = useRouter();
  const [authUser, authLoading, authError] = useAuthState(firebase.auth());
  const uid = authUser?.uid;
  const [user] = useDocumentData(
    uid && firebase.firestore().doc(`user/${uid}`)
  );
  const [image_url] = useDownloadURL(
    uid && firebase.storage().ref(`user_icon/${uid}.png`)
  );

  const [default_url] = useDownloadURL(
    uid && firebase.storage().ref("default_icon.jpeg")
  );

  return (
    <Layout left="back">
      <div className="flex flex-col items-center">
        <img
          src={default_url}
          alt={user?.display_name}
          className="overflow-hidden w-24 h-24 rounded-full"
        />
        <h1 className="mt-8 text-2xl font-bold">
          ようこそ、{user?.display_name}さん
        </h1>
        <p className="mt-2 text-sm opacity-70">
          アカウントに関する各種設定ができます
        </p>
      </div>

      <div className="mt-12">
        <List
          title="全般"
          items={[
            { label: "プロフィール", href: "/mypage/edit" },
            { label: "アカウントの連携", href: "/mypage" },
            { label: "データの削除", href: "/mypage" },
          ]}
        />
      </div>
    </Layout>
  );
};

export default MyPage;
