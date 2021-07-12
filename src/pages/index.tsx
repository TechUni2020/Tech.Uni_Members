import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { auth } from "../utils/firebase";
import { Layout } from "../components/shared/Layout";
import { Button } from "../components/shared/Button";

const Home: NextPage = () => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<null | object>(null);
  const [name, setName] = useState<string | null>(null);
  const [photoURL, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (auth.currentUser != null) {
      setName(auth.currentUser.displayName);
      setImage(auth.currentUser.photoURL);
      setCurrentUser(auth);
    }
  });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user ? setCurrentUser(user) : router.push("/signin");
    });
  }, []);

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
          メモを書く
        </Button>,
        "profile",
      ]}
    >
      {/* Bodyの処理 */}
    </Layout>
  );
};

export default Home;
