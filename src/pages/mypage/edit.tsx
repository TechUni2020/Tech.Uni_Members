import type { NextPage } from "next";
import { Layout } from "../../components/shared/Layout";
import { ProfileForm } from "../../components/shared/ProfileForm";
import { EXAMPLE_USER_01 } from "../../models/user";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/app";
import { useDocumentData } from "react-firebase-hooks/firestore";
import type { UserType } from "../../types/types";

const SettingsUserEdit: NextPage = () => {
  const [authUser, authLoading, authError] = useAuthState(firebase.auth());
  const uid = authUser?.uid;
  const [user] = useDocumentData(
    uid && firebase.firestore().doc(`users/${uid}`)
  );

  const CURRENT_USER: UserType = {
    id: user?.id,
    name: user?.name,
    profilePicture: user?.profilePicture,
    role: user?.role,
    githubId: user?.github,
    twitterId: user?.twitter,
    instagramId: user?.instagram,
    bio: user?.discription,
    knownAs: user?.knownAs,
    university: user?.university,
    department: user?.department,
    grade: user?.grade,
    uid: user?.uid,

  };

  return (
    <Layout left="back">
      <div className="space-y-8">
        <h1 className="text-xl font-bold">プロフィール設定</h1>
        {/* <ProfileForm user={EXAMPLE_USER_01} /> */}
        <ProfileForm user={CURRENT_USER} />
      </div>
    </Layout>
  );
};

export default SettingsUserEdit;
