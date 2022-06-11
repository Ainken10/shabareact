/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, PhoneIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";

// import kep from "../public/Bali3.jpg";
// import kep2 from "../public/Bali4.jpg";
// import kep3 from "../public/Vietnam2.jpg";



import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// install Swiper modules

const navigation = [
  { name: "Last minute", href: "/search?country=Olaszország" },
  { name: "Ajánlott ", href: "/search?country=Bali" },
  // { name: "Hazai", href: "#" },
];

export default function NavbarTwo() {
  SwiperCore.use([Autoplay, Navigation]);
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="h-8 w-auto sm:h-10"
                        src="/sabalogo/SZÖVEG_web_szín.png"
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation?.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                  <a
                    href="#"
                    className="font-medium text-orange-600 hover:text-orange-500"
                  >
                    Kapcsolat
                  </a>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="/sabalogo/SZÖVEG_web_szín.png"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation?.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="block w-full px-5 py-3 text-center font-medium transition text-orange-600 bg-gray-50 hover:bg-orange-500 hover:text-white"
                  >
                    Kapcsolat
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Az utazás örök élmény a  </span>{" "}
                <span className="block text-blue-400 xl:inline">
                Sába Utazással!
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
               <br></br>
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"><div className="rounded-md shadow"><a href="mail:info@sabautazas.hu" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-400 hover:bg-orange-500 md:py-4 md:text-lg md:px-10">info@sabautazas.hu</a></div><div className="mt-3 sm:mt-0 sm:ml-3"><a   href="tel:+36501171026" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-700 bg-orange-100 hover:bg-orange-200 md:py-4 md:text-lg md:px-10"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="h-5 w-5 "><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> <p>+36 50 117 10 26</p></a></div></div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Swiper
          loop={true}
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full "
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
        
          slidesPerView={1}
        >
          {" "}
          <SwiperSlide className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full">
            <img
              src={"https://images.pexels.com/photos/4388165/pexels-photo-4388165.jpeg"}
              // layout="fill"
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full "
            />
          </SwiperSlide>
          <SwiperSlide className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full">
            <img
              src={"https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
              // layout="fill"
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full "
            />
          </SwiperSlide>
          <SwiperSlide className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full">
            <img
              src={"https://images.pexels.com/photos/5092763/pexels-photo-5092763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
              // layout="fill"
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full "
            />
          </SwiperSlide>
       
        </Swiper>
      </div>
    </div>
  );
}
