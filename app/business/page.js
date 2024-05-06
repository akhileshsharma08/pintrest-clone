import Image from "next/image";
import React from "react";
import { MdMail } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import { AiFillPieChart } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import Footer from "../components/Footer";

const cards1 = [
  {
    id: 1,
    clogo: <MdMail />,
    cname: "contact",
  },
  {
    id: 2,
    clogo: <FaDownload />,
    cname: "Downlaod",
  },
  {
    id: 3,
    clogo: <FaBell />,
    cname: "Subscribe",
  },
];
const cards2 = [
  {
    id: 1,
    clogo: <FaSuitcase />,
    cname: "For Business",
  },
  {
    id: 2,
    clogo: <MdSpaceDashboard />,
    cname: "For Creator",
  },
  {
    id: 3,
    clogo: <AiFillPieChart />,
    cname: "for Inverstor",
  },
];

const Business = () => {
  return (
    <div>
      <div className="row md:flex-row flex-col  flex justify-center items-center my-10">
        <div className="lcol md:w-1/2 w-full px-6 flex flex-col justify-center items-center text-center">
          <h5 className="font-bold ">Business</h5>
          <p className="my-4 md:text-[3rem] text-3xl tracking-wide">
            Pinterest business ranges deliver better and more inclusive search
            results
          </p>
          <p className="px-4 py-2 rounded-full bg-zinc-200 hover:bg-zinc-300 my-8 text-xl font-semibold">
            Know More
          </p>
        </div>
        <div className="lcol md:w-1/2 w-full  flex flex-col justify-center items-center text-center">
          <div className="imgCont relative w-full md:h-[40vw] h-[70vw]">
            <Image
              src={
                "https://images.ctfassets.net/2pyx8rwuvz6x/2HzLQ9gmHZS7E05XbhGb5t/daad516ce4c1133d4d13689c04cbcd08/BTR-NewsroomPost-feature-en-US__1_.png?fm=webp&q=85&w=1440&h=1440"
              }
              className="w-full object-fit"
              layout="fill"
              alt="business image"
            />
          </div>
        </div>
      </div>
      <h2 className="text-[3rem] font-semibold my-14 text-center ">
        business Center
      </h2>
      <div className="cards1 flex justify-around  items-center py-8 my-32 px-4">
        {cards1.map((item) => (
          <div key={item.id} className="text-center hover:text-red-600 mx-auto">
            <p className="text-[4rem] my-4  ">{item.clogo}</p>
            <h5 className="text-center">{item.cname}</h5>
          </div>
        ))}
      </div>

      <div className="row flex  flex-col md:flex-row-reverse justify-center items-center my-10">
        <div className="lcol md:w-1/2 w-full px-6 flex flex-col justify-center items-center text-center">
          <h5 className="font-bold text-[3rem]">A word from our CEO</h5>
          <p className="my-4 text-[1.5rem] tracking-tight">
            Hear from Pinterest CEO Bill Ready on the impacts of social media on
            teens’ well-being and his proposal for how we can create a new
            standard
          </p>
          <p className="px-4 py-2 rounded-full outline outline-2  hover:bg-zinc-300 my-8 text-xl font-semibold">
            Read More
          </p>
        </div>
        <div className="lcol md:w-1/2 w-full flex flex-col justify-center items-center text-center">
          <div className="imgCont relative w-full md:h-[40vw] h-[60vw]">
            <Image
              src={
                "https://images.ctfassets.net/2pyx8rwuvz6x/1SRVJ498dFAUNTtJpY51rK/b077a6715fd97650b420bfabaf118af7/Newsroom_word_from_ceo.png?fm=webp&q=85"
              }
              className="w-full object-fit"
              layout="fill"
              alt="business image"
            />
          </div>
        </div>
      </div>

      <h2 className="md:text-[3rem] text-2xl font-semibold my-14 text-center ">
        Looking for something else?
      </h2>
      <div className="cards2 flex justify-around  items-center py-16 my-32 px-4">
        {cards2.map((item) => (
          <div key={item.id} className="text-center hover:text-red-600 mx-auto">
            <p className="text-[4rem] my-4 ml-4 ">{item.clogo}</p>
            <h5 className="text-center">{item.cname}</h5>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Business;
