/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Avatar } from "../../components/shared/Avatar";
import type { VFC } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import type { UserType } from "../../types/types";
import { Formik } from "formik";
import * as Yup from "yup";

import firebase from "firebase/app";

import { useAuthState } from "react-firebase-hooks/auth";

type ProfileFormProps = { user?: UserType };

export const ProfileForm: VFC<ProfileFormProps> = (props) => {
  const [authUser, authLoading, authError] = useAuthState(firebase.auth());
  const uid = authUser?.uid;

  const handleOnSubmit = async (values: any) => {
    await (uid && firebase.firestore().doc(`user/${uid}`)).update({
      name: values.name,
      id: values.id,
      belongs: values.belongs,
      role: values.role,
      github: values.github,
      twitter: values.twitter,
      instagram: values.instagram,
      discription: values.discription,
    });
    alert("登録しました");
    // Router.push("/");
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("氏名は必須です。"),
    id: Yup.string().required("アカウント名"),
    github: Yup.string().required("githubは必須です。"),
    discription: Yup.string().required("メッセージは必須です。"),
  });

  return (
    <div>
      <div className="space-y-6 sm:space-y-8">
        <div>
          <div className="flex justify-start items-center space-x-6">
            <Avatar
              src={props.user?.avatarUrl}
              alt={props.user?.name}
              width={96}
              height={96}
              className="overflow-hidden w-24 h-24 rounded-full"
            />
            <Button variant="solid-gray" className="py-2.5 px-5 mt-4">
              アイコンを{props.user ? "変更する" : "設定する"}
            </Button>
          </div>
        </div>
        <Formik
          initialValues={{
            name: props.user.name,
            id: props.user.id,
            belongs: props.user.belongs,
            role: props.user.role,
            github: props.user.github,
            twitter: props.user.twitter,
            instagram: props.user.instagram,
            discription: props.user.discription,
          }}
          onSubmit={(values) => handleOnSubmit(values)}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, handleChange, values, errors, touched }) => (
            <form className="flex-1" onSubmit={handleSubmit}>
              <Input
                name="name"
                label="名前"
                value={values.name}
                onChange={(e) => handleChange(e)}
              />
              <Input
                name="id"
                label="ユーザー名"
                prefix="@"
                value={values.id}
                onChange={(e) => handleChange(e)}
              />
              <Input
                name="belongs"
                label="所属クラス"
                value={values.belongs}
                onChange={(e) => handleChange(e)}
              />
              <Input
                name="role"
                label="幹部の担当"
                value={values.role}
                onChange={(e) => handleChange(e)}
              />
              <Input
                name="github"
                label="Githubアカウント"
                value={values.github}
                onChange={(e) => handleChange(e)}
              />
              <Input
                name="twitter"
                label="Twitterアカウント"
                value={values.twitter}
                onChange={(e) => handleChange(e)}
              />
              <Input
                name="instagram"
                label="Instagramアカウント"
                value={values.instagram}
                onChange={(e) => handleChange(e)}
              />
              <Input
                name="discription"
                label="コメント"
                value={values.discription}
                onChange={(e) => handleChange(e)}
              />
              <div className="mt-12 space-y-4">
                {props.user ? (
                  <button type="submit" className="flex-1 p-2.5 text-center">
                    保存する
                  </button>
                ) : (
                  <>
                    <Button variant="solid-blue" className="p-3 w-full">
                      登録してはじめる
                    </Button>
                    <Button variant="solid-gray" className="p-3 w-full">
                      登録せずに終了する
                    </Button>
                  </>
                )}
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
