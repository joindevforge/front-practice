import Link from 'next/link';
import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useState } from 'react';

const items = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Pro',
    path: '/pro',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
  {
    name: 'Scolar Program',
    path: '/scholar',
  },
];

function Header() {
  const router = useRouter();
  const isActive = (pathname) => {
    return router.pathname === pathname ? 'active' : '';
  };
  const [isopen, setIsopen] = useState(false);
  return (
    <>
      <div className="w-full h-[63px] top-0  fixed z-50 bg-white flex  justify-center border-b-2 border-black">
        <div className="w-[83%] h-full   flex justify-between items-center">
          <Link href="/" className="text-[30px] font-DM">
            Frontend Practice
          </Link>
          <div className="w-fit hidden lg:flex items-center justify-between">
            {items.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className={`text-[18px] font-Archivo text-[#000000] font-[600] mx-[15px] hover:underline`}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="text-black  block lg:hidden">
            <button
              onClick={() => {
                setIsopen(!isopen);
              }}
              className=" transition-all ease-in duration-500">
              {isopen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6">
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6">
                  <path d="M3 12h18M3 6h18M3 18h18"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`w-full h-screen fixed z-10  top-[8%] ${
          isopen ? 'translate-y-0' : 'translate-y-[-135%]'
        }  bg-white ease-normal transition-transform duration-[700ms]`}>
        <div className={`relative w-full h-full   flex flex-col `}>
          {items.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.path}
                className="py-5 px-6 font-Archivo  text-[20px] text-center font-[600] border-t-[1px] border-gray-500 last:border-b-[1px]  transition-all duration-200 ease-in-out hover:bg-slate-100 hover:py-4   hover:rounded"
                onClick={() => {
                  setIsopen(!isopen);
                }}>
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Header;
