"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SavedPins from "@/app/components/SavedPins";
import CreatedPins from "@/app/components/CreatedPins";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const {id} = useParams()

  useEffect(() => {
    fetchUserData();
    fetchPostsData();
  }, []);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/userinfo/${id}`);
      setUser(response.data.user);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchPostsData = async () => {
    try {
      const response = await axios.get("/api/post");
      setUserPosts(response.data);
    } catch (error) {
      console.error("Error fetching user posts:", error);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center text-4xl">Loading...</div>;
  }

  return (
    <div className="mx-auto">
      <div className="seminavbar w-full flex justify-center items-center text-slate-800 bg-zinc-50 px-4">
        <div className="userBox mx-auto py-4 text-center">
          <div className="userProfile flex justify-center">
            <div className="flex w-32 h-32 bg-zinc-200 p-1 rounded-full justify-center items-center my-2 mx-auto">
              <label
                htmlFor="fileInput"
                className="md:text-6xl text-4xl capitalize myimg p-6 text-center rounded-full font-semibold cursor-pointer"
              >
                {!user ? "@" : user.username.charAt(0)}
              </label>
            </div>
          </div>
          <h2 className="text-3xl mt-2 font-semibold capitalize">
            {!user ? "" : user.username}
          </h2>
          <h5 className="text-slate-600">{!user ? "" : user.email}</h5>
          <p>{Math.floor(Math.random() * 100)} Followers</p>
          <div className="fileUploader flex justify-center gap-2 font-semibold mt-2 mx-auto">
            <Link href={`/createpin/${id}`}>
              <p className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-2">
                Create Pin
              </p>
            </Link>

            <p className="px-4 py-2 rounded-full bg-zinc-200 hover:bg-zinc-300">
              Share
            </p>
            <p className="px-4 py-2 rounded-full bg-zinc-200 hover:bg-zinc-300">
              Edit Profile
            </p>
          </div>
        </div>
      </div>
      <div className="profilebox flex justify-center items-center">
        <div className="flex justify-center">
          <Tabs defaultValue="Saved" className="w-[90vw]">
            <TabsList className="flex">
              <TabsTrigger
                className="flex-1 font-semibold hover:bg-zinc-100"
                value="Created"
              >
                Created
              </TabsTrigger>
              <TabsTrigger
                className="flex-1 font-semibold hover:bg-zinc-100"
                value="Saved"
              >
                Saved
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Created">
              <CreatedPins data={userPosts} />
            </TabsContent>
            <TabsContent value="Saved">
              <SavedPins />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

// export default Profile;
export default dynamic (() => Promise.resolve(Profile), {ssr: false})


