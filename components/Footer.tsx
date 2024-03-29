import { ClockIcon, LogoutIcon, MoonIcon } from "@heroicons/react/outline";
import React from "react";


export default function Footer() {
  return (

<footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <img
                        className="h-8 w-auto sm:h-10"
                        src="/sabalogo/SZÖVEG_web_szín.png"
                      />
      <span className="ml-3 text-xl"></span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 Sába utazás 
      <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank"></a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500" href="https://www.facebook.com/sabautazas" target="_blank">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      </span>
      <a className="ml-3 text-gray-500" href="https://www.facebook.com/sabautazas" target="_blank">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
  
   
  </div>
</footer>


    // <div className=" mt-44 bg-gray-400 h-[300px] items-center justify-between flex p-20 px-40">
    //   <img className="w-40" src="sabalogo/LOGÓ_szín.png" />
    //   <div className="flex flex-col space-y-10 items-center">
    //     <p className="text-white font-semibold text-2xl">Közzöségi linkek</p>
    //     <div className="flex space-x-10">
    //         <a className="cursor-pointer"><img className="w-10 brightness-0 invert"  src='sabalogo/facebook.svg'/> </a>
    //         <a className="cursor-pointer"> <img  className="w-10  brightness-0 invert"  src='sabalogo/instagram.svg'/> </a>
    //     </div>
    //   </div>
    //   <div className="flex flex-col"></div>
    // </div>
  );
}
