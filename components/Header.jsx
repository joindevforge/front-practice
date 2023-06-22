import Link from 'next/link'
import React from 'react'
import {BsArrowUpRight} from "react-icons/bs"
import { useRouter } from 'next/router';
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

function Header() {
  const router = useRouter();
  const isActive = (pathname) => {
    return router.pathname === pathname ? 'active' : '';
  };
  return (
    <div className='w-full h-[63px] top-0  fixed z-50 bg-white flex justify-center border-b-2 border-black'>
    <div className='w-[83%] h-full block  lg:flex justify-between items-center'>
      <Link href="/" className='text-[30px] font-DM'>Frontend Practice</Link>
      <div className='w-fit hidden lg:flex items-center justify-between'>
        {
          items.map((item, index) => (
            <Link href={item.path} key={index} className={`text-[18px] font-Archivo text-[#000000] font-[600] mx-[15px] hover:underline`}>{item.name}</Link>
          ))
        }
        <Link href="#" className='text-[18px] font-Archivo font-[600] ml-[15.5px] flex items-center hover:underline'>
            NewsLetter
            <BsArrowUpRight className='font-bold ml-1'/>
        </Link>
      </div>
    </div>

    </div>
  )
}

export default Header