/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GLOBAL_SERVICESS } from "../../utils/constants/service";

export default function ServiceCard() {
  return (
    <ul className="flex space-x-4">
      {GLOBAL_SERVICESS.map((val, key) => {
        return (
          <li key={key}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <div className="px-6 py-4">
                <img src={val.ref} alt={val.title} width={300} height={140} />
                <div className="font-bold text-xl mb-2 text-gray-800">
                  {val.title}
                </div>
                <p className="text-gray-500 text-base">{val.description}</p>
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
  );
}
