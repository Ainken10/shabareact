import React from "react";

export default function SearchBar() {
  const searchInTours = async (event: any) => {
    event.preventDefault();

    const res = await fetch(
      "https://hooks.zapier.com/hooks/catch/123456/abcde",
      {
        body: JSON.stringify({
          name: event.target.name.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );

    const result = await res.json();
    // result.user => 'Ada Lovelace'
  };
  return (
    <div className="w-full h-56  flex items-center justify-center absolute text-white ">
      <div className="shadow-lg w-2/3 p-6 flex flex-wrap sm:flex-nowrap sm:space-x-2 bg-orange-400 rounded-lg relative -top-5 sm:-top-20 z-10">
        <div className="col-span-6 sm:col-span-6 lg:col-span-2 w-full sm:w-1/3 ">
          <label
            htmlFor="city"
            className="block w-full  text-sm font-medium text-"
          >
            Ország
          </label>
          <input
            type="text"
            name="city"
            id="city"
            autoComplete="address-level2"
            className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div className="col-span-6 sm:col-span-3 lg:col-span-2 w-full sm:w-1/3 ">
          <label
            htmlFor="region"
            className="block text-sm font-medium w-full  "
          >
            Indulási dátum
          </label>
          <input
            type="date"
            name="region"
            id="region"
            autoComplete="address-level1"
            className="mt-1 p-2  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div className="col-span-6 sm:col-span-3 lg:col-span-2 w-full sm:w-1/3 ">
          <label
            htmlFor="postal-code"
            className="block text-sm font-medium "
          >
            Erkezési dátum
          </label>
          <input
            type="date"
            name="postal-code"
            id="postal-code"
            autoComplete="postal-code"
            className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
