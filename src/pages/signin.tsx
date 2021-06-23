// import type { NextPage } from "next";
// import { AuthAction, withAuthUser } from "next-firebase-auth";
// import { Sign } from "../components/shared/Sign";

// const Signin: NextPage = () => {
//   return <Sign page="signin" />;
// };

// export default withAuthUser({
//   whenAuthed: AuthAction.REDIRECT_TO_APP,
//   whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
//   whenUnauthedAfterInit: AuthAction.RENDER,
// })(Signin);

import React, { useEffect, useState, FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { auth } from "../utils/firebase";

const SignIn: FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user && router.push("/");
    });
  }, []);

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      router.push("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="wrapper">
      <form className="auth" onSubmit={signIn}>
        <div>
          <label htmlFor="email" className="auth-label">
            Email:{" "}
          </label>
          <input
            id="email"
            className="auth-input"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <label htmlFor="password" className="auth-label">
            Password:{" "}
          </label>
          <input
            id="password"
            className="auth-input"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="auth-btn" type="submit">
          SignIn
        </button>
      </form>
      <Link href="/signup">
        <a className="auth-link">signup</a>
      </Link>
    </div>
  );
};

export default SignIn;
