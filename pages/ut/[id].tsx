import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import TourDetails from "../../components/TourDetails";
import TourDetailsInfos from "../../components/TourDetailsInfos";

export default function tourId() {
  const [isLoading, setIsLoading] = useState(true);
  const [tour, setTour] = useState<any>();
  const [tourInfo, setTourInfo] = useState<any>();

  const router = useRouter()
  const  id=  router.query.id;
  const getTourById = (id:any) => {
    return fetch(`/api/get_tour_by_id?id=${id}`, {
      method: 'GET',
    })
      .then((tourResults) => tourResults.json())
      .then((data) => data)
      .then((result) => {
        setTour(result)
      } )
  };
  const getTourInfosById = (id:any) => {
    return fetch(`/api/get_tour_infos_by_id?id=${id}`, {
      method: 'GET',
    })
      .then((tourResults) => tourResults.json())
      .then((data) => data.olaszorszag)
      .then((result) => setTourInfo(result))
  };

  useEffect(() => {
    getTourById(id)
    // getTourInfosById(id)
    setTimeout(() => setIsLoading(false), 4000);
    return () => {
      console.log("clean up");
    };
  }, []);

   


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
          <Navbar title={tour?.title} text={tour?.countries.join(" - ")} />
          <TourDetails tour={tour} />
          {/* <TourDetailsInfos  tourInfo={tourInfo} /> */}
        </>
      )}
    </>
  );
}
tourId.getInitialProps = async (ctx :any) => {
  return { props:{text:'asd'} }
}