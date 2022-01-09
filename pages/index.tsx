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

import NavbarTwo from "../components/NavbarTwo";
import SearchBar from "../components/SearchBar";
import YourNextTourCard from "../components/YourNextTourCard";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState<any>([]);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 4000);
    const res = fetch("/api/tours?skip=20&limit=6", {
      method: "GET",
    }).then((tourResults) =>
      tourResults.json().then((data) => {
        console.log("DataBIG2: ", data);
        setTours(data.tours);
      })
    );

    return () => {
      console.log("clean up");
    };
  }, []);

  const loader = (
    <motion.div className="w-full min-h-screen flex items-center justify-center absolute">
      <img src="preloader.gif" />
    </motion.div>
  );

  return (
    <>
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
      <CardOne />
      <IconCard />
      <BigCard />
      <YourNextTourCard />
      <AllTripCard />
      <ImageSmallGallery />
      <ExtraCards />
      <CardTwo tours={tours} />
      <Contact />
      <Footer />
    </>
  );
}
