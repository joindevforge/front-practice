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
          <div className="grid grid-cols-1 md:grid-cols-4 h-full w-full">
            <div className="border-r-2 border-black">
              <p className="text-[25px] font-[700] font-DM text-center mt-5">
                Recreate this to learn:
              </p>
              <div className="flex justify-center mt-2">
                <ul className="list-inside list-circle text-start font-Archivo text-[16px]">
                  <li>Draggable slider</li>
                  <li>Hover effects</li>
                  <li>Content filtering</li>
                  <li>and more!</li>
                </ul>
              </div>
            </div>
            <div className="border-r-2 border-black">
              <p className="text-[25px] font-[700] font-DM text-center mt-5">
                color Palette:
              </p>
              <div className="w-full h-full flex flex-col items-center font-Archivo">
                <div className="w-[85%] flex h-fit mt-6 ">
                  <div className="w-[50%] flex font-[400] ">
                    <div className="w-[25px] h-[25px] rounded-[50%] border-[1px] border-gray-500 bg-[#ffc700] mr-1"></div>
                    #ffc700
                  </div>
                  <div className="w-[50%] flex font-[400] ">
                    <div className="w-[25px] h-[25px] rounded-[50%] border-[1px] border-gray-500 bg-[#10a958] mr-1"></div>
                    #10a958
                  </div>
                </div>
                <div className="w-[85%] flex h-fit mt-4 ">
                  <div className="w-[50%] flex font-[400] ">
                    <div className="w-[25px] h-[25px] rounded-[50%] border-[1px] border-gray-500 bg-[#000000] mr-1"></div>
                    #000000
                  </div>
                  <div className="w-[50%] flex font-[400] ">
                    <div className="w-[25px] h-[25px] rounded-[50%] border-[1px] border-gray-500 bg-[#fff] mr-1"></div>
                    #fff
                  </div>
                </div>
              </div>
            </div>
            <div className="border-r-2 border-black">
              <p className="text-[25px] font-[700] font-DM text-center mt-5">
                Recommended Course:
              </p>
              <p className="text-[16px] font-Archivo font-[600] px-8 mt-3">
                Frontend Masters offers a 100% free{" "}
                <Link href="#" className="underline hover:text-blue-500">
                &ldquo;Complete Intro to Web Development&ldquo; course.
                </Link>
              </p>
              <div className="w-full flex justify-center mt-2">
                <Link
                  href="#"
                  className="font-[400] font-Archivo p-[1px] px-[6px] border-2 border-black"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="">
              <p className="text-[25px] font-[700] font-DM text-center mt-5">
                Resources:
              </p>
              <p className="text-[16px] font-Archivo font-[600] px-8 mt-3 underline">
                <Link href="#" className="hover:text-blue-700"> Change image on hover</Link>
                <br />
                <Link href="#" className="hover:text-blue-700">How to Create a Draggable Slider</Link> 
                <br />
                <Link href="#" className="hover:text-blue-700">A Complete Guide to Flexbox</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[250px] border-b-2 border-black flex items-center justify-center">
          <div className="w-[79%]  h-[60%] flex justify-between">
            <div className="w-[350px] h-full bg-[#000000] flex  justify-center">
              <div className="w-[85%]">
                <p className="text-[30px] font-DM font-[700] text-white  text-start mt-4 ">
                  Up for a challenge
                </p>
                <p className="text-[16px] font-[400] font-Archivo text-white mt-3">
                  Build the dropdown search bar when the icon is clicked.
                </p>
              </div>
            </div>
            <div className="w-[350px] h-full bg-[#494949] flex justify-center ">
              <div className="w-[85%]">
                <p className="text-[30px] font-DM font-[700] text-white  text-start mt-4 ">
                  Too easy?
                </p>
                <p className="text-[16px] font-[400] font-Archivo text-white mt-3">
                  Recreate the circle with rotating text and hover animation.
                </p>
              </div>
            </div>
            <div className="w-[200px] h-full border-2 border-black flex justify-center">
              <div className="w-[80%]">
                <p className="text-[30px] font-DM font-[700] text-black  text-start mt-4 ">
                  Too hard?
                </p>
                <p className="text-[16px] font-[400] font-Archivo text-black mt-3">
                  That &apos;s ok!
                  <br />
                  <Link href="#" className="font-[600] underline">
                    View other projects
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-6">
          <p className="font-DM text-[40px]  font-[700] text-center mt-[36px]">
            Reference image
          </p>
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
