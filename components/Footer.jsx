import Link from 'next/link'
import React from 'react'
import {BsArrowUpRight} from "react-icons/bs"

const items = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Projects',
    path: '/project'
  },
  {
    name:"Blog",
    path:"/"
  },
  {
    name:"FAQ",
    path:"/"
  },
  {
    name:"Contact",
    path:"/contact"
  }
]
function Footer() {

  return (
    <div className='w-full h-[160px] bg-black flex items-center justify-center'>
      <div className='w-full h-[70px] flex flex-col justify-between  text-center'>
      <div className='text-[16px] text-white '>Frontend Practice - © 2023</div>
      <div className='flex items-center justify-center'>
      {
          items.map((item, index) => (
            <Link href={item.path} key={index} className={`text-[16px] font-Archivo text-[#fff] font-[700] mx-[6.5px] hover:underline`}>{item.name}</Link>
          ))
        }
        <Link href="#" className='text-[16px] font-Archivo font-[600] ml-[6.5px] flex text-[#fff]  items-center hover:underline'>
            NewsLetter
            <BsArrowUpRight className='font-bold ml-1'/>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Footer