import {
  CashIcon,
  ClockIcon,
  LogoutIcon,
  MapIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";
import React from "react";
const lorem =
  "Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod.";

const items = [
  {
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "France Tour",
    price: 2233000,
    class: "hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block",
  },
  {
    image:
      "https://images.unsplash.com/photo-1592517207964-dfdf8ad96016?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Bali Tour",
    price: 4533000,
    class: "aspect-w-3 aspect-h-2 rounded-lg overflow-hidden",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501952476817-d7ae22e8ee4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    name: "Thailand Experience",
    price: 7229300,
    class: "aspect-w-3 aspect-h-2 rounded-lg overflow-hidden",
  },
  {
    image:
      "https://images.unsplash.com/photo-1543158266-0066955047b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Turkey Tour",
    price: 8233000,
    class:
      "aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-2",
  },
];

export default function ImageSmallGallery() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-orange-300  -z-20">
      <p className="font-bold text-orange-200 mt-20 ">Különleges</p>
      <p className="text-white font-bold text-4xl">Ajánlott úti célok</p>

      <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8 my-20">
      <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4 group relative flex">
          <img
            src={items[0].image}
            className="w-full h-full object-center object-cover"
          />
          <div className="w-full h-full absolute text-black text-2xl z-50 opacity-0 group-hover:opacity-100 transition items-center justify-center bg-black bg-opacity-50 flex flex-col">
            <p className="text-white">{items[0].name}</p>
            <p className="text-white">26 út</p>
            <div className="flex space-x-2 items-center justify-center text-sm">
              <p className="text-orange-400">Felfedezés </p>
              <p className="text-orange-400 ">
                <LogoutIcon className="h-5 w-5" />{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group relative flex">
            <img
              src={items[1].image}
              className="w-full h-full object-center object-cover"
            />
            <div className="w-full h-full absolute text-black text-2xl z-50 opacity-0 group-hover:opacity-100 transition items-center justify-center bg-black bg-opacity-50 flex flex-col">
              <p className="text-white">{items[1].name}</p>
              <p className="text-white">26 út</p>
              <div className="flex space-x-2 items-center justify-center text-sm">
                <p className="text-orange-400">Felfedezés </p>
                <p className="text-orange-400 ">
                  <LogoutIcon className="h-5 w-5" />
                </p>
              </div>
            </div>
          </div>
          <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group relative flex">
            <img
              src={items[2].image}
              className=" w-full h-full object-center object-cover cursor-pointer z-20"
            />
            <div className="w-full h-full absolute text-black text-2xl z-50 opacity-0 group-hover:opacity-100 transition items-center justify-center bg-black bg-opacity-50 flex flex-col">
              <p className="text-white">{items[2].name}</p>
              <p className="text-white">26 út</p>
              <div className="flex space-x-2 items-center justify-center text-sm">
                <p className="text-orange-400">Felfedezés </p>
                <p className="text-orange-400 ">
                  <LogoutIcon className="h-5 w-5" />{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4 group relative flex">
          <img
            src={items[3].image}
            className="w-full h-full object-center object-cover"
          />
          <div className="w-full h-full absolute text-black text-2xl z-50 opacity-0 group-hover:opacity-100 transition items-center justify-center bg-black bg-opacity-50 flex flex-col">
            <p className="text-white">{items[3].name}</p>
            <p className="text-white">26 út</p>
            <div className="flex space-x-2 items-center justify-center text-sm">
              <p className="text-orange-400">Felfedezés </p>
              <p className="text-orange-400 ">
                <LogoutIcon className="h-5 w-5" />{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
