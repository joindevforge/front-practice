import Link from "next/link";
import React from "react";

const inputField = ({ name, placeholder }) => {
  return (
    <>
      <div className="mt-[20px]">
        <label className="font-Archivo font-[600]">{name}</label>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full h-[50px] border-[1px] border-[#E5E5E5]  mt-[20px] p-[10px] outline-none"
        />
      </div>
    </>
  );
};

function contact() {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center">
        <div className="max-w-[400px] md:w-[400px] w-[95%]  h-fit ">
          <div className="font-DM text-[52px] mt-[61px] font-semibold">
            Contact us.
          </div>
          <div className="mt-[35px] font-Archivo w-[98%] text-[16px]">
            You may find that our{" "}
            <Link href="#" className="underline font-semibold">
              FAQ page
            </Link>{" "}
            has the answers that you are looking for. If not, feel free to reach
            out!
          </div>
          <div className="mt-[40px]">
            <div className="mt-[20px]">
              <label className="font-Archivo font-[800] text-[16px]">
                Name
              </label>
              <input
                type="text"
                placeholder="Jane Code"
                className="w-full h-[50px] border-2 border-black   mt-[15px] p-[10px] outline-none font-Archivo placeholder-gray-500"
              />
            </div>
            <div className="mt-[15px]">
              <label className="font-Archivo font-[800] text-[16px]">
                Email Address
              </label>
              <input
                type="text"
                placeholder="email@website.com"
                className="w-full h-[50px] border-2 border-black   mt-[15px] p-[10px] outline-none font-Archivo placeholder-gray-500"
              />
            </div>
            <div className="mt-[15px]">
                <label className="font-Archivo font-[800] text-[16px]">
                    Message
                </label>
                <textarea
                type="text"
                placeholder="What whould you like to say"
                className="w-full h-[260px] border-2 border-black   mt-[15px] p-[10px] outline-none font-Archivo placeholder-gray-500"
                />
            </div>
            <div className="mt-[17px] pb-[70px]">
            <Link 
                href="#"
                className="font-Archivo  font-[800]  px-[45px] py-[13px] text-[16px] bg-white border-2 border-black">
                    Submit
                </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default contact;
