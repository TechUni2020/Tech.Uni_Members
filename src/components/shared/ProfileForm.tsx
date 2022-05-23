/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Avatar } from "../../components/shared/Avatar";
import type { VFC } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Upload } from "./Upload";
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
    await (uid && firebase.firestore().doc(`users/${uid}`)).update({
      name: values.name,
      id: values.id,
      university: values.university,
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
              src={props.user?.profilePicture}
              alt={props.user?.name}
              width={96}
              height={96}
              className="overflow-hidden w-24 h-24 rounded-full"
            />
            <Upload user={props.user} />
          </div>
        </div>
        <Formik
          initialValues={{
            name: props.user.name,
            id: props.user.id,
            bio: props.user.bio,
            role: props.user.role,
            githubId: props.user.githubId,
            twitterId: props.user.twitterId,
            instagramId: props.user.instagramId,
            university: props.user.university,
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
                name="university"
                label="所属大学"
                value={values.university}
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
                value={values.githubId}
                onChange={(e) => handleChange(e)}
              />
              <Input
                name="twitter"
                label="Twitterアカウント"
                value={values.twitterId}
                onChange={(e) => handleChange(e)}
              />
              <Input
                name="instagram"
                label="Instagramアカウント"
                value={values.instagramId}
                onChange={(e) => handleChange(e)}
              />
              <Input
                name="discription"
                label="コメント"
                value={values.bio}
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
