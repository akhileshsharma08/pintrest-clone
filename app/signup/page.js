"use client";

import React, { useState } from "react";
import Logo from "@/public/assets/plogo.svg";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    dob: "",
  });
  const router = useRouter();
  const handleInputText = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    if (!registerData.username || !registerData.email || !registerData.password) {
      setError("all fields are required");
      return;
    }
    try {
      const response = await axios.post("/api/signup", registerData);
      if (response.status == 200) {
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  }

  console.log(registerData, "reg");
 

  return (
    <>
      <div className="container mx-auto  flex justify-center items-center">
        <div className="formSection md:w-[46vw] w-11/12 bg-zinc-100 shadow-lg mt-3 rounded-3xl ">
          <div className="logobox flex justify-center my-3">
            <Image
              src={Logo}
              width={10}
              height={10}
              alt="pintrestLogo"
              className="w-10 h-10"
            />
          </div>
          <h1 className="text-center my-2 text-3xl font-semibold">
            Welcome to Pintrest
          </h1>
          <div className="form flex justify-center items-center py-4">
            <div className="test w-3/4">
              <div className="relative mb-1">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  User Name
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full bg-white rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="User Name"
                  onChange={handleInputText}
                />
              </div>
              <div className="relative mb-1">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Email Address
                </label>
                <input
                  type="email"
                  id="Email Address"
                  name="email"
                  className="w-full bg-white rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Email address"
                  onChange={handleInputText}
                />
              </div>
              <div className="relative mb-1">
                <label
                  for="password"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-white rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Create Password"
                  onChange={handleInputText}
                />
              </div>
              <div className="relative mb-1">
                <label for="dob" className="leading-7 text-sm text-gray-600">
                  Date of birth
                </label>
                <input
                  type="date"
                  id="date"
                  name="dob"
                  className="w-full bg-white rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="dob"
                  onChange={handleInputText}
                />
              </div>

              <button
                type="submit"
                onClick={handleSignup}
                className="bg-red-600 hover:bg-red-700 w-full my-2 px-8 py-2 rounded-full text-white"
              >
                Sign up
              </button>
              <p className="text-center text-gray-700 font-semibold my-2">Or</p>
              <div className="flex items-center my-2 bg-blue-600 w-full px-2 py-2 rounded-full text-white">
                <div className="mr-2">
                  <BsFacebook className="text-white text-lg" />
                </div>
                <p>Sign up with facebook</p>
              </div>
              <div className="flex items-center my-2 border w-full px-2   py-2 rounded-full ">
                <div className="mr-2">
                  <FcGoogle className="text-white text-lg" />
                </div>
                <p>Sign up with Google</p>
              </div>

              <p className="text-gray-500 text-xs text-center">
                By continuing, you agree to Pinterest's Terms of Service
              </p>
              <h5 className="text-sm font-semibold text-center text-gray-700 ">
                Already member?{" "}
                <Link href={"/login"}>
                  <span className="hover:underline">Log in</span>
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
