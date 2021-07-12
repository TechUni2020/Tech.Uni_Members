import type { NextPage } from "next";
import { Layout } from "../components/shared/Layout";
import { Button } from "../components/shared/Button";
import { AuthProvider } from "../auth/AuthProvider";

const Home: NextPage = () => {
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
        {/* Bodyの処理 */}
      </Layout>
    </AuthProvider>
  );
};

export default Home;
