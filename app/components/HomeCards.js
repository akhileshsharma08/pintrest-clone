import Image from 'next/image'
import React from 'react'

const HomeCards = () => {
     const cardds = [
        {
          "id": "1",
          "title": "Beautiful sunset over the mountains",
          "category": "Nature",
          "cardImage": "https://images.unsplash.com/photo-1700945758218-50a97ac77ae4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D"
        },
        {
          "id": "2",
          "title": "Exploring the depths of the ocean",
          "category": "Adventure",
          "cardImage": "https://images.unsplash.com/photo-1639248722571-7760e88c58b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxyYW5kb218ZW58MHwxfDB8fHwy"
        },
        {
          "id": "3",
          "title": "A cozy cabin in the snowy woods",
          "category": "Travel",
          "cardImage": "https://images.unsplash.com/photo-1518874012551-d0c5cc5a919f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"
        },
        {
          "id": "4",
          "title": "Colorful hot air balloons in the sky",
          "category": "Travel",
          "cardImage": "https://images.unsplash.com/photo-1649978739936-fdd7b7ab161f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM4fHxyYW5kb218ZW58MHwxfDB8fHwy"
        },
        // {
        //   "id": "5",
        //   "title": "Serene lake surrounded by autumn foliage",
        //   "category": "Nature",
        //   "cardImage": "https://images.unsplash.com/photo-1575447317365-738090f0a4fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXV0dW18ZW58MHx8MHx8fDA%3D"
        // }
    ]
  return (
    <div>
        <div className="cards-grid grid grid-cols-2 md:grid-cols-3 mt-8 px-4 lg:grid-cols-4 md:gap-4 gap-1 justify-center">
          {cardds.map((item, index) => (
            <div className="imagebox relative w-full md:h-[40vw] h-96 cursor-pointer mb-4 " key={index}>
              <Image
                src={item.cardImage}
             
                alt={item.title}
                className="object-fit rounded-2xl hover:scale-105 ease-in-out duration-100"
                layout="fill"

              />
              <p className="absolute left-1/2 w-2/3 -translate-x-1/2 md:text-2xl bottom-10 text-white">{item.title}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default HomeCards