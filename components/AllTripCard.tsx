import {
  CashIcon,
  ClockIcon,
  MapIcon,
  MoonIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";
import React from "react";
const lorem =
  "Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod.";

const items = [
  {
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    icon: <MapIcon className="h-10 w-10" />,
    name: "France Tour",
    price: 2233000,
  },
  {
    image:
      "https://images.unsplash.com/photo-1592517207964-dfdf8ad96016?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    icon: <CashIcon className="h-10 w-10" />,
    name: "Bali Tour",
    price: 4533000,
  },
  {
    image:
      "https://images.unsplash.com/photo-1501952476817-d7ae22e8ee4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    icon: <ShieldCheckIcon className="h-10 w-10" />,
    name: "Thailand Experience",
    price: 7229300,
  },
  {
    image:
      "https://images.unsplash.com/photo-1543158266-0066955047b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    icon: <ClockIcon className="h-10 w-10" />,
    name: "Turkey Tour",
    price: 8233000,
  },
];

export default function AllTripCard() {
  return (
    <div className="flex items-center justify-center my-40 flex-wrap mx-10 ">
      <div className="w-full flex flex-col my-5 ">
        <p className="font-semibold text-orange-500 text-lg">
          Tervezze meg a következőt
        </p>
        <p className="font-bold text-5xl">Nyári kalandját</p>
      </div>
      <div className="grid sm:grid-cols-4 gap-4 ">
        {items.map((x) => {
          return (
            <div
              key={x.name}
              className="flex flex-col    border-2 cursor-pointer rounded-lg group"
            >
              <img className="rounded-t-lg w-full" src={x.image} />
              <div className="flex flex-col p-2 space-y-2 w- group-hover:bg-orange-400 group-hover:text-white">
                <p className="text-2xl font-bold">{x.name}</p>
                <div className="flex flex-col">
                  <div className="flex items-center  space-x-1   rounded-lg">
                    <ClockIcon className="w-5 h-5 " /> <p>10 nap</p>
                    <MoonIcon className="w-5 h-5 " /> <p>10 éjszaka</p>
                  </div>
                </div>
                <div className="flex space-x-4 items-center">
                 
                  <p className="text-lg font-semibold">{x.price} Ft </p>
                  <p className="text-gray-300 text-sm font-semibold crossed line-through">{(x.price*1.1).toFixed(0)} Ft </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
