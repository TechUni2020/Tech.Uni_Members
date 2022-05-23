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
    uid && firebase.firestore().doc(`users/${uid}`)
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
      <div className="pt-7 pl-7">
        <div className="flex items-center space-x-4">
          <Avatar
            alt={user?.name}
            src={user?.profilePicture ? user?.profilePicture : default_url}
            className="w-27 h-24 "
          />
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <span className="text-2xl font-bold ">{user?.name}</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                # {user?.role}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                # {user?.university}
              </span>
              <Button
                variant="solid-gray"
                linkProps={{ href: "/mypage" }}
                className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-blue-100 overflow-hidden shadow-lg"
              >
                <span>設定</span>
              </Button>
            </div>
            <span className="">{user?.discription}</span>
            <div className="flex space-x-4">
              <a href={"https://github.com/" + user?.githubId + "/"}>
                <GithubIcon iconColor="gray" />
              </a>
              <a href={"https://twitter.com/" + user?.twitterId + "/"}>
                <TwitterIcon iconColor="gray" />
              </a>
              <a href={"https://www.instagram.com/" + user?.instagramId + "/"}>
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
