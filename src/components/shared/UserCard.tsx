/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GithubIcon } from "../Icon/GithubIcon";
import { InstagramIcon } from "../Icon/InstagramIcon";
import { TwitterIcon } from "../Icon/TwitterIcon";
import { Avatar } from "./Avatar";

export default function MembersCard(props) {
  const members = props.members;
  return (
    <>
     {members.map((user) => {
          return (<div className="flex flex-col pt-8 pb-2 px-8" key={user.toString()}>
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-16 w-16">
                              <img className="h-16 w-16 rounded-full" src={user?.profileImage} alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="pb-2 text-lg font-medium text-gray-900">{user?.name}</div>
                              <div className="flex space-x-6">
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
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{ user?.bio }</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div> )})}
    </>
  );
}
