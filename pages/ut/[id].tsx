import Head from "next/head";
import { useEffect, useState } from "react";
import NavbarTwo from "../../components/NavbarTwo";


export default function tourId() {
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
 asd
        </>
      )}
    </>
  );
}
