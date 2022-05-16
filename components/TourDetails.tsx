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
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {TourDetails.tourCountries}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {TourDetails.tourTitle}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
              
                </div>
                <p className="leading-relaxed">
                 {TourDetails.TourDetails}
                </p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
               
                  <div className="flex ml-6 items-center">
               
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="title-font font-medium text-2xl text-gray-900">
                  {formatter.format(TourDetails.priceFrom)} Ft
                  </span>
                
           
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
