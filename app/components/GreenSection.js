import Image from "next/image";
import React from "react";

const GreenSection = () => {
  return (
    <div className="bg-green-100 md:h-[80vh] h-screen text-center text-teal-700 flex items-center">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Text content */}
        <div className="text-center">
          <h1 className="md:text-6xl text-4xl font-bold my-6">Save your idea like</h1>
          <p className="text-xl px-10 font-semibold">
            Collect Your Favourites so you can get back to them later in mean time with ease.
          </p>
          <button className="text-white text-lg bg-teal-700 px-6 my-6 rounded-full py-2">
            Explore
          </button>
        </div>
        {/* Image */}
        <div className="relative">
          <div className="imagebox relative md:w-[40vw] w-full lg:h-[30vw] h-[30vh] rounded-4xl md:px-0 px-4">
            <Image
              className="object-cover rounded-[40px]"
              layout="fill"
              alt="food image"
              src={"https://images.unsplash.com/photo-1650138278103-1f8a3d208cb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGhvbWUlMjBkaXl8ZW58MHwxfDB8fHwy"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenSection;
