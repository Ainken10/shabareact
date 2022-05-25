import { ClockIcon, LogoutIcon, MoonIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";

const items = [
  {
    image:
      "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "France Experience",
    price: "12311",
    stars: "4",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1204&q=80",
    name: "German Experience",
    price: "55612",
    stars: "5",
  },
];

export default function ExtraCards() {
  const getDayDifferenceBetweenTwoDates = (date1: any, date2: any) => {
    date1 = new Date(date1);
    date2 = new Date(date2);
    const diffTime: any = Math.abs(date2 - date1);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays ==-1) {
      diffDays = 0
    }
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
    const res = fetch("/api/tours?skip=30&limit=2", {
      method: "GET",
    }).then((tourResults) =>
      tourResults.json().then((data) => {
        console.log("DataExtraCards: ", data);
        setTours(data.tours);
      })
    );

    return () => {
      console.log("clean up");
    };
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 rounded-lg  mt-44 px-10 my-24 ">
      {tours.map((x :any) => {
        return (
          <div
            key={x.tourTitle}
            className="w-full bg-white border-2 border-gray-100  relative flex flex-row-reverse rounded-tr-3xl rounded-bl-3xl"
          >
            <img
              className="hidden sm:block object-center object-cover h-72 w-72 rounded-tl-3xl absolute -inset-y-8 left-7 rounded-br-3xl"
              src={x.tourPhotos[0]}
            />

            <div className="w-full sm:w-[310px]  h-72 bg-orange-100  rounded-tr-3xl flex flex-col p-5  space-y-4">
              <p className="font-bold text-3xl">{x.tourTitle}</p>
              <div className="flex flex-col">
                <div className="flex items-center space-x-3 text-orange-300 font-bold ">
                  <ClockIcon className="w-5 h-5 " /> <p>  {getDayDifferenceBetweenTwoDates(
                      x.startDates[0],
                      x.endDates[0]
                    )} nap </p>
                  <MoonIcon className="w-5 h-5 " /> <p>  {getDayDifferenceBetweenTwoDates(
                      x.startDates[0],
                      x.endDates[0]
                    )-1} éjszaka</p>
                </div>
              </div>
              <p className="text-md text-gray-500">{x.tourCountries.join(" - ")}</p>
              <p className="text-2xl font-semibold">{formatter.format(x.priceFrom)} Ft</p>
              <div className="flex flex-row-reverse items-center justify-between">
                <a   href={`/ut/${x._id}`} className="text-orange-400 cursor-pointer hover:text-orange-600 flex items-center space-x-2"><p>Érdekel</p> <LogoutIcon className="h-5 w-5" /> </a>
              
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
