import React from "react";
import { GLOBAL_MENUS } from "../../utils/constants/menu";
import { useRouter } from "next/router";

export default function Menubar() {
  const router = useRouter();

  return (
    <div className="">
      <ul className="">
        {GLOBAL_MENUS.map((val, key) => {
          return (
            <li
              key={key}
              className=""
              onClick={() => {
                console.log(val.link);
                router.push(val.link);
                router.pathname = val.link;
              }}
            >
              <div
                className={`flex row py-2 px-5 hover:bg-gray-100 ${
                  router.pathname == val.link ? "bg-blue-50" : "bg-white"
                }`}
              >
                <div
                  className={`h-7 w-7 text-gray-400 ${
                    router.pathname == val.link
                      ? "text-blue-400"
                      : "text-gray-400"
                  }`}
                >
                  {val.icon}
                </div>
                <div className="pl-5">{val.title}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
