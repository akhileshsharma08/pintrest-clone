import Image from "next/image";
import Link from "next/link";
import React from "react";

const YellowSection = () => {
  return (
    <div className="bg-yellow-200 md:h-[85vh] h-screen flex items-center">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Image */}
        <div className="md:w-[40vw] w-full mx-auto py-4">
          <div className="imagebox relative w-full h-[30vh] rounded-4xl">
            <Image
              className="object-cover rounded-[40px]"
              layout="fill"
              alt="food image"
              src={
                "https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGluZGlhbiUyMHZlZyUyMGZvb2R8ZW58MHwxfDB8fHwy"
              }
            />
          </div>
        </div>
        {/* Text content */}
        <div className="text-center text-pink-700">
          <h1 className="md:text-6xl text-4xl font-bold my-6">Search for an idea</h1>
          <p className="text-lg px-6 md:px-10 font-semibold">
            What do you want to try next? Think of something you’re into – such
            as 'easy chicken dinner' – and see what you find.
          </p>
          <div className="mx-auto flex justify-center mt-6">
            <Link href={"/login"} className="text-white text-lg bg-pink-700 px-6 rounded-full py-2">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YellowSection;
