"use client"


import axios from "axios";
// ================================================
import { createContext, useContext, useEffect, useState } from "react";


const MyContext = createContext();

export function ContextProvider({ children }) {
  const [userDetails, setUserDetails] = useState([]);
  const [PostDetails, setPostDetails] = useState([]);



  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const res = await axios.get('/api/user');
        setUserDetails(res.data.data._id);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    getUserDetails();
  }, []);

 

  return (
    <MyContext.Provider value={{ userDetails, setUserDetails ,PostDetails, setPostDetails}}>
      {children}
    </MyContext.Provider>
  );
}

export function FetchDetails() {
  return useContext(MyContext);
}