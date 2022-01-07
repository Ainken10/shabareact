import { CashIcon, ClockIcon, MapIcon, ShieldCheckIcon } from "@heroicons/react/outline";
import React from "react";
const lorem = 'Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod.'

const items = [
  { icon: <MapIcon className="h-10 w-10"/>, name: "Legjobb válogatások", text: lorem},
  { icon: <CashIcon className="h-10 w-10" />, name: "Elfogadható árak", text: lorem },
  { icon: <ShieldCheckIcon className="h-10 w-10" />, name: "Biztonságos utak", text: lorem  },
  { icon: <ClockIcon className="h-10 w-10" />, name: "24 órás támogatás", text: lorem },

];

const imga =
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80";

export default function IconCard() {
  return (
    <div className="flex items-center justify-center my-40 flex-wrap ">
      {items.map((x) => {
        return (
          <div className="flex flex-col items-center justify-center w-full sm:w-1/4 gap-4 px-10 sm:my-0 my-10" >
                <div className="p-5 shadow-lg text-orange-400 rounded-sm border-2">{x.icon} </div>
                <div className="text-3xl font-semibold">{x.name} </div>
              <div>{x.text}</div>
          </div>
        );
      })}
    </div>
  );
}
