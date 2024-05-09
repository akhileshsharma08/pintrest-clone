"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaBell } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { FaCircleUser } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import logo from "@/public/assets/plogo.svg";
import axios from "axios";
import { FetchDetails } from "../context/MyContext";

const Header = () => {
 
  const router = useRouter();
  const [session, setSession] = useState({});
  const pathname = usePathname();
  const { userDetails,setUserDetails ,PostDetails} = FetchDetails();

  useEffect(()=>{
setSession(userDetails)
  },[userDetails])

 
  // console.log(session, "sess");

  const handleLogout = async () => {
    try {
      const response = await axios.get("/api/logout");
      console.log("Logout successful!");
      localStorage.clear();
      sessionStorage.clear();
      setSession(null)
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <>
      <nav
        className={`sticky top-0 left-0 z-10 flex justify-between md:px-8 px-4 items-center bg-white py-4 `}
      >
        <section className="flex items-center md:gap-4">
          <Link href={"/"}>
            <div className="flex justify-center items-center">
              <Image
                width={100}
                height={50}
                src={logo}
                alt="pintrest logo"
                className="w-10 h-10"
              />
              <h1 className="md:block hidden text-red-600 md:text-3xl text-xl font-bold md:mx-2">
                Pintrest
              </h1>
            </div>
          </Link>
        </section>
        {/* dropdown ------ */}
        <div className="relative">
          <select
            className="md:hidden  block border rounded-full appearance-none bg-black text-white border-gray-300 py-1 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-black text-base px-4 capitalize"
            onChange={(e) => router.push(e.target.value)}
            value={pathname}
          >
            <option className="pr-2" value="/">
              home{" "}
            </option>
            <option value="/today">today </option>
            <option value="/watch">watch </option>
            <option value="/explore">explore </option>
          </select>
          <span className="absolute right-0 top-0 h-full w-10 text-center text-white pointer-events-none flex items-center justify-center">
            <MdKeyboardArrowDown />
          </span>
        </div>
        {/* dropdown-----end */}
        {/* Navlinks */}
        <ul className="hidden md:flex justify-between items-center gap-3 capitalize">
          <Link href="/today">
            <li
              className={`navlink hover:bg-black hover:text-white rounded-full px-3 py-1 ${
                pathname === "/today" ? "active bg-black  text-white" : ""
              }`}
            >
              Today
            </li>
          </Link>
          <Link href="/watch">
            <li
              className={`navlink hover:bg-black hover:text-white rounded-full px-3 py-1 ${
                pathname === "/watch" ? "active bg-black  text-white" : ""
              }`}
            >
              Watch
            </li>
          </Link>
          <Link href="/explore">
            <li
              className={`navlink hover:bg-black hover:text-white rounded-full px-3 py-1  ${
                pathname === "/explore" ? "active bg-black  text-white" : ""
              }`}
            >
              Explore
            </li>
          </Link>
          <li className="md:block hidden searchbox w-[25vw]">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border rounded-full"
            />
          </li>
          <Link href="/about">
            <li
              className={`navlink hover:bg-black hover:text-white rounded-full px-3 py-1 ${
                pathname === "/about" ? "active bg-black  text-white" : ""
              }`}
            >
              About
            </li>
          </Link>
          <Link href="/business">
            <li
              className={`navlink hover:bg-black hover:text-white rounded-full px-3 py-1 ${
                pathname === "/business" ? "active bg-black  text-white" : ""
              }`}
            >
              Business
            </li>
          </Link>
          <Link href="/">
            <li
              className={`navlink hover:bg-black hover:text-white rounded-full px-3 py-1 ${
                pathname === "/press" ? "active bg-black  text-white" : ""
              }`}
            >
              Press
            </li>
          </Link>
        </ul>
        {/* End Navlinks */}
        <ul className="flex  justify-end items-center gap-1 ulRight">
          {!session?.userId ? (
            <>
              <Link href={"/login"}>
                <li className="font-semibold md:text-sm text-base bg-red-600 hover:bg-red-700 text-white md:p-2 p-1 rounded-full">
                  Log in
                </li>
              </Link>
              <Link href={"/signup"}>
                <li className="font-semibold md:text-sm text-base bg-gray-200 hover:bg-gray-300 md:p-2 p-1 rounded-full">
                  Sign up
                </li>
              </Link>
            </>
          ) : (
            <>
              <p className="text-zinc-400 text-2xl hover:bg-zinc-100 p-2 rounded-full">
                <FaBell />
              </p>
              <p className="text-zinc-400 hidden text-2xl hover:bg-zinc-100 p-2 rounded-full">
                <AiFillMessage />
              </p>
              <Link
                href={`/profile/${userDetails.userId}`}
                className="text-zinc-400 text-2xl hover:bg-zinc-100 hover:text-red-600 px-4 py-2 rounded-full"
              >
                <FaCircleUser />
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 border-l md:text-sm text-base text-white hover:bg-red-700 md:px-4 px-2 py-1 rounded-full"
              >
                Log out
              </button>
            </>
          )}
        </ul>
      </nav>
      <hr />
    </>
  );
};

export default Header;
// export default dynamic(() => Promise.resolve(Header), { ssr: false });
