import Head from "next/head";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AllTripCard from "../components/AllTripCard";
import BigCard from "../components/BigCard";
import CardOne from "../components/CardOne";
import CardTwo from "../components/CardTwo";
import Contact from "../components/Contact";
import ExtraCards from "../components/ExtraCards";
import Footer from "../components/Footer";
import IconCard from "../components/IconCard";
import ImageSmallGallery from "../components/ImageSmallGallery";
import Script from 'next/script'
import NavbarTwo from "../components/NavbarTwo";
import SearchBar from "../components/SearchBar";
import YourNextTourCard from "../components/YourNextTourCard";

export default function Home() {

  const [olaszorszag, setOlaszorszag] = useState<any>([]);
  const [horvathorszag, setHorvathorszag] = useState<any>([]);
  const [egyiptom, setEgyiptom] = useState<any>([]);
  const [albania, setAlbania] = useState<any>([]);
  const [franciaorszag, setFranciaorszag] = useState<any>([]);
  const [szlovenia, setSzlovenia] = useState<any>([]);
  const [montenegro, setMontenegro] = useState<any>([]);

  
  const getTourByCountry = (country:string,limit:Number) => {
    return fetch(`/api/get_tour_by_country_name?country=${country}&limit=${limit}`, {
      method: 'GET',
    })
      .then((tourResults) => tourResults.json())
      .then((data) => data.olaszorszag);
  };

  useEffect(() => {
    getTourByCountry('Olaszország',6).then((results) => 
    {setOlaszorszag(results);})
    getTourByCountry('Horvátország',8).then((results) => 
    {setHorvathorszag(results);})
    getTourByCountry('Egyiptom',8).then((results) => 
    {setEgyiptom(results);})
    getTourByCountry('Albánia',2).then((results) => 
    {setAlbania(results);})
    getTourByCountry('Franciaország',1).then((results) => 
    {setFranciaorszag(results);})
    getTourByCountry('Szlovénia',4).then((results) => 
    {setSzlovenia(results);})
    getTourByCountry('Montenegro',4).then((results) => 
    {setMontenegro(results);})
    return () => {
      console.log("clean up");
    };
  }, []);


  return (
    <>
      <div className="container">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-C9YQXT5SMH"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-C9YQXT5SMH');

        `}
      </Script>
    </div>
      <motion.div
        initial={{ opacity: 100 }}
        transition={{ duration: 3 }}
        animate={{
          opacity: 0,
          transitionEnd: {
            display: "none",
          },
        }}
        className="fixed w-full min bg-white min-h-screen flex items-center justify-center  z-50 transition-opacity "
      >
        <img src="preloader.gif" />
      </motion.div>
      <NavbarTwo />
      <SearchBar />
      <CardOne tours={olaszorszag} />
      <IconCard />
      <BigCard tours={albania} />
      <YourNextTourCard tours={franciaorszag} />
      <AllTripCard  tours={egyiptom} />
      <ImageSmallGallery tours={horvathorszag}/>
      <ExtraCards tours={szlovenia} />
      <CardTwo tours={montenegro} />
      <Contact />
      <Footer />
    </>
  );
}
