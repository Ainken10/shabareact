import { ClockIcon, MoonIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";

export default function BigCard() {
  const getDayDifferenceBetweenTwoDates = (date1: any, date2: any) => {
    date1 = new Date(date1)
    date2 = new Date(date2)
    const diffTime : any = Math.abs(date2  - date1) ;
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
    const res = fetch("/api/getsingletour?key=Ciprus", {
      method: "GET",
    }).then((tourResults) =>
      tourResults.json().then((data) => {
        console.log("DataBIG: ", data);
        setTours(data.tours);
      })
    );

    return () => {
      console.log("clean up");
    };
  }, []);
  return (
    <div className="w-full mt-44  ">
     
      <div key={tours[0]?.tourTitle} className="relative w-full flex  ">
        <img
          className="w-full sm:w-4/5 h-[680px] object-cover  sm:rounded-r-3xl"
          src={tours[0]?.tourPhotos[4]}
        />
        <div className="absolute  first-line:z-20 right-0 h-96 bg-orange-300 w-full sm:w-2/5 rounded-bl-3xl p-10">
          <div className="flex flex-col">
            <div className="flex items-center w-72 justify-center space-x-3 text-orange-300 font-bold p-2 bg-white rounded-lg mb-8">
              <ClockIcon className="w-5 h-5 " /> <p>{ getDayDifferenceBetweenTwoDates(tours[0]?.startDates[0],tours[0]?.endDates[0] )} nap</p>
              <MoonIcon className="w-5 h-5 " /> <p>{ getDayDifferenceBetweenTwoDates(tours[0]?.startDates[0],tours[0]?.endDates[0] )-1} éjszaka</p>
            </div>
          </div>
          <p className="text-white font-bold text-3xl mb-3">{tours[0]?.tourTitle}</p>
          <p className="text-white  ">{tours[0]?.tourCountries.join(" ")}</p>
          <p className="text-white  ">{formatter.format(tours[0]?.priceFrom)} -tól</p>
          <div className="w-full flex  space-x-5 my-5">
            <a
              href="tel:123123123"
              className="px-4 py-3 flex items-center justify-center  border border-transparent text-base font-medium rounded-md text-orange-700 bg-white hover:bg-orange-400 hover:text-white  "
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
}
