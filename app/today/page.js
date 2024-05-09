"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FetchDetails } from "../context/MyContext";
import { todayCards } from "../utils/todayCards";
import Link from "next/link";
import MyTodayPin from "./_component/MyTodayPin";
const Today = () => {
  const [isClient, setIsClient] = useState(false);
  const [myfilteredItems, setMyfilteredItems] = useState([]);
  const { PostDetails } = FetchDetails();

  const mydate = new Date().toLocaleDateString("en-IN");

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (PostDetails && PostDetails.length > 0) {
      const filtered = PostDetails.filter(
        (el) => new Date(el.createdAt).toLocaleDateString("en-IN") === mydate
      );
      setMyfilteredItems(filtered);
    }
  }, [PostDetails, mydate]);

  console.log(myfilteredItems, "filteredItems");

  return (
    <>
      <div className="text-center my-6">
        <h5 className="text-lg">{mydate}</h5>
        <h1 className="text-4xl  my-2">Stay updated</h1>
      </div>
      {!myfilteredItems ? (
        "No pins found !"
      ) : (
        <MyTodayPin data={myfilteredItems} />
      )}

      <div className="sample flex justify-center items-center flex-col text-center font-bold my-10">
        <p>{!myfilteredItems ? "" : "That's all for today!"}</p>
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
