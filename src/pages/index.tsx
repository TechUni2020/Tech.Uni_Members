/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { Layout } from "../components/shared/Layout";
import { Button } from "../components/shared/Button";
import { AuthProvider } from "../utils/auth/AuthProvider";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import ServiceCard from "../components/shared/ServiceCard";

const Home: NextPage = () => {
  const [authUser, authLoading, authError] = useAuthState(firebase.auth());
  const uid = authUser?.uid;
  const [user] = useDocumentData(
    uid && firebase.firestore().doc(`users/${uid}`)
  );
  return (
    <AuthProvider>
      <Layout
        left="icon"
        right={[
          <Button
            key="write memo"
            variant="solid-blue"
            linkProps={{ href: "/memos/new" }}
            className="px-4 h-10"
          >
            メモを書く
          </Button>,
          "profile",
        ]}
      >
        <div className="p-10 bg-gray-100">
          <div className="rounded-xl max-w-5xl overflow-hidden shadow-lg bg-gray-50 py-5">
            <div className="px-6 py-4">
              <div className="font-bold text-2xl mb-2">
                🦔 Hello ! {user?.name}さん
              </div>
              <p className="text-gray-700 text-base">紹介文??</p>
            </div>
            <div className="px-6 pt-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #TechUni
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #アプリ開発
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #機械学習
              </span>
            </div>
          </div>
          <ServiceCard />
        </div>
      </Layout>
    </AuthProvider>
  );
};

export default Home;
