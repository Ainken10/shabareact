import { ClockIcon, MoonIcon } from "@heroicons/react/outline";
import React from "react";

const items = [
  {
    image:
      "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
    name: "Velence Csodái - Olaszország",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
    stars: "",
  },
];


export default function BigCard() {
  return (
    <div className="w-full mt-44  ">
      {items.map((x) => {
        return (
          <div key={x.name} className="relative w-full flex  ">
            <img
              className="w-full sm:w-4/5 h-[680px] object-cover sm:rounded-r-3xl"
              src={x.image}
            />
            <div className="absolute  first-line:z-20 right-0 h-96 bg-orange-300 w-full sm:w-2/5 rounded-bl-3xl p-10">
              <div className="flex flex-col">
                <div className="flex items-center w-72 justify-center space-x-3 text-orange-300 font-bold p-2 bg-white rounded-lg mb-8">
                  <ClockIcon className="w-5 h-5 " /> <p>10 nap</p>
                  <MoonIcon className="w-5 h-5 " /> <p>10 éjszaka</p>
                </div>
              </div>
              <p className="text-white font-bold text-3xl mb-3">{x.name}</p>
              <p className="text-white  ">{x.text}</p>
              <div className="w-full flex  space-x-5 my-5">
              <a
                    href="tel:123123123"
                    className="px-4 py-3 flex items-center justify-center  border border-transparent text-base font-medium rounded-md text-orange-700 bg-white hover:bg-orange-400 hover:text-white  "
                  > Információ </a>
              <a
                    href="tel:123123123"
                    className="px-4 py-3 flex items-center justify-center  border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-200 hover:bg-orange-400 hover:text-white"
                  > Érdekel </a> </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
