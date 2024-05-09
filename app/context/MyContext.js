"use client";

import axios from "axios";
// ================================================
import { createContext, useContext, useEffect, useState } from "react";

const MyContext = createContext();

export function ContextProvider({ children }) {
  const [userDetails, setUserDetails] = useState({});
  const [PostDetails, setPostDetails] = useState({});
  const [singleUserPostsDetails, setSingleUserPostsDetails] = useState({});

  useEffect(() => {
    fetchAllPost();
  }, []);

  const fetchAllPost = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/post`);
      // console.log(response, "rsp");
      setPostDetails(response.data.allPosts);
    } catch (error) {
      console.log("error");
    }
  };
  // const singleUserPosts = async (id) => {
  //   try {
  //     const response = await axios.get(`http://localhost:3000/api/post/${id}`);
  //     // console.log(response, "rsp");
  //     setSingleUserPostsDetails(response.data.userPosts);
  //   } catch (error) {
  //     console.log("error");
  //   }
  // };

  return (
    <MyContext.Provider
      value={{ userDetails, setUserDetails, PostDetails, setPostDetails,singleUserPostsDetails, setSingleUserPostsDetails }}
    >
      {children}
    </MyContext.Provider>
  );
}

export function FetchDetails() {
  return useContext(MyContext);
}
