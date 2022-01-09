import { ClockIcon, LogoutIcon, MoonIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";



export default function CardTwo(props :any) {
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 rounded-lg  mt-44 px-10 my-24 ">
      {props.tours.map((x: any, i: number) => {
        return (
          <div
            key={i}
            className="w-full bg-white border-2 border-gray-100  relative flex sm:flex-row flex-col rounded-2xl  "
          >
            <img
              className="w-full sm:w-1/2 object-center object-cover h-80  rounded-l-2xl "
              src={x.tourPhotos[0]}
            />

            <div className="w-full sm:w-1/2 h-80   rounded-tr-3xl flex  flex-col p-5  space-y-4">
              <p className="font-bold text-3xl">{x.tourTitle}</p>
              <div className="flex flex-col">
                <div className="flex items-center space-x-3 text-orange-300 font-bold ">
                  <ClockIcon className="w-5 h-5 " />{" "}
                  <p>
                    {getDayDifferenceBetweenTwoDates(
                      x.startDates[0],
                      x.endDates[0]
                    )} nap
                  </p>
                  <MoonIcon className="w-5 h-5 " />{" "}
                  <p>
                    {getDayDifferenceBetweenTwoDates(
                      x.startDates[0],
                      x.endDates[0]
                    ) - 1} éjszaka
                  </p>
                </div>
              </div>
              <p className="text-md text-gray-500">
                {x.tourCountries.join(" - ")}
              </p>
              <p className="text-2xl font-semibold">
                {formatter.format(x.priceFrom)} -tól 
              </p>

              <hr className="border-b" />
              <div className="flex flex-row-reverse items-center justify-between">
                <a href={`/ut/${x._id}`} className="text-orange-400 cursor-pointer hover:text-orange-600 flex items-center space-x-2">
                  <p>Érdekel</p> <LogoutIcon className="h-5 w-5" />{" "}
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
