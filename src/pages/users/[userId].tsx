import { useEffect, FC, useState } from "react";
import { useRouter } from "next/router";
import firebase from "firebase/app";
import "firebase/storage";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { useDownloadURL } from "react-firebase-hooks/storage";
import { auth } from "../../utils/firebase";
import { Layout } from "../../components/shared/Layout";
import { Button } from "../../components/shared/Button";
import { Avatar } from "../../components/shared/Avatar";
import Link from "next/link";
import { GithubIcon } from "../../components/Icon/GithubIcon";
import { TwitterIcon } from "../../components/Icon/TwitterIcon";
import { InstagramIcon } from "../../components/Icon/InstagramIcon";

const UsersUserId: FC = (props: any) => {
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
    <Layout
      left="icon"
      right={[
        <Button
          key="write memo"
          variant="solid-blue"
          linkProps={{ href: "/memos/new" }}
          className="px-4 h-10"
        >
          編集
        </Button>,
        "profile",
      ]}
    >
      <div className="space-y-7 ">
        <div className="flex items-center space-x-4">
          <Avatar
            alt={user?.display_name}
            src={image_url ? image_url : default_url}
            className="w-24 h-24 "
          />
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <span className="text-2xl font-bold">{user?.display_name}</span>
              <div className="flex rounded-full px-3 h-8 bg-blue-500 items-center">
                <span className="text-white">{user?.role}</span>
              </div>
              <div className="flex rounded-full px-3 h-8 bg-blue-500 items-center">
                <span className="text-white">{user?.class}</span>
              </div>
            </div>
            <span className="">{user?.discription}</span>
            <div className="flex space-x-4">
              <GithubIcon className="fill-current text-gray-600" />
              <TwitterIcon className="fill-current text-gray-600" />
              <InstagramIcon className="fill-current text-gray-600" />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Avatar
            alt={user?.display_name}
            src={image_url ? image_url : default_url}
            className="w-16 h-16"
          />
          <div className="flex flex-col">
            <span className="font-bold">{user?.display_name}</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UsersUserId;
