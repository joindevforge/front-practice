import React from "react";

function Home1() {
  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="font-DM font-[400] text-center text-[60px] leading-[80px] pt-[140px] tracking-[-1.5%]">
          Supercharge your frontend <br />
          development skills
        </p>
        <p className=" text center font-Archivo mt-[21px] text-[23px] tracking-[-1%]   w-[45%]">
          Level up your frontend development skills by recreating real websites
          from real companies and get rewarded in crypto.
        </p>
      </div>
      <div className="mt-[140px] h-[488px] bg-white border-y-4 border-black flex items-center justify-center">
        <div className="h-[272px] w-full flex justify-between items-center flex-col ">
          <p className="text-center font-DM font-[400] tracking-[-1%] leading-[50px]  text-4xl">
            Say goodbye to capstone projects..
          </p>
          <div className="h-[180px] w-[618px] flex flex-col justify-between ">
            <p className="text-start text-[20px]  font-Archivo font-light leading-[32px]">
              It&apos;s time to say goodbye to capstone projects holding back
              your true potential to try building new things in frontend.
            </p>
            <p className="text-start text-[20px]  font-Archivo font-light leading-[32px]">
              Get access to unique frontend challenges and inspirations that
              help you take your skills to next level and become a better
              frontend developer.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[100px] w-full h-full flex items-center justify-center ">
        <div className="h-[340px] w-[90%] flex  ">
          <div className="flex-[35%]  flex items-center justify-center w-full h-full">
            <p className="font-DM text-[42px]  leading-[55px] tracking-[-0.015%] w-[70%]">
              {" "}
              Are any of these challenges familiar to you as a Frontend
              Developer?
            </p>
          </div>
          <div className="flex-[65%] flex justify-center">
            <div className="w-[90%] h-full border-2 bg-white flex items-center border-black">
              <ul className="list-decimal py-[20px]  px-[60px]  text-[20px] font-Archivo font-light">
                <li className="mb-4">
                  {" "}
                  Don&apos;t have professional experience in fronted development
                </li>
                <li className="mb-4">
                  {" "}
                  Don&apos;t have and are not sure how to make an impressive
                  portfolio
                </li>
                <li className="mb-4">
                  Not sure what projects to build that can be mentioned on
                  resume
                </li>
                <li className="mb-4">
                  Don&apos;t get answers from companies and faced multiple
                  rejections
                </li>
                <li>
                  Don&apos;t know how to stand out from the crowd of frontend
                  developers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full text-center  flex justify-center">
      <p className="w-[50%] pt-[80px] italic pb-[100px] font-Archivo font-thin text-[24px] leading-[40px]">
      If you&apos;ve got one of these problems it&apos;s time to fix the errors
you&apos;re making and land the frontend role you always wanted.
      </p>
      </div>
      <div className="border-2 bg-white border-black h-full w-full">
        <p className="pt-[100px] font-Archivo  font-[400] ">Here are some ways you can benefit from using our platform:</p>
      </div>
    </div>
  );
}

export default Home1;
