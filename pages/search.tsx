import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CardTwo from "../components/CardTwo";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

export default function Search() {
  const router = useRouter();
    const [country, setCountry] = useState(router.query.country);
    const [start, setStart] = useState(router.query.start);
    const [end, setEnd] = useState(router.query.end);

  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState<any>([]);



  useEffect(() => {

    let queryparams = '/api/search?' 
    country ? queryparams += 'country='+country: null ;
    start ?  queryparams += '&start='+start : null ;
    end ?  queryparams += '&end='+end : null ;
    if (router.query) {
      
      const { country } = router.query;
      console.log('router:',country)
      const res = fetch(

        queryparams,
        {
          method: "GET",
        }
      ).then((tourResults) =>
        tourResults.json().then((data) => {
          console.log("DataSearch: ", data);
          setTours(data.tours);
        })
      );
    }
    setTimeout(() => setIsLoading(false), 4000);
    return () => {
      console.log("clean up");
    };
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
          <Navbar title='Keresd meg a legjobb utazást Velünk.' text='lorem impsum' /> <SearchBar  /> <CardTwo tours={tours}/>
        </>
      )}
    </>
  );
}

Search.getInitialProps = async (ctx :any) => {

  return { props:{text:'asd'} }
}