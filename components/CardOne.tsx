import React, { useEffect, useState } from "react";

const getDayDifferenceBetweenTwoDates = (date1: any, date2: any) => {
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};


export default function CardOne() {
  let formatter = new Intl.NumberFormat("hu-HU", {
    style: "currency",
    currency: "HUF",
    maximumFractionDigits: 0,
  
  });
  const [tours, setTours] = useState<any>([])
  useEffect(() => {
    const res = fetch("/api/tours?skip=99&limit=6", {
      method: "GET",
    }).then((tourResults) =>
    tourResults.json().then((data) => {
      console.log("Data: ",data)
       setTours(data.tours);
      })
    );

    return () => {
      console.log("clean up");
    };
  }, []);
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3  gap-8 rounded-lg  mt-44 px-10  ">
      
      {tours.map((x :any) => {
        return (
          <div
            key={x.tourTitle}
            className="group transition w-full flex justify-center items-center rounded-xl h-96  bg-cover max-w-full  "
          >
            <div className="absolute gap-8 -z-10">
              <img className="rounded-lg h-96 w-[500px]" src={x.tourPhotos[0]} />
            </div>

            <div className="transition z-10 w-2/3 h-fit border-[2px] border-dashed h text-white bg-orange-500 border-white rounded-lg p-5 group-hover:hidden">
              <p className=" font-semibold text-2xl">{x.tourTitle}</p>
              <p className=" font-semibold text-lg">{x.tourCountries.join(' - ')}</p>
              <p>{x.priceFrom && formatter.format(x.priceFrom)} -tól</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
