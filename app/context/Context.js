"use client"

import axios from 'axios';
import { createContext, useEffect, useState } from 'react';


const MyContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [userDetail, setUserDetail] = useState([]);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    const res = await axios.get('/api/me')
    console.log(res.data);
    setUserDetail(res.data.data._id)
}
 

  return (
    <MyContext.Provider value={{ posts,userDetail}}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
