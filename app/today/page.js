import Image from "next/image";
import React from "react";
import { todayCards } from "../utils/todayCards";
import Link from "next/link";

const Today = () => {
  return (
    <>
      <div className="text-center my-6">
        <h5 className="text-lg">{new Date().toLocaleDateString("en-IN")}</h5>
        <h1 className="text-4xl  my-2">Stay updated</h1>
      </div>
      <div
        className="mt-7 px-2 md:px-5
     columns-2 md:columns-3
     lg:columns-4 mb-4
     xl:columns-5 space-y-3 mx-auto"
      >
        {/* <div className="cards-grid grid grid-cols-2 md:grid-cols-3 mt-8 px-4 lg:grid-cols-4 md:gap-4 gap-1 justify-center"> */}
        {todayCards.map((item, index) => (
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
        cursor-pointer relative z-0 w-full hover:opacity-70  "
            />
            <div className="absolute left-1/2 w-3/4 -translate-x-1/2 md:text-base text-xs bottom-2 text-white">
              <p className="underline hidden font-bold">{item.category}</p>
              <p className="w-full  hidden">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="sample flex justify-center items-center flex-col text-center font-bold my-10">
        <p>That's all for today!</p>
        <p className="my-4">Come back tomorrow for more inspiration</p>
        <Link href="/">
          <p className="bg-zinc-200 w-32 outline outline-1 hover:bg-zinc-300 text-xl py-2 rounded-full">
            Go to Home
          </p>
        </Link>
      </div>
    </>
  );
};

export default Today;
