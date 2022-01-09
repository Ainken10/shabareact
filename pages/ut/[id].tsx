import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import TourDetails from "../../components/TourDetails";

export default function tourId() {
  const [isLoading, setIsLoading] = useState(true);
  const [tour, setTour] = useState<any>();
  const router = useRouter()
 
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 4000);
    const { id } = router.query
    console.log('id: ',id)
    const res = fetch("/api/gettour?_id="+id, {
      method: "GET",
    }).then((tourResults) =>
      tourResults.json().then((data) => {
        console.log("ONE UT: ", data.tours);
        setTour(data.tours);
       
      })
    );

    return () => {
      console.log("clean up");
    };
  }, []);
  console.log(tour)
  const loader = (
    <div className="w-full min-h-screen flex items-center justify-center">
      <img src="/preloader.gif" />
    </div>
  );
  return (
    <>
      {isLoading ? (
        loader
      ) : (
        <>
          <Navbar title={tour?.tourTitle} text={tour?.tourCountries.join(" - ")} />
          <TourDetails TourDetails={tour} />
 
        </>
      )}
    </>
  );
}
tourId.getInitialProps = async (ctx :any) => {

  return { props:{text:'asd'} }
}