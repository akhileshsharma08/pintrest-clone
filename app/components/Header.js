"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import logo from "@/public/assets/plogo.svg";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaBell } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { FaCircleUser } from "react-icons/fa6";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter()

  const HandleLogout = async () => {
    await signOut();
    localStorage.clear()
    router.push("/")
  };
  const [isSideMenuOpen, setMenu] = useState(false);
  const [isProfilePage, setIsProfile] = useState(false);

  const navlinks1 = [
    { label: "Today", link: "today" },
    { label: "Watch", link: "watch" },
    { label: "Explore", link: "explore" },
  ];
  const navlinks2 = [
    { label: "About", link: "about" },
    { label: "Business", link: "business" },
    { label: "Press", link: "#" },
  ];

  const handleLogout = async () => {
    console.log("Logout successful!");
    localStorage.clear();
    sessionStorage.clear();
    // await cookies.remove("token");
      router.push("/login");
  
  };

  return (
    <>
      <nav className={`sticky top-0 left-0 z-10 flex justify-between px-8 items-center bg-white py-4 z-1`}>
          <section className="flex items-center gap-4">
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
            <Link href={"/"} className="">
              <div className="flex justify-center items-center">
                <Image
                  width={100}
                  height={50}
                  src={logo}
                  alt="pintrest logo"
                  className="w-10 h-10"
                />
                <h1 className="text-red-600 text-3xl font-bold mx-2">
                  Pintrest
                </h1>
              </div>
            </Link>
          </section>
          {navlinks1.map((d, index) => (
            <Link
              key={index}
              className="hidden lg:block text-black hover:bg-gray-200 p-1 rounded font-semibold"
              href={`/${d.link}`}
            >
              {d.label}
            </Link>
          ))}
          <div className="searchbox w-[1/2 vw]">
          <input
            type="text"
            placeholder="Search"
            className="hidden lg:block w-full px-4 py-2 border rounded-full"
          />
          </div>
          {navlinks2.map((d, index) => (
            <Link
              key={index}
              className="hidden lg:block text-black hover:bg-gray-200 p-1 rounded font-semibold"
              href={`/${d.link}`}
            >
              {d.label}
            </Link>
          ))}
   
          <ul className="hidden md:flex  justify-end items-center gap-1 ulRight">
            {!session ? (
              <>
                <Link href={"/login"}>
                  <li className="font-semibold bg-red-600 hover:bg-red-700 text-white p-2 rounded-full">
                    Log in
                  </li>
                </Link>
                <Link href={"/signup"}>
                  <li className="font-semibold bg-gray-200 hover:bg-gray-300 p-2 rounded-full">
                    Sign up
                  </li>
                </Link>
              </>
            ) : (
              <>
                <p
                 
                  className="  text-zinc-400 text-2xl hover:bg-zinc-100  p-2 rounded-full "
                >
                  <FaBell/>
                </p>
                <p
                
                  className="  text-zinc-400 text-2xl hover:bg-zinc-100  p-2 rounded-full "
                >
                  <AiFillMessage/>
                </p>
                <Link
                  href={"/profile"}
                  className="  text-zinc-400 text-2xl hover:bg-zinc-100 hover:text-red-600 px-4 py-2 rounded-full "
                >
                  <FaCircleUser/>
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 border-l text-white  hover:bg-red-700 px-4 py-2 rounded-full "
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
