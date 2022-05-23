/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GithubIcon } from "../Icon/GithubIcon";
import { InstagramIcon } from "../Icon/InstagramIcon";
import { TwitterIcon } from "../Icon/TwitterIcon";
import { Avatar } from "./Avatar";

export default function ExectiveMembersCard(props) {
  const exectiveMembers = props.exectiveMembers;
  const ICON_SIZE = "w-17 h-14";
  return (
    <>
      <ul className="flex justify-start ">
        {exectiveMembers.map((user) => {
          return (
            <div className="card bg-white border w-80 hover:shadow-none relative flex flex-col mx-5 shadow-lg rounded-2xl" key={user}>
                <div className="profile m-5 ">
                <img className="w-28 h-28 p-1.5 bg-gradient-to-r from-pink-200 via-yellow-200 to-green-200 rounded-full " src={user.profileImage} alt=""/>
                <div className="title mt-5 ml-3 font-bold ">
                    <div className="name break-words text-gray-400 text-sm">{user.role}</div>
                    <div className="name break-words text-gray-900">{user.name}</div>
                    <div className="name break-words text-gray-400 text-sm mb-10">{user.bio}</div>
                </div>
                </div>
                <div className="buttons flex absolute bottom-0 font-bold right-10 text-xs text-gray-500 space-x-5 my-3.5 mr-3">
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
          );
        })}
      </ul>
    </>
  );
}





