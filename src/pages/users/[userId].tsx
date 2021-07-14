/* eslint-disable @next/next/link-passhref */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import firebase from "firebase/app";
import "firebase/storage";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { useDownloadURL } from "react-firebase-hooks/storage";
import { Layout } from "../../components/shared/Layout";
import { Button } from "../../components/shared/Button";
import { Avatar } from "../../components/shared/Avatar";
import { GithubIcon } from "../../components/Icon/GithubIcon";
import { TwitterIcon } from "../../components/Icon/TwitterIcon";
import { InstagramIcon } from "../../components/Icon/InstagramIcon";

const UsersUserId: NextPage = () => {
  const router = useRouter();
  const [authUser, authLoading, authError] = useAuthState(firebase.auth());
  const uid = authUser?.uid;
  const [user] = useDocumentData(
    uid && firebase.firestore().doc(`user/${uid}`)
  );

  const default_url = "/default_icon.jpeg";

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
            alt={user?.name}
            src={user?.avatarUrl ? user?.avatarUrl : default_url}
            className="w-27 h-24 "
          />
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <span className="text-2xl font-bold ">{user?.name}</span>
              <div className="flex rounded-full px-3 h-8 bg-blue-500 items-center">
                <span className="text-white w-10 h-10 leading-10 text-center">
                  {user?.role}
                </span>
              </div>
              <div className="flex rounded-full px-3 h-8 bg-blue-500 items-center">
                <span className="text-white w-10 h-10 leading-10 text-center">
                  {user?.belongs}
                </span>
              </div>
              <Button
                variant="solid-gray"
                linkProps={{ href: "/mypage" }}
                className="px-4 h-10"
              >
                <span className=" w-10 h-10 leading-10 text-center">設定</span>
              </Button>
            </div>
            <span className="">{user?.discription}</span>
            <div className="flex space-x-4">
              <a href={"https://github.com/" + user?.github + "/"}>
                <GithubIcon iconColor="gray" />
              </a>
              <a href={"https://twitter.com/" + user?.twitter + "/"}>
                <TwitterIcon iconColor="gray" />
              </a>
              <a href={"https://www.instagram.com/" + user?.instagram + "/"}>
                <InstagramIcon iconColor="gray" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UsersUserId;
