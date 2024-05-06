import React from "react";
import YellowSection from "./YellowSection";
import GreenSection from "./GreenSection";
import HomeCards from "./HomeCards";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <div className="headings text-center md:text-[4rem] text-3xl font-semibold pb-10">
        <h1 className=" mt-6  ">Get Your Next</h1>
        <h1 className=" mt-8 text-yellow-600 ">chai time snacks idea</h1>
      </div>
      <HomeCards/>
      <YellowSection/>
      <GreenSection/>
      <Footer/>
    </>
  );
};

export default HomePage;
