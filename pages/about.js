import React from "react";

const data = [
  {
    title: "Cross-browser compatibility issues",
    desc: "Different browsers can display the same web content differently.",
  },
  {
    title: "Responsive design",
    desc: "Ensuring a website is visually appealing and functional on different screen sizes and devices.",
  },
  {
    title: "Performance optimization",
    desc: "Making sure websites load quickly and efficiently for users.",
  },
  {
    title: "Debugging",
    desc: "Finding and fixing errors in code.",
  },
];

function about() {
  return (
    <>
      <div className="w-full h-full bg-white">
        <div className="w-full h-full">
          <p className="md:pt-[8.625rem] pt-[7rem]  px-[15px] md:px-0  text-[2.25rem] leading-[3rem]  md:text-[2.5rem] font-DM  font-[600] text-center">
            Common challenges front-end web developers face include:
          </p>
          <div className="pt-[4rem] pb-[50px] w-full h-full flex justify-center">
            <div className="max-w-[1280px] w-full lg:w-[1280px] flex justify-center flex-col items-center">
              <div className="grid lg:grid-cols-2 grid-cols-1 w-fit h-fit  mx-[20px]  lg:w-[90%] justify-center items-center">
                {data.map((item, index) => (
                 <>
                  <div className=" flex items-center justify-center">
                  <div
                    key={index}
                    className="md:w-[31.25rem] w-full md:max-w-[31.25rem] md:h-[12.5rem] border-2 border-black  md:max-h-[12.5rem] mb-[4.375rem]"
                  >
                    <p className="text-[1.5rem] font-[600] bg-[#FAEAD7] font-DM  py-2 text-center">
                      {item.title}
                    </p>
                    <div className="w-full h-[70%]  py-[38px]  border-t-2 border-black flex items-center  justify-center">
                      <p className="text-[1.125rem] text-center font-[400] px-[20px] leading-[2rem]  font-Archivo">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  </div>
                 </>
                ))}
              </div>
              <div className="md:w-[31.25rem]  mx-[20px] md:max-w-[31.25rem]     h-full overflow-hidden border-2 border-black   mb-[30px]">
                <p className="text-[1.5rem] font-[600] bg-[#FAEAD7] font-DM  py-2 text-center">
                  Keeping up with advancements
                </p>
                <div className="w-full  py-[38px]  border-t-2 border-black flex items-center  justify-center">
                  <p className="text-[1.125rem] text-center  font-[400] px-[20px] leading-[2rem]  font-Archivo">
                    The field of web development is constantly evolving, and
                    developers need to continuously learn and adapt to new
                    technologies and trends
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className="w-full h-full flex border-y-2 border-black  justify-center">
        <p className="py-[70px] md:py-[110px] md:min-w-[700px] text-center md:w-[70%] lg:w-[48%] w-full px-[10px] md:px-0 text-[1.25rem] font-Archivo leading-9">
          We aim to build a platform for frontend developers where they can
          overcome these challenges and build a successful career by working on
          unique frontend challenges and real website inspirations to create an
          impressive portfolio that makes them standout and learn something new
        </p>
      </div>
      {/* section 3  */}
      <div className="w-full h-full  bg-white flex flex-col items-center md:pt-[100px] pt-[70px] pb-[70px]  md:pb-[110px]">
        <div className=" relative  lg:max-w-[732px] w-full h-full flex justify-center">
          <div className=" lg:w-full  md:w-[70%] w-[85%] ">
            <p className="md:text-[2rem] text-[1.75rem] leading-[2.5rem] md:leading-[3.5rem] font-[600] font-DM text-left md:text-center">
              Matching frontend devs with portfolio inspirations and frontend
              challenges to level up in their career
            </p>
          </div>
          <svg
            width="77"
            height="85"
            viewBox="0 0 77 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[-44%] right-[-12%] hidden lg:block"
          >
            <path
              d="M75.6625 0.602821C76.7024 22.2882 74.0651 45.182 57.5809 61.1265C48.779 69.6402 34.5057 72.4278 29.372 58.7642C25.8756 49.4582 25.4581 33.0056 35.9396 27.9136C47.5141 22.2906 36.7056 49.778 35.0059 52.5049C27.0504 65.2688 17.2229 73.3879 4.73016 81.2173C0.0504637 84.1502 3.28926 84.5228 6.90536 83.8654C10.0429 83.2949 13.5966 82.563 16.471 81.1804C17.3477 80.7587 11.2652 82.2678 10.3174 82.5524C6.25296 83.7731 1.51266 85.0221 1.04736 79.392C0.972663 78.4874 1.00446 70.0157 2.25196 69.7038C2.90106 69.5415 5.95626 74.7301 6.53586 75.3472C10.3005 79.3551 13.4166 80.5762 18.7275 79.8822"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="w-full h-full flex justify-center">
          <div className="lg:w-[722px] md:w-[62%] w-full px-[30px]  mt-[32px] ">
            <p className="text-[1.25rem] font-Archivo leading-9 ">
              Pick something that makes you excited to code and get on with
              building it. Use whatever tools and programming languages you
              prefer. Choose whether you want it to be your portfolio or let
              companies review your code and rate your development practices by
              contributing to Project Source.
            </p>
            <p className="text-[1.25rem] font-Archivo leading-9 mt-[36px]">
              Discover what to learn, understand design, and what skills are
              essential to grow as a developer. Master the tools & methods, and
              become confident in both small & large-scale projects.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
