import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
const options = {
  settings: {},
  caption: {},
  buttons: {showCloseButton: true,
    showDownloadButton: false,},
  thumbnails: {},
  progressBar:{},
  translations: {}, // PRO ONLY
  icons: {} // PRO ONLY
}

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

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
    maximumFractionDigits: 0,
  });

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="sm:m-20 sm:mx-40 ">
      <div className="p-5">
        <SimpleReactLightbox>
          <SRLWrapper options={options}>
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              className="w-2/3"
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
          className="w-2/3"
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
    </div>
  );
}
