import React, { useRef, useState } from "react";
import Moment from 'moment';
import { FaPlaneDeparture,FaPlaneArrival,FaArrowRight,FaArrowLeft } from 'react-icons/fa';
// Import Swiper React components


const getDayDifferenceBetweenTwoDates = (date1: any, date2: any) => {
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

export default function TourDetailsInfos({ tourInfo }: any) {
  let formatter = new Intl.NumberFormat("hu-HU", {
    style: "currency",
    currency: "HUF",
    minimumFractionDigits :0,
    maximumFractionDigits: 0,
  });


  return (
    <div className="p-5 mx-24">
            <section className="text-gray-600 body-font overflow-hidden">
                  <div className="container px-5 py-24 mx-auto">
        {tourInfo?.map((x: any) => {
                 return (
          
                    <div className="-my-8 divide-y-2 divide-gray-100">
                      <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                          <span className="font-semibold title-font text-gray-700">{x.tourTypeName}</span>
                          <span className="mt-1 text-gray-500 text-sm">{Moment(x.dateStart).format('YYYY-MM-DD')}</span>
                          <hr className="w-20"></hr>
                          <span className="mt-1 text-gray-500 text-sm">{Moment(x.dateEnd).format('YYYY-MM-DD')}</span>
                        </div>
                        <div className="md:flex-grow">
                          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{x.type}</h2>
                          <div>
                              <div className="flex items-center">
                               <FaPlaneDeparture className="text-orange-400 w-5 mr-2"/>  
                               <p className="font-semibold mr-2">{x.flightInfo.fromDepartureAirport} </p>
                               <p className="font-semibold"> {Moment(x.flightInfo.fromDepartureAirportTime).format('YYYY-MM-DD HH:mm"')}</p>
                               <FaArrowRight className="text-orange-400 mx-10 w-5"/> 
                               
                               <FaPlaneArrival className="text-orange-400 w-5 mr-2"/>  
                               <p className="font-semibold mr-2"> {Moment(x.flightInfo.toDepartureAirportTime).format('YYYY-MM-DD HH:mm"')}</p> 
                               <p className="font-semibold"> {x.flightInfo.toDepartureAirport} </p>
                        
                              </div>
                          </div>
                          <hr className="w-1/2 my-4"></hr>
                          <div>
                              <div className="flex items-center">
                               <FaPlaneDeparture className="text-orange-400 w-5 mr-2"/>  
                               <p className="font-semibold mr-2">{x.flightInfo.backFromDepartureAirport} </p>
                               <p className="font-semibold"> {Moment(x.flightInfo.backFromDepartureAirportTime).format('YYYY-MM-DD HH:mm"')}</p>
                               <FaArrowRight className="text-orange-400 mx-10 w-5"/> 
                               
                               <FaPlaneArrival className="text-orange-400 w-5 mr-2"/>  
                               <p className="font-semibold mr-2"> {Moment(x.flightInfo.backToDepartureAirportTime).format('YYYY-MM-DD HH:mm"')}</p> 
                               <p className="font-semibold"> {x.flightInfo.backToDepartureAirport} </p>
                        
                              </div>
                          </div>
                          <p className="text-yellow-500 inline-flex items-center mt-4">
                          {formatter.format(x.price)}
                         
                          </p>
                        </div>
                      </div>
                   
                  
                    </div>
        
                 )
                })}
          </div>
                </section>
    </div>
  
  );
}
