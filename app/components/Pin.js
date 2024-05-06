"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaShareAltSquare } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaGrinHearts } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import { exploreCards } from "../utils/ExploreCards";

const Pin = () => {
  const { id } = useParams();
  const [filteredItem,setFilteredItem] = useState([])
  const singlePost = {
    id: "1",
    title: "Beautiful sunset over the mountains",
    category: "Nature",
    cardImage:
      "https://images.unsplash.com/photo-1504937551116-cb8097e6f02a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHJhbmRvbXxlbnwwfDF8MHx8fDI%3D",
  };

  useEffect(()=>{
const myfilteredItem = exploreCards.filter((e)=>(e.id==id))
setFilteredItem(myfilteredItem[0])
  },[id])
  console.log(singlePost,"hgghhgh")

  return (
    <>
  <div className="main bg-zinc-100">
  <div className="container md:w-3/4 w-full mx-auto py-2">
    <div className="cardbox md:flex-row flex-col flex justify-center border rounded-lg shadow-3xl bg-white text-gray-800">
    <div className="md:w-1/2 relative full md:h-[40vw] h-[40vh] w-full overflow-hidden">
              <Image
                src={`${filteredItem.cardImage}`}
                alt={singlePost.title}
                layout="fill"
                className="rounded-t-[20px] w-full object-fit "
              />
            </div>
      {/* text content of pin */}
      <div className="textContentBox relative md:w-1/2 w-full p-4 md:p-2">
        <div className="description my-2">
          <div className="utilitybox flex justify-between items-center mb-2">
            <div className="box1 flex justify-start gap-2 md:text-3xl text-lg">
              <h1 className="p-2 rounded-full hover:bg-zinc-200">
                <FaShareAltSquare />
              </h1>
              <h1 className="p-2 rounded-full hover:bg-zinc-200">
                <MdMoreHoriz />
              </h1>
            </div>
            <button className="bg-red-600 hover:bg-red-700 px-6 text-lg py-1 rounded-full text-white">
              Save
            </button>
          </div>
          <div className="userbox flex justify-between items-center gap-2 md:text-3xl text-lg mb-2">
            <div className="flex justify-center items-center">
              <h1>
                <FaUserCircle />
              </h1>
              <h1>username</h1>
            </div>
            <button className="bg-zinc-200 hover:bg-zinc-300 px-4 py-2 text-lg rounded-full">
              Follow
            </button>
          </div>
          <h1 className="md:text-4xl text-xl font-semibold capitalize my-2">
            {filteredItem.title}
          </h1>
          <h5>
            <Badge variant="outline">{singlePost.category}</Badge>
          </h5>
          <p className="text-lg md:visible hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            assumenda et, laborum blanditiis possimus obcaecati soluta ut quia
            ducimus, praesentium alias dignissimos debitis harum perferendis
            distinctio! Pariatur eum ea molestias.
          </p>
          <div className="commentbox">
            <h1 className="font-semibold my-2">Comments</h1>
            <div className="flex justify-start items-center gap-1">
              <h1>
                <FaUserCircle />
              </h1>
              <p className="my-1">username</p>
            </div>
            <p>this is sample comment</p>
          </div>
        </div>
        <div className="sample w-full absolute left-1/2 bottom-2 -translate-x-1/2 px-4">
   <div className="reactionbox  font-semibold flex justify-between items-center text-lg">
          <h1>What do you think?</h1>
          <div className="iconbox flex items-center">
            <div className="flex items-center">
              <p className="flex items-center">
                <FaGrinHearts className="mr-1" />
                {Math.floor(Math.random() * 20)}
              </p>
            </div>
            <h1 className="ml-2 p-2 rounded-full bg-zinc-200 hover:bg-zinc-300 font-bold">
              <FaRegHeart />
            </h1>
          </div>
        </div>
        <div className="iconwithsearchbox flex justify-start items-center">
          <div className="flex items-center">
            <p className="flex items-center text-lg">
              <FaUserCircle className="mr-1" />
            </p>
          </div>
          <div className="flex items-center flex-grow">
            <input
              type="text"
              className="bg-zinc-200 w-full rounded-full border px-2 text-base md:text-lg py-2"
              placeholder="Add a comment"
            />
          </div>
        </div>
        </div>
     
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Pin;
