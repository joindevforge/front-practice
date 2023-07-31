import React from "react";

function scholar() {
  return (
    <>
      <div className="max-w-[1280px] mx-auto w-full h-full">
        <div className="w-full ">
          <p className="font-DM font-[600] text-center  px-[1.875rem] md:text-[3.75rem] text-[2.25rem] leading-normal md:leading-[5rem] md:pt-[8.75rem] pt-[7.5rem] tracking-[-1.5%]">
            Frontend Scholars Program
          </p>
          <div className="w-full h-full flex justify-center">
            <p className="  md:text-center text-left px-[1.875rem] max-w-[1280px] mx-auto md:leading-[1.75] leading-[1.75]   font-Archivo mt-[1.25rem] text-[1.5rem] tracking-[-0.005em] pb-[8.75rem] lg:w-[780px] sm:w-full md:w-[780px]  w-[100%] ">
              It&apos;s time to put your frontend skills at work and compete
              with the best. Are you up for the challenge to become a better
              frontend developer?
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-white border-y-2 pb-[6.75rem] w-full  border-y-black flex items-center flex-col justify-center">
        {/* <div className="h-[272px] w-full flex justify-between items-center flex-col "> */}
        <p className="text-center font-DM font-[600] px-[20px] md:pl-0 bg-white md:pt-[6.75rem] pt-[100px] tracking-[-1%] leading-[50px]  text-4xl">
          About the program
        </p>
        <div className=" mt-[2.625rem] items-center flex flex-col justify-between ">
          <div className="lg:w-[670px] md:w-[60%] w-[80%]">
            <p className="text-[1.25rem]  font-[400] text-center font-Archivo leading-9">
              The Frontend Scholars Program is a unique opportunity for a select
              group of 365 motivated and aspiring frontend developers to hone
              their frontend development skills by working on a curated
              collection of challenging & unique applications
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto w-full h-full">
        <div className="  border-y-2 pb-[6.75rem] w-full   flex items-center flex-col justify-center">
          {/* <div className="h-[272px] w-full flex justify-between items-center flex-col "> */}
          <p className="text-center font-DM font-[600] px-[20px] md:pl-0  md:pt-[6.75rem] pt-[100px] tracking-[-1%] leading-[50px]  text-4xl">
            Why you should join?
          </p>
          <div className=" mt-[2.625rem] items-center flex flex-col justify-between ">
            <div className="lg:w-[670px] md:w-[60%] w-[80%]">
              <p className="text-[1.25rem]  font-[400] text-center font-Archivo leading-9">
                Scholars will benefit from gaining real time experience of
                building the frontend of actual applications not just some
                capstone projects, and will be exposed to unique challenges,
                that help us identify the problem solving skills of scholars to
                create a community of the best, focused on taking them one step
                closer to their dream opportunities with an awesome portfolio
                and work experience!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] pb-[100px] flex items-center justify-center mx-auto">
      <div className=" h-full lg:w-[1000px] bg-white w-fit border-2  border-black md:w-full mx-[20px] ">
        <div className=" flex justify-start px-[30px] py-[60px] ">
          <div className=" font-Archivo text-[1.25rem]  ">
            <div className="w-full flex  ">
              <p>
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-3 mr-2"
                >
                  <path
                    d="M7.8125 15.3125L0.8125 8.3125L2.15625 6.96875L7.8125 12.625L19.8125 0.625L21.1562 1.96875L7.8125 15.3125Z"
                    fill="black"
                  />
                </svg>
              </p>
              <p className="pt-0 leading-[2.5rem]">
              Accepted students will be offered one year subscription of Fe50 Pro worth $120
              </p>
            </div>
            <div className="w-full flex mt-[0.5rem]">
              <p>
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-3 mr-2"
                >
                  <path
                    d="M7.8125 15.3125L0.8125 8.3125L2.15625 6.96875L7.8125 12.625L19.8125 0.625L21.1562 1.96875L7.8125 15.3125Z"
                    fill="black"
                  />
                </svg>
              </p>
              <p className="pt-0 leading-[2.5rem]">
                {" "}
                Be a part of code reviews to receive a feedback on your work
              </p>
            </div>
            {/*  */}
            <div className="w-full flex mt-[0.5rem]">
              <p>
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-3 mr-2"
                >
                  <path
                    d="M7.8125 15.3125L0.8125 8.3125L2.15625 6.96875L7.8125 12.625L19.8125 0.625L21.1562 1.96875L7.8125 15.3125Z"
                    fill="black"
                  />
                </svg>
              </p>
              <p className="pt-0 leading-[2.5rem]">
              Climb the ladder to get access to curated internship opportunities from startups with 
proof of work
              </p>
            </div>
            
           
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default scholar;
