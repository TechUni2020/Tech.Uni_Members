/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { Layout } from "../../components/shared/Layout";
import { Button } from "../../components/shared/Button";
import { AuthProvider } from "../../auth/AuthProvider";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import ServiceCard from "../../components/shared/ServiceCard";
import DevCard from "../../components/shared/DevCard";
import { GLOBAL_TEAMDEVELOPS } from "../../utils/constants/teamdevelop";
import { GLOBAL_SELFDEVELOPS } from "../../utils/constants/selfdevelops";

const Service: NextPage = () => {
  const [authUser, authLoading, authError] = useAuthState(firebase.auth());
  const uid = authUser?.uid;
  const [user] = useDocumentData(
    uid && firebase.firestore().doc(`user/${uid}`)
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
          <h1 className="text-3xl font-extrabold text-gray-700">サービス</h1>
          <ServiceCard />
          <DevCard develops={GLOBAL_TEAMDEVELOPS} />
          <DevCard develops={GLOBAL_SELFDEVELOPS} />
        </div>
      </Layout>
    </AuthProvider>
  );
};

export default Service;
