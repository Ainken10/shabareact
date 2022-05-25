import { ClockIcon, LogoutIcon, MoonIcon } from "@heroicons/react/outline";
import React from "react";

const items = [
  {
    image:
      "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "France Experience",
    price: "123123",
    stars: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1204&q=80",
    name: "Macao Experience",
    price: "645654",
    stars: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1588007789786-3313bc8a0016?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Turkey Experience",
    price: "2134234",
    stars: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Bali Experience",
    price: "12312321",
    stars: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Evally Experience",
    price: "671012",
    stars: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503152394-c571994fd383?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Southland Experience",
    price: "12312321",
    stars: "",
  },
];


export default function Contact() {
  return (
    <div className=" mt-44 px-10 my-24 ">
      <div className="bg-gray-100 w-full h-[500px] p-10">
        <div className="flex justify-center items-center flex-wrap ">
          <div className="w-full sm:w-1/2 h-full flex items-center justify-center">
            <img className="w-full sm:h-[450px] object-center" src="contact.png" />
          </div>
          <div className="w-full sm:w-1/2  h-full flex flex-col  items-center justify-center">
            <div className="bg-white p-10 flex flex-col space-y-5">
              <h1 className="text-orange-400 font-bold text-3xl">
                Lépj velünk kapcsolatba!
              </h1>
              <hr className="border-gray-100" />

              <a href='mail:info@sabautazas.hu' className="flex items-center justify-center p-4 bg-orange-300 rounded-tl-2xl text-white text-3xl hover:bg-orange-500 transition cursor-pointer">info@sabautazas.hu</a>
              <a   href="tel:+36501171026" className="flex items-center justify-center p-4 border-2 border-orange-300 text-orange-300 text-3xl rounded-br-2xl hover:bg-orange-400 hover:text-white transition cursor-pointer">+36 50 117 10 26</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
