import React from "react";

const items = [
  { image: "", name: "1", price: "", stars: "" },
  { image: "", name: "2", price: "", stars: "" },
  { image: "", name: "3", price: "", stars: "" },
  { image: "", name: "4", price: "", stars: "" },
  { image: "", name: "5", price: "", stars: "" },
  { image: "", name: "6", price: "", stars: "" },
];

export default function CardOne() {
  return (
    <div className="grid grid-cols-3 gap-8 rounded-lg  mt-44 px-10 bg ">
      {items.map((x) => {
        return (
          <div
            key={x.name}
            className=" flex justify-center items-center rounded-xl h-96 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80')] bg-cover "
          >
            <div className="w-2/3 h-1/3 bg-white border-[2px] border-dashed border-black p-5">
              <p className="font-semibold text-2xl">Olaszország</p>
              Sydney Tour 5 days 4.8 (200) $800$1000
            </div>
          </div>
        );
      })}
    </div>
  );
}
