"use client";

import axios from "axios";
// ================================================
import { createContext, useContext, useEffect, useState } from "react";

const MyContext = createContext();

export function ContextProvider({ children }) {
  const [userDetails, setUserDetails] = useState({});
  const [PostDetails, setPostDetails] = useState({});

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/post`);
      console.log(response, "rsp");
      setPostDetails(response.data.allPosts);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <MyContext.Provider
      value={{ userDetails, setUserDetails, PostDetails, setPostDetails }}
    >
      {children}
    </MyContext.Provider>
  );
}

export function FetchDetails() {
  return useContext(MyContext);
}
