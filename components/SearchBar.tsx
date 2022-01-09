import React, { useEffect, useState } from "react";
import Router from "next/router";
export default function SearchBar() {
  const [countries, setCountries] = useState<any>([]);
  useEffect(() => {
    const res = fetch("/api/countries", {
      method: "GET",
    }).then((tourResults) =>
      tourResults.json().then((data) => {
        console.log("search :",data)
        setCountries(data.countries);
      })
    );

    return () => {
      console.log("clean up");
    };
  }, []);

  const searchInTours = async (event: any) => {
    const { pathname } = Router;
    if (pathname == "/") {
      event.preventDefault();
    }
    let queryparams = '/search?' 
    //${country} &start=${start}&end=${end}'
    let country = event.target.country.value ? queryparams += 'country='+event.target.country.value: null ;
    let start = event.target.country.start ?  queryparams += '&start='+event.target.country.start : null ;
    let end = event.target.country.end ?  queryparams += '&end='+event.target.country.end : null ;

    // const queryparams = `/search?country=${country}&start=${start}&end=${end}`;

    Router.push(queryparams);
  };
  return (
    <form
      onSubmit={(e) => searchInTours(e)}
      className="w-full h-56  flex items-center justify-center absolute text-orange-500 "
    >
      <div className="shadow-lg w-2/3 p-6 flex flex-wrap sm:flex-nowrap sm:space-x-2 bg-orange-400 rounded-lg relative  sm:-top-20 z-10">
        <div className="col-span-6 sm:col-span-6 lg:col-span-2 w-full sm:w-1/4 ">
          <label
            htmlFor="country"
            className="block w-full  text-sm font-medium text-white"
          >
            Ország
          </label>
          <select
            name="country"
            id="country"
            autoComplete="address-level2"
            className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          >
            {countries.map((x: any) => {
              return (
                <option key={x} value={x}>
                  {x}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-span-6 sm:col-span-3 lg:col-span-2 w-full sm:w-1/4 ">
          <label
            htmlFor="start"
            className="block text-sm font-medium w-full text-white "
          >
            Indulási dátum
          </label>
          <input
            type="date"
            name="start"
            id="start"
            autoComplete="address-level1"
            className="mt-1 p-2  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div className="col-span-6 sm:col-span-3 lg:col-span-2 w-full sm:w-1/4 ">
          <label
            htmlFor="end"
            className="block text-sm font-medium text-white "
          >
            Erkezési dátum
          </label>
          <input
            type="date"
            name="end"
            id="end"
            className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="col-span-6 sm:col-span-3 lg:col-span-2 w-full sm:w-1/4 flex flex-col-reverse sm:mt-0 mt-5 ">
          <button
            type="submit"
            className="  bg-white w-full font-bold text-2xl p-1 rounded-lg transition hover:bg-orange-400 hover:border-2 hover:boder-white hover:text-white"
          >
            Keresés
          </button>
        </div>
      </div>
    </form>
  );
}
