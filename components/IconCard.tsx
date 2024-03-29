import { CashIcon, ClockIcon, MapIcon, ShieldCheckIcon,ChatAltIcon,CreditCardIcon,InformationCircleIcon } from "@heroicons/react/outline";
import React from "react";
const lorem = ''

const items = [
  { icon: <ClockIcon className="h-10 w-10" />, name: "Több mint 25 év tapasztalat", text: lorem },
  { icon: <InformationCircleIcon className="h-10 w-10" />, name: "Segítőkész kiszolgálás", text: lorem  },
  { icon: <ChatAltIcon className="h-10 w-10"/>, name: "Egyedi igények kezelése", text: lorem},
  { icon: <CreditCardIcon className="h-10 w-10" />, name: "Legjobb ajánlatok egy helyen", text: lorem },
];

export default function IconCard() {
  return (
    <div className="flex items-center justify-center mx-20 my-40 flex-wrap ">
      {items?.map((x:any,i:any) => {
        return (
          <div key={i} className="flex flex-col items-center justify-center w-full sm:w-1/4 gap-7 px-2  sm:my-0 my-10" >
                <div className="p-5 shadow-lg text-orange-400 rounded-sm border-2 flex items-center justify-center">{x.icon} </div>
                <div className="text-2xl  font-semibold flex items-center justify-center">{x.name} </div>
              <div>{x.text}</div>
          </div>
        );
      })}
    </div>
  );
}
