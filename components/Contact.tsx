import { ClockIcon, LogoutIcon, MoonIcon } from "@heroicons/react/outline";
import React from "react";



export default function Contact() {
  return (
    
    

//       <section className="text-gray-600 body-font relative bg-gray-100">
//   <div className="container px-5 py-16 mx-auto flex sm:flex-nowrap flex-wrap">
//     <div className="lg:w-2/3 md:w-1/2  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
//       <iframe width="900px" height="500px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1351.8895131803663!2d19.034499058269457!3d47.33818671244446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741efce83df9513%3A0x39c8685e991663eb!2zU8OhYmEgVXRhesOhcw!5e0!3m2!1shu!2shu!4v1655368380937!5m2!1shu!2shu"    loading="lazy" ></iframe>
//     </div>
//     <div className="w-full sm:w-1/2 h-[550px]  flex flex-col  items-center justify-center">
//             <div className="bg-white p-10 flex flex-col space-y-5">
//               <h1 className="text-orange-400 font-bold text-3xl">
//                 Lépj velünk kapcsolatba!
//                 </h1>
//               <hr className="border-gray-100" />

//               <a href='mail:info@sabautazas.hu' className="flex items-center justify-center p-4 bg-orange-300 rounded-tl-2xl text-white text-3xl hover:bg-orange-500 transition cursor-pointer">info@sabautazas.hu</a>
//               <a   href="tel:+36501171026" className="flex items-center justify-center p-4 border-2 border-orange-300 text-orange-300 text-3xl rounded-br-2xl hover:bg-orange-400 hover:text-white transition cursor-pointer">+36 50 117 10 26</a>
//             </div>
//           </div>
//   </div>
// </section>


<section className="text-gray-600 body-font relative">
  <div className="absolute inset-0 bg-gray-300  ">
    <iframe width="100%" height="100%"  title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1351.8895131803663!2d19.034499058269457!3d47.33818671244446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741efce83df9513%3A0x39c8685e991663eb!2zU8OhYmEgVXRhesOhcw!5e0!3m2!1shu!2shu!4v1655368380937!5m2!1shu!2shu" ></iframe>
  </div>
 

       <div className="w-full h-[600px]  flex flex-row items-center justify-end relative z-10">
            <div className="bg-white p-10 flex flex-col space-y-5 mx-10">
              <h1 className="text-orange-400 font-bold text-3xl">
                Lépj velünk kapcsolatba!
                </h1>
              <hr className="border-gray-100" />

              <a href='mail:info@sabautazas.hu' className="flex items-center justify-center p-4 bg-orange-300 rounded-tl-2xl text-white text-3xl hover:bg-orange-500 transition cursor-pointer">info@sabautazas.hu</a>
               <a   href="tel:+36704319810" className="flex items-center justify-center p-4 border-2 border-orange-300 text-orange-300 text-3xl rounded-br-2xl hover:bg-orange-400 hover:text-white transition cursor-pointer">+36 70 431 9810</a>
             </div>
         </div>

</section>
   
  );
}
