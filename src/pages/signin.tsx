import React, { FC, useContext, useState, useEffect } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { useRouter } from "next/router";
import { GoogleIcon } from "../components/Icon/GoogleIcon";
import { Button } from "../components/shared/Button";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "../components/Icon/GithubIcon";

import { githubProvider, googleProvider } from "../auth/AuthMethods";
import socialMediaAuth from "../auth/SocialMediaAuth";

const Signin: FC = () => {
  const router = useRouter();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    currentUser && router.push("/");
  }, [currentUser]);

  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };

  return (
    <div className="w-screen h-screen bg-white font-family-karla">
      <div className="grid place-items-center mt-12 md:pt-0 md:px-24 lg:px-32">
        <Image src="/icon.png" width={250} height={200} />
        <p className="text-center text-xl font-bold mt-6">
          アカウントにログイン
        </p>
        <Button
          variant="solid-black"
          className="py-4 w-72 sm:w-80 mt-7"
          onClick={() => {
            handleOnClick(githubProvider);
          }}
        >
          <div className="flex">
            <GithubIcon iconColor="white" className="mr-3" />
            <span>Sign in with Github</span>
          </div>
        </Button>
        <Button
          variant="solid-white"
          className="py-4 w-72 sm:w-80 mt-5"
          onClick={() => {
            handleOnClick(googleProvider);
          }}
        >
          <div className="flex">
            <GoogleIcon className="mr-3" />
            <span>Sign in with Google</span>
          </div>
        </Button>
        <div className=" pt-6 pb-12">
          <p className="text-sm">
            アカウントをお持ちでありませんか？{" "}
            <Link href="/signup">
              <a className="text-blue-400">サインアップ</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Signin;
