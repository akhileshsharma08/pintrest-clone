"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";

const PinBuilder = () => {

  const router = useRouter();
  const [postData, setPostData] = useState({});
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const imageId = uuidv4();
  const {id} =useParams()

  
  const handleInputText = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    
  };

  const HandleSavePin = async (e) => {
    e.preventDefault();
    try {
      console.log(file);
      if (!file) {
        console.error("No file selected");
        alert("no file selected");
        return;
      }

      // Generate a unique image name using uuidv4
      const imageExtension = file.name.split(".").pop();
      const imageName = `${imageId}.${imageExtension}`;

      const imageURL = new FormData();
      imageURL.append("file", file, imageName);

      // Upload file
      const uploadResponse = await axios.post("/api/upload", imageURL);
      if (uploadResponse.status === 200) {
        console.log("File uploaded successfully");
      }

      // Create post
      const postResponse = await axios.post("/api/post", {
        ...postData,
        id,
        imageURL: imageName,
      });
      if (postResponse) {
        toast.success("Post created successfully");
        router.push(`/profile/${id}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  // console.log(id,"params id")
  return (
    <div className="pin-builder  ">
      <h1 className="text-center font-semibold text-4xl my-2">Create Pin</h1>
      <hr />
      <div className="content md:flex-row flex-col  flex justify-center items-center gap-4 md:mx-8 ">
        <div className="imgbox mt-2 md:h-[30vw] h-[60%] md:w-1/3 w-1/2 bg-zinc-200 rounded-xl px-2 flex flex-col justify-center items-center">
          <div className="imgContainer w-full p-2 h-[60vw] border flex flex-col justify-center items-center rounded-lg overflow-hidden">
            {/* Input image */}
             {/* Display the uploaded image */}
             {imageUrl && <img src={imageUrl} alt="Selected" className="w-full h-auto" />}

            {/* Input image */}
            <input
              type="file"
              accept="image/*"
              className="hidden "
              name="file"
              id="fileInput"
              onChange={handleFileChange}
            />
            <label
              htmlFor="fileInput"
              className="text-6xl h-32 w-32 flex justify-center items-center bg-zinc-100 myimg p-20 text-center rounded-full font-semibold cursor-pointer"
            >
              +
            </label>
            <p className="mt-2">{!file ? "Select image" : file.name}</p>
          </div>
          {/* Save button */}
        </div>
        {/* form */}
        <div className="formbox w-2/3 flex flex-col md:w-full ">
          <input
            onChange={handleInputText}
            type="text"
            name="title"
            placeholder="Add a title "
            className="px-2 py-2 md:my-4 my-2 border-zinc-500 border-b-2 "
          />
          <textarea
            onChange={handleInputText}
            type="text"
            name="description"
            placeholder="Enter description "
            className="px-2 py-2 md:my-4 my-2 border-zinc-500 border-b-2 "
          />
          <input
            onChange={handleInputText}
            type="text"
            name="tags"
            placeholder=" Enter tags if any "
            className="px-2 py-2 md:my-4 my-2 border-zinc-500 border-b-2 "
          />
          <input
            onChange={handleInputText}
            type="text"
            name="board"
            placeholder="Enter Board Name "
            className="px-2 py-2 md:my-4 my-2 border-zinc-500 border-b-2 "
          />
          <input
            onChange={handleInputText}
            type="text"
            name="link"
            placeholder=" Enter link if any "
            className="px-2 py-2 md:my-4 my-2 border-zinc-500 border-b-2 "
          />
        </div>
      </div>
      <div className="buttonbox w-full flex justify-center items-center">
        <div className="w-1/4 text-center">
          <p
            onClick={HandleSavePin}
            className="px-6 py-3 text-center my-4 md:text-lg text-base text-white rounded-full bg-red-600 hover:bg-red-700 font-semibold"
          >
            Save
          </p>
        </div>
      </div>
      <div className="sample text-center font-bold mt-2 mb-10 flex justify-center items-center">
        <Link
          href={"/"}
          className="bg-zinc-200 outline outline-2 hover:bg-zinc-300 px-8 py-3 rounded-full"
        >
          Go to home feed
        </Link>
      </div>
      <Toaster />
    </div>
  );
};

export default PinBuilder;
