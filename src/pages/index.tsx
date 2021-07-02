import { useEffect, FC, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "../utils/firebase";

const Home: FC = (props: any) => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<null | object>(null);
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    if (auth.currentUser != null) {
      setName(auth.currentUser.displayName);
    }
  });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user ? setCurrentUser(user) : router.push("/signin");
    });
  }, []);

  const logOut = async () => {
    try {
      await auth.signOut();
      router.push("/signin");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>Hello {name} 👋</h1>
      <button onClick={logOut} className="btn btn-danger">
        Logout
      </button>
    </div>
  );
};

export default Home;
