/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GLOBAL_SERVICESS } from "../../utils/constants/service";

export default function ServiceCard() {
  return (
    <>
      <div className="pt-10 mb-5">
        <h1 className="font-bold text-xl text-gray-700">
          Tech.Uniで使用するサービス
        </h1>
      </div>
      <ul className="flex flex-wrap space-x-4 space-y-4">
        {GLOBAL_SERVICESS.map((val, key) => {
          return (
            <li key={key}>
              <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-gray-50">
                <div className="px-6 py-4">
                  <img src={val.ref} alt={val.title} width={400} height={140} />
                  <div className="font-bold text-xl mb-2 text-gray-800">
                    {val.title}
                  </div>
                  <span className="text-gray-500 text-base inline-block">
                    {val.description}
                  </span>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {val.tag1}
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {val.tag2}
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {val.tag3}
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
