import { ClockIcon, LogoutIcon, MoonIcon } from "@heroicons/react/outline";
import React from "react";

const lorem =
  "Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod.";

export default function Footer() {
  return (
    <div className=" mt-44 bg-gray-400 h-[300px] items-center justify-between flex p-20 px-40">
      <img className="w-40" src="sabalogo/LOGÓ_szín.png" />
      <div className="flex flex-col space-y-10 items-center">
        <p className="text-white font-semibold text-2xl">Közzöségi linkek</p>
        <div className="flex space-x-10">
            <a className="cursor-pointer"><img className="w-10 brightness-0 invert"  src='sabalogo/facebook.svg'/> </a>
            <a className="cursor-pointer"> <img  className="w-10  brightness-0 invert"  src='sabalogo/instagram.svg'/> </a>
        </div>
      </div>
      <div className="flex flex-col"></div>
    </div>
  );
}
