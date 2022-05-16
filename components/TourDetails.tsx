import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
const options = {
  settings: {},
  caption: {},
  buttons: { showCloseButton: true, showDownloadButton: false },
  thumbnails: {},
  progressBar: {},
  translations: {}, // PRO ONLY
  icons: {}, // PRO ONLY
};

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { PhoneIcon } from "@heroicons/react/outline";

// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";


SwiperCore.use([FreeMode, Navigation, Thumbs]);
const getDayDifferenceBetweenTwoDates = (date1: any, date2: any) => {
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

export default function TourDetails({ TourDetails }: any) {
  let formatter = new Intl.NumberFormat("hu-HU", {
    style: "currency",
    currency: "HUF",
    minimumFractionDigits :0,
    maximumFractionDigits: 0,
  });

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="  ">
      <div className="p-5 ">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              {/* <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"> */}
              <div className="w-1/2">
                <SimpleReactLightbox>
                  <SRLWrapper options={options}>
                    <Swiper
                      loop={true}
                      spaceBetween={10}
                      navigation={true}
                      thumbs={{ swiper: thumbsSwiper }}
                      className=""
                    >
                      {TourDetails.tourPhotos.map((x: any, i: any) => {
                        return (
                          <SwiperSlide key={x._id}>
                            <a href={x}>
                              <img
                                className="object-center object-cover w-full max-h-[500px] "
                                src={x}
                              />{" "}
                            </a>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </SRLWrapper>
                </SimpleReactLightbox>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={1}
                  slidesPerView={10}
                  freeMode={true}
                  watchSlidesProgress={true}
                  className=""
                >
                  {TourDetails.tourPhotos.map((x: any) => {
                    return (
                      <SwiperSlide key={x._id} className=" w-28 min-w-[100px]">
                        <img
                          className="object-center object-cover min-w-[100px]  sm:w-full min-h-[100px] max-h-[100px]  "
                          src={x}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col" >
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {TourDetails.tourCountries}
                </h2>
                <h1 className=" text-4xl title-font font-bold mb-1 text-orange-500">
                {TourDetails.tourTitle}
                </h1>
                <div className="flex mb-4">
              
                <p className="leading-relaxed">
                 {TourDetails.TourDetails}
                </p>
                </div>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
             
                  <div className="flex ml-6 items-center">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima tempore, nihil pariatur maiores quia laborum quas velit eligendi fugiat placeat neque molestias aperiam, quis perferendis inventore vitae corrupti accusamus esse?
                 lorem <br></br>
                 <br></br>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis facilis odit facere maiores vitae, magnam commodi fuga culpa tenetur laborum modi laboriosam et quis libero nesciunt hic quo soluta. </div>
                </div>
                <p>{TourDetails.startDates}</p>
               


                <div className="flex justify-between">
                  <span className="title-font font-medium text-2xl text-gray-900">
                  {formatter.format(TourDetails.priceFrom)} Ft
                  </span>
                  <a href='tel:+36 50 117 1026' className="flex items-center justify-center p-4 border-2 border-orange-300 text-white text-3xl rounded-br-2xl bg-orange-400 hover:text-white hover:scale-125 transition cursor-pointer">+36 50 117 10 26</a>

                </div>
              </div>
            </div>
          </div>
         
     
        </section>

        </div>
     </div>
  
  );
}
