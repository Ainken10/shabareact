import {
  CashIcon,
  ClipboardCheckIcon,
  ClockIcon,
  MapIcon,
  MoonIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";


export default function YourNextTourCard({tours}:any):any  {
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

  return (

          <div
            className="w-full mt-44 flex flex-col justify-center items-center my-40 px-5 sm:px-20"
          >
            <div className="w-full flex flex-col my-5">
              <p className="font-semibold text-orange-500 text-lg">
                Tervezze meg a következőt
              </p>
              <p className="font-bold text-5xl">Nyári kalandját </p>
            </div>
            <div className="w-full h-96 mx-32 relative">
              <img
                className="w-full h-[500px] object-cover rounded-2xl absolute -z-10  "
                src={tours[0]?.photos[1]}
              />
              <div className="flex flex-col space-y-4 sm:my-12 sm:mx-16 sm:h-[340px] w-full sm:w-[766px]  rounded-2xl sm:bg-white p-10">
                <div className="flex flex-col">
                  <div className="flex items-center w-72 space-x-3 text-orange-300 font-bold  sm:bg-white rounded-lg ">
                    <ClockIcon className="w-5 h-5 " />{" "}
                    <p>
                      {" "}
                      {getDayDifferenceBetweenTwoDates(
                        tours[0]?.dates[0]?.start,
                        tours[0]?.dates[0]?.end,
                      )}{" "}
                      nap
                    </p>
                    <MoonIcon className="w-5 h-5 " />{" "}
                    <p>
                      {" "}
                      {getDayDifferenceBetweenTwoDates(
                         tours[0]?.dates[0]?.start,
                         tours[0]?.dates[0]?.end,
                      ) - 1}{" "}
                      éjszaka
                    </p>
                  </div>
                </div>
                <p className="text-2xl font-bold">{tours[0]?.title}</p>
                <p className="text-lg">{tours[0]?.countries.join(" - ")}</p>
                <p className="font-semibold text-2xl">
               
                  {formatter.format(tours[0]?.priceFrom)}
                </p>
                <div className="w-full flex  space-x-5 my-5">
                  <a
                    href={`/ut/${tours[0]?._id}`}
                    className="px-4 py-3 flex items-center justify-center  border border-transparent text-base font-medium rounded-md sm:text-orange-700 text-white border-orange-400 bg-white bg-transparent hover:bg-orange-400 hover:text-white  "
                  >
                    Információ
                  </a>
                  <a
                    href="tel:123123123"
                    className="px-4 py-3 flex items-center justify-center  border border-transparent text-base font-medium rounded-md sm:text-orange-700 text-white sm:bg-orange-200 hover:bg-orange-400 hover:text-white"
                  >
                    Érdekel
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
}
