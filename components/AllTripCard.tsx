import {
  CashIcon,
  ClockIcon,
  MapIcon,
  MoonIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
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
  const getDayDifferenceBetweenTwoDates = (date1: any, date2: any) => {
    date1 = new Date(date1);
    date2 = new Date(date2);
    const diffTime: any = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  let formatter = new Intl.NumberFormat("hu-HU", {
    style: "currency",
    currency: "HUF",
    minimumFractionDigits :0,
    maximumFractionDigits: 0,
  });
  const [tours, setTours] = useState<any>([]);
  useEffect(() => {
    const res = fetch("/api/tours?skip=66&limit=4", {
      method: "GET",
    }).then((tourResults) =>
      tourResults.json().then((data) => {
        console.log("DataBIG2: ", data);
        setTours(data.tours);
      })
    );

    return () => {
      console.log("clean up");
    };
  }, []);
  return (
    <div className="flex items-center justify-center my-40 flex-wrap mx-10 ">
      <div className="w-full flex flex-col my-5 ">
        <p className="font-semibold text-orange-500 text-lg">
          Tervezze meg a következőt
        </p>
        <p className="font-bold text-5xl">Nyári kalandját</p>
      </div>
      <div className="grid sm:grid-cols-4 gap-4 ">
        {tours?.map((x: any, i: any) => {
          return (
            <a
              href={`/ut/${x._id}`}
              key={i}
              className="flex flex-col    border-2 cursor-pointer rounded-lg group"
            >
              <img
                className="rounded-t-lg max-h-[250px] min-h-[250px] w-full"
                src={x.tourPhotos[0]}
              />
              <div className="flex flex-col p-2 h-[150px] justify-between w- group-hover:bg-orange-400 group-hover:text-white">
                <p className="text-2xl font-bold">{x.tourTitle}</p>
                <div className="flex flex-col ">
                  <div className="flex items-center  space-x-1   rounded-lg">
                    <ClockIcon className="w-5 h-5 " />{" "}
                    <p>
                      {" "}
                      {getDayDifferenceBetweenTwoDates(
                        x.startDates[0],
                        tours[0]?.endDates[0]
                      )}{" "}
                      nap
                    </p>
                    <MoonIcon className="w-5 h-5 " />{" "}
                    <p>
                      {" "}
                      {getDayDifferenceBetweenTwoDates(
                        x.startDates[0],
                        tours[0]?.endDates[0]
                      ) - 1}{" "}
                      éjszaka
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4 items-center ">
                  <p className="text-lg font-semibold">
                    {" "}
                    {formatter.format(x.priceFrom)}
                  </p>
                  <p className="text-gray-300 text-sm font-semibold crossed line-through">
                    {formatter.format(x.priceFrom * 1.1)}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
