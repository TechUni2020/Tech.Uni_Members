/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GLOBAL_TEAMDEVELOPS } from "../../utils/constants/teamdevelop";

export default function DevCard(props) {
  const develops = props.develops;
  return (
    <>
      <div className="pt-10 mb-5">
        <h1 className="font-bold text-xl text-gray-700">
          {develops == GLOBAL_TEAMDEVELOPS
            ? "Tech.Uniが開発するサービス"
            : "メンバーが独自で開発するサービス"}
        </h1>
      </div>
      <ul className="flex space-x-4">
        {develops.map((develop) => {
          return (
            <li key={develop.toString()}>
              <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-gray-50">
                <img
                  src={develop.ref}
                  alt={develop.title}
                  width={400}
                  height={140}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-gray-800">
                    {develop.title}
                  </div>
                  <span className="text-gray-500 text-base inline-block">
                    {develop.description}
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
