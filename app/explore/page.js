import React from "react";
import { exploreCards } from "../utils/ExploreCards";
import Image from "next/image";
import Link from "next/link";

const Explore = () => {
  return (
    <>
      <div className="headings font-bold text-center my-4">
        {/* <h5 className="text-lg">28 April 2024</h5> */}
        <h5 className="text-lg">{new Date().toLocaleDateString("en-IN")}</h5>
        <h1 className="text-4xl  my-2">Stay exploring</h1>
        <div
          className="mt-7 px-2 md:px-5
     columns-2 md:columns-3
     lg:columns-4 mb-4
     xl:columns-5 space-y-3 mx-auto"
        >
          {/* <div className="cards-grid grid grid-cols-2 md:grid-cols-3 mt-8 px-4 lg:grid-cols-4 md:gap-4 gap-1 justify-center"> */}
          {exploreCards.map((item, index) => (
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
        cursor-pointer relative z-0 h-full hover:opacity-70  "
              />

              <p className="absolute hidden left-1/2 w-3/4 -translate-x-1/2 md:text-lg text-base bottom-6 text-white">
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <div className="sample text-center font-bold my-10">
          <p>That's all for today!</p>
          <p className="my-4">Come back tomorrow for more inspiration</p>
          <Link
            href={"/"}
            className="bg-zinc-200 outline outline-2 hover:bg-zinc-300 px-8 py-3 rounded-full"
          >
            Go to home feed
          </Link>
        </div>
      </div>
    </>
  );
};

export default Explore;
