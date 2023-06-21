import Link from "next/link";
import React from "react";
import { FcCompactCamera } from "react-icons/fc";

function project() {
  return (
    <div className="w-full h-full flex justify-center bg-white">
      <div className="mx-[120px] w-full h-full  border-x-[2px] border-black">
        <p className="text-center text-[105px] font-DM font-[700] mt-[70px] leading-[40px]  ">
          Figma Merch <br /> <span className="text-[25px]">Shop page</span>
        </p>
        <div className="w-full h-full flex justify-center mt-2">
          <Link href="#">
            🌐{" "}
            <span className="text-[16px] font-[600] font-Archivo underline hover:text-blue-700 ">
              View Live
            </span>
          </Link>
          <Link href="#" className="px-[24px]">
            📷{" "}
            <span className="text-[16px] font-[600] font-Archivo underline hover:text-blue-700">
              Free Photo Assests
            </span>
          </Link>
          <Link href="#">
            ⭐️{" "}
            <span className="text-[16px] font-[600] font-Archivo underline hover:text-blue-700">
              {" "}
              Open Source Icons
            </span>
          </Link>
        </div>
        <div className="w-full h-[200px] border-y-2 mt-6 border-black">
        <div className="grid grid-cols-4 h-full w-full">
            <div className="border-r-2 border-black"></div>
            <div className="border-r-2 border-black"></div>
            <div className="border-r-2 border-black"></div>
            <div className=""></div>
        </div>
        </div>
        <div className="w-full h-[250px] border-b-2 border-black flex items-center justify-center">
        <div className="w-[79%]  h-[60%] flex justify-between">
            <div className="w-[350px] h-full bg-[#000000]"></div>
            <div className="w-[350px] h-full bg-[#494949] "></div>
            <div className="w-[200px] h-full border-2 border-black"></div>
        </div>
        </div>
        <div className="pb-6">
            <p className="font-DM text-[40px]  font-[700] text-center mt-[36px]">Reference image</p>
            <div className="mt-[20px] w-full h-full flex justify-center">
                <img 
                src="/C2-figma.png"
                alt="figma"
                className="w-[96%] h-[auto] rounded-[10px]"
                />
            </div>
        </div>
      </div>
    </div>
  );
}

export default project;
