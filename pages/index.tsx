import Head from "next/head";
import { useEffect, useState } from "react";
import AllTripCard from "../components/AllTripCard";
import BigCard from "../components/BigCard";
import CardOne from "../components/CardOne";
import ExtraCards from "../components/ExtraCards";
import IconCard from "../components/IconCard";
import ImageSmallGallery from "../components/ImageSmallGallery";

import NavbarTwo from "../components/NavbarTwo";
import SearchBar from "../components/SearchBar";
import YourNextTourCard from "../components/YourNextTourCard";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 4000);
  }, []);

  const loader = (
    <div className="w-full min-h-screen flex items-center justify-center">
      <img src="preloader.gif" />
    </div>
  );

  return (
    <>
      {isLoading ? (
        loader
      ) : (
        <>
          <NavbarTwo />
          <SearchBar />
          <CardOne />
          <IconCard />
          <BigCard />
          <YourNextTourCard />
          <AllTripCard />
          <ImageSmallGallery />
          <ExtraCards />
        </>
      )}
    </>
  );
}
