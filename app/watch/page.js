import React from "react";
import { exploreCards } from "../utils/ExploreCards";
import Image from "next/image";
import Link from "next/link";
import { watchCards } from "../utils/watchCards";
import CommonPins from "../components/CommonPins";

const Watch = () => {
  const trial = [
    {
      id: 1,
      category: "fashion",
      title: "discover trendy looks",
      pic: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      category: "beauty",
      title: "try latest tips & tricks",
      pic: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGJlYXV0eXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      category: "home",
      title: "design your ideal space",
      pic: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWV8ZW58MHx8MHx8fDA%3D",
    },
  ];
  return (
    <>
      <div className="cards-grid grid grid-cols-3 md:grid-cols-3 mt-8 px-4  md:gap-4 gap-1 justify-center">
        {trial.map((item, index) => (
          <div
            className="imagebox relative w-full md:h-[40vw] h-96  mb-10 "
            key={index}
          >
            <Image
              src={item.pic}
              alt={item.title}
              className="object-fit   ease-in-out duration-100"
              layout="fill"
            />
            <div className="text absolute left-1/2 w-2/3 -translate-x-1/2 md:text-xl text-sm bottom-4 font-bold capitalize text-zinc-50">
              <p className="underline">{item.category}</p>
              <p className="">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      <CommonPins/>
      {/* --------------- */}
      <div
        className="mt-7 px-2 md:px-5
     columns-2 md:columns-3
     lg:columns-4 mb-4 
     xl:columns-5 space-y-3 mx-auto"
      >
          {/* <div className="cards-grid grid grid-cols-2 md:grid-cols-3 mt-8 px-4 lg:grid-cols-4 md:gap-4 gap-1 justify-center"> */}
          {watchCards.map((item, index) => (
            <div
              className="relative rounded-3xl 
              cursor-pointer hover:bg-gray-800 hover:scale-105 transition-all ease-in "
              key={index}
            >
              <Image
                src={item.cardImage}
                alt={item.title}
                width={500}
                height={500}
                className="rounded-3xl 
        cursor-pointer relative z-0 hover:opacity-70  "
              />
            <p className="absolute hidden left-1/2 w-3/4 -translate-x-1/2 text-lg bottom-6 text-white">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <div className="sample text-center font-bold my-10">
          <p>That's all for today!</p>
          <p className="my-4">Come back tomorrow for more inspiration</p>
          <Link href={"/"} className="bg-zinc-200 outline outline-2 hover:bg-zinc-300 px-8 py-3 rounded-full">
            Go to home feed
          </Link>
        </div>
    </>
  );
};

export default Watch;
