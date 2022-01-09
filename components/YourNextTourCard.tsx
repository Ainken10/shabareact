import {
  CashIcon,
  ClipboardCheckIcon,
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
      "https://images.unsplash.com/photo-1560103104-4623c14a473b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Velence Csodái - Olaszország",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
    stars: "",
  },
];

const imga =
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80";

export default function YourNextTourCard() {
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
    maximumFractionDigits: 0,
  });
  const [tours, setTours] = useState<any>([]);
  useEffect(() => {
    const res = fetch("/api/tours?skip=4&limit=1", {
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
    <>
      {tours.map((x: any,i:any) => {
        return (
          <div key={i} className="w-full mt-44 flex flex-col justify-center items-center my-40 px-20">
            <div className="w-full flex flex-col my-5">
              <p className="font-semibold text-orange-500 text-lg">
                Tervezze meg a következőt
              </p>
              <p className="font-bold text-5xl">Nyári kalandját</p>
            </div>
            <div className="w-full h-96 mx-32 relative">
              <img
                className="w-full h-[500px] object-cover rounded-2xl absolute -z-10  "
                src={x.tourPhotos[0]}
              />
              <div className="flex flex-col space-y-4 my-12 mx-16 sm:h-[340px] sm:w-[766px] w-full rounded-2xl bg-white p-10">
                <div className="flex flex-col">
                  <div className="flex items-center w-72 space-x-3 text-orange-300 font-bold  bg-white rounded-lg ">
                    <ClockIcon className="w-5 h-5 " /> <p>    {getDayDifferenceBetweenTwoDates(
                      x.startDates[0],
                      tours[0]?.endDates[0]
                    )} nap</p>
                    <MoonIcon className="w-5 h-5 " /> <p>    {getDayDifferenceBetweenTwoDates(
                      x.startDates[0],
                      tours[0]?.endDates[0]
                    )-1} éjszaka</p>
                  </div>
                </div>
                <p className="text-2xl font-bold">{x.tourTitle}</p>
                <p className="text-lg">{x.tourCountries.join(" - ")}</p>
                <p className="font-semibold text-2xl">  {formatter.format(x.priceFrom)} </p>
                <div className="w-full flex  space-x-5 my-5">
                  <a
                    href="tel:123123123"
                    className="px-4 py-3 flex items-center justify-center  border border-transparent text-base font-medium rounded-md text-orange-700  border-orange-400 bg-white hover:bg-orange-400 hover:text-white  "
                  >
                    Információ
                  </a>
                  <a
                    href="tel:123123123"
                    className="px-4 py-3 flex items-center justify-center  border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-200 hover:bg-orange-400 hover:text-white"
                  >
                    Érdekel
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
