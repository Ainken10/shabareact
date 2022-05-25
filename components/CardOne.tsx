import React, { useEffect, useState } from "react";

const getDayDifferenceBetweenTwoDates = (date1: any, date2: any) => {
  const diffTime = Math.abs(date2 - date1);
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays ==-1) {
    diffDays = 0
  }
  return diffDays;
};


export default function CardOne() {

  const [tours, setTours] = useState<any>([])
  useEffect(() => {
    const res = fetch("/api/tours?skip=100&limit=6", {
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
  let formatter = new Intl.NumberFormat("hu-HU", {
    style: "currency", 
    currency: "HUF",
    minimumFractionDigits :0,
    maximumFractionDigits: 0,
  });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3  gap-8 rounded-lg  mt-44 px-10  ">
      
      {tours.map((x :any) => {
        return (
          <a
            key={x.tourTitle}
            href={`/ut/${x._id}`}
            className="group transition w-full flex justify-center items-center rounded-xl h-96 cursor-pointer  bg-cover max-w-full  "
          >
            <div className="absolute gap-8 -z-10">
              <img className="rounded-lg h-80 w-[420px]" src={x.tourPhotos[0]} />
            </div>
 
            <div className="transition z-10 w-2/3 h-fit border-[2px] border-dashed h text-white bg-orange-500 border-white rounded-lg p-5 group-hover:hidden">
              <p className=" font-semibold text-2xl">{x.tourTitle}</p>
              <p className=" font-semibold text-lg">{x.tourCountries.join(' - ')}</p>
              <p>{x.priceFrom ?? formatter.format(x.priceFrom)} -tól</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
