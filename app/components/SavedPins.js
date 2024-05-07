"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"; // Import useEffect and useState
import { exploreCards } from "../utils/ExploreCards";
import dynamic from "next/dynamic";

const SavedPins = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set isClient to true when component mounts on client side
  }, []);

  return (
    <div className="headings font-bold text-center my-4 w-full">
      <h5 className="text-lg">{new Date().toLocaleDateString("en-IN")}</h5>
      <h1 className="text-4xl my-2">Stay inspired</h1>
      <div className="mt-7 px-2 md:px-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-6 gap-2 mx-auto">
        {exploreCards.map((item, index) => (
          <Link key={index} href={`/pin/${item.id}`}>
            <div className="relative rounded-3xl cursor-pointer hover:bg-gray-800 md:hover:scale-105 transition-all ease-in">
              {isClient ? ( // Conditionally render Image component on client side
                <Image
                  src={item.cardImage}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="rounded-3xl cursor-pointer"
                />
              ) : (
                <img src={item.cardImage} alt={item.title} /> // Fallback for server-side rendering
              )}
              <p className="absolute left-1/2 w-3/4 -translate-x-1/2 text-lg bottom-10 text-white">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="sample text-center my-4 font-bold">
        <p>That's all for today!</p>
        <p className="my-2">Come back tomorrow for more inspiration</p>
        <Link href={"/"} className="bg-zinc-100 px-4 py-1 rounded-full">
          Go to home feed
        </Link>
      </div>
    </div>
  );
};

// export default SavedPins;
export default dynamic (() => Promise.resolve(SavedPins), {ssr: false})

