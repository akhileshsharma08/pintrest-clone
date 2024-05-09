import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MyTodayPin = ({data}) => {
  return (
    <>
      
      <div
        className="mt-7 px-2 md:px-5
     columns-2 md:columns-3
     lg:columns-4 mb-4
     xl:columns-5 space-y-3 mx-auto"
      >
        {/* <div className="cards-grid grid grid-cols-2 md:grid-cols-3 mt-8 px-4 lg:grid-cols-4 md:gap-4 gap-1 justify-center"> */}
        {data && data.map((item, index) => (
          <Link href={`/pindetail/${item._id}`}>
          <div
            className="relative rounded-3xl 
            cursor-pointer hover:bg-gray-800 hover:scale-105 transition-all ease-in "
            key={index}
          >
            <Image
              src={`/assets/uploads/${item.imageURL}`}
              alt={item.title}
              width={500}
              height={500}
              className="rounded-3xl 
        cursor-pointer relative z-0 w-full hover:opacity-70  "
            />
            <div className="absolute left-1/2 w-3/4 -translate-x-1/2 md:text-base text-xs bottom-2 text-white">
              <p className="underline hidden font-bold">{item.category}</p>
              <p className="w-full  hidden">{item.title}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
     
    </>
  )
}

export default MyTodayPin