import React from "react";

const items = [
  { image: "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", name: "1", price: "", stars: "" },
  { image: "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1204&q=80", name: "2", price: "", stars: "" },
  { image: "https://images.unsplash.com/photo-1588007789786-3313bc8a0016?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", name: "3", price: "", stars: "" },
  { image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", name: "4", price: "", stars: "" },
  { image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", name: "5", price: "", stars: "" },
  { image: "https://images.unsplash.com/photo-1503152394-c571994fd383?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", name: "6", price: "", stars: "" },
];

const imga =
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80";

export default function CardOne() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3  gap-8 rounded-lg  mt-44 px-10  ">
      {items.map((x) => {
        return (
          <div
            key={x.name}
            className="group transition w-full flex justify-center items-center rounded-xl h-96  bg-cover max-w-full  "
          >
            <div className="absolute gap-8 -z-10">
              <img className="rounded-lg h-96 w-[500px]" src={x.image} />
            </div>

            <div className="transition z-10 w-2/3 h-1/3 border-[2px] border-dashed text-white bg-orange-500 border-white rounded-lg p-5 group-hover:hidden">
              <p className=" font-semibold text-2xl">Olaszország</p>
              Sydney Tour 5 days 4.8 (200) $800$1000
            </div>
          </div>
        );
      })}
    </div>
  );
}
