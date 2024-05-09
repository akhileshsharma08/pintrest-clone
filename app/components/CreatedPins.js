"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { exploreCards } from "../utils/ExploreCards";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { FetchDetails } from "../context/MyContext";

const CreatedPins = () => {
  const [isClient, setIsClient] = useState(false);
  const [myfilteredItems,setMyfilteredItems] = useState([])
  const { PostDetails} = FetchDetails();
  const {id} = useParams()


  useEffect(() => {
    setIsClient(true); 
  }, []);
  
  useEffect(()=>{
    if (PostDetails && PostDetails.length > 0) {
      const filtered = PostDetails.find((el) => el.userId === id);
      setMyfilteredItems(filtered);
  }

  },[id])

  console.log(myfilteredItems,"mfi")

  return (
    <div className="headings font-bold text-center my-4 w-full">
      <h5 className="text-lg">{new Date().toLocaleDateString("en-IN")}</h5>
      <h1 className="text-4xl my-2">Stay inspired</h1>
      {myfilteredItems.length === 0 ? ( 
        <p className="text-center">No pins created yet!</p> 
      ) : (
        <div className="mt-7 px-2 md:px-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-4 gap-2 mx-auto">
          {myfilteredItems&& myfilteredItems.map((item, index) => (
            <Link key={index} href={`/pin/${item.id}`}>
              <div className="relative rounded-3xl cursor-pointer hover:bg-gray-800 md:hover:scale-105 transition-all ease-in">
                {isClient ? (
                  <Image
                    src={`/assets/uploads/${item.imageURL}`}
                    alt={item.title}
                    width={500}
                    height={500}
                    className="rounded-3xl h-full cursor-pointer"
                  />
                ) : (
                  <img src={`/assets/uploads/${item.imageURL}`} alt={item.title} />
                )}
                <p className="absolute hidden left-1/2 w-3/4 -translate-x-1/2 text-lg bottom-4 text-white">
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
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

export default dynamic(() => Promise.resolve(CreatedPins), { ssr: false });
