import React from "react";

function Home1() {
  const benefits = [
    "Try to challenge yourself and enhance your skills by building real websites frontend from which you can learn new things",
    "There are a lot of frontend developers. You must stand out in order to land your dream opportunity or get a good job. We’ll help you develop an impressive portfolio and advance your frontend development skills with unique & challenging inspirations",
    "Designers often don’t take into account the browser’s limitations or leave you without designs for some things. Working on real inspirations can help you discover new perspectives and develop understanding of how the frontend is made responsive according to different design ideas in different resolutions.",
    "The difference between an okayish developer and a great developer lies in the details. Discover the secrets of polished apps/websites.",
    "The difference between an okayish developer and a great developer lies in the details. Discover the secrets of polished apps websites.",
    "The difference between an okayish developer and a great developer lies in the details. Discover the secrets of polished apps websites.",
  ];
  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="font-DM font-[600] text-center text-[3.75rem] leading-[5rem] pt-[8.75rem] tracking-[-1.5%]">
          Supercharge your frontend <br />
          development skills
        </p>
        <p className=" text center  font-Archivo mt-[1.3rem] text-[1.5rem] tracking-[-1%]   w-[45%]">
          Level up your frontend development skills by recreating real websites
          from real companies and get rewarded in crypto.
        </p>
      </div>
      <div className="mt-[140px] h-[488px] bg-white border-y-2 border-black flex items-center justify-center">
        <div className="h-[272px] w-full flex justify-between items-center flex-col ">
          <p className="text-center font-DM font-[400] tracking-[-1%] leading-[50px]  text-4xl">
            Say goodbye to capstone projects..
          </p>
          <div className="h-[180px] w-[618px] flex flex-col justify-between ">
            <p className="text-start text-[20px] font-[400]  font-Archivo  leading-[32px]">
              It&apos;s time to say goodbye to capstone projects holding back
              your true potential to try building new things in frontend.
            </p>
            <p className="text-start text-[20px]  font-Archivo font-[400] leading-[32px]">
              Get access to unique frontend challenges and inspirations that
              help you take your skills to next level and become a better
              frontend developer.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[6.25rem] w-full h-full flex items-center justify-center ">
        <div className="h-[21.25rem] w-[90%] flex lg:flex-row  flex-col ">
          <div className="lg:flex-[35%] flex-[100%] flex items-center justify-center w-full h-full">
            <p className="font-DM text-[2.625rem]  leading-[3.375rem] tracking-[-0.015%] w-[80%]">
              {" "}
              Are any of these challenges familiar to you as a Frontend
              Developer?
            </p>
          </div>
          <div className="lg:flex-[65%] flex-[100%] flex justify-center">
            <div className="w-[90%] h-fit  border-2 bg-white flex items-center border-black">
              <ul className="list-decimal py-[1.25rem]  px-[3.75rem]  text-[1.25rem] font-Archivo ">
                <li className="mb-4 pt-4">
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
                <li className="pb-4">
                  Don&apos;t know how to stand out from the crowd of frontend
                  developers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full text-center md:pt-[7rem] pt-[100px]  flex justify-center">
        <p className="lg:w-[50%] w-[80%]  italic pb-[6.25rem] font-Archivo  text-[1.5rem] leading-[2.5rem]">
          If you&apos;ve got one of these problems it&apos;s time to fix the
          errors you&apos;re making and land the frontend role you always
          wanted.
        </p>
      </div>
      <div className="border-2 bg-white border-black h-full w-full">
        <p className="pt-[6.25rem] font-Archivo text-[1.5rem] text-center pb-[3.75rem] font-[500] ">
          Here are some ways you can benefit from using our platform:
        </p>
        <div className="w-full flex justify-center items-center">
          <div className="container pb-[2rem]">
            <div className="grid grid-cols-1  lg:grid-cols-2">
              {benefits.map((benefit, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-center items-center mb-16"
                  >
                    <div className="w-[31.25rem] h-[15.625rem] border-2 border-black bg-white flex justify-center items-center">
                      <div className="px-[2.25rem]">
                        <p className="text-start font-light font-Archivo text-[1.125rem] leading-[1.75rem]">
                          {benefit}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <h2 className="pt-[5rem] font-DM text-[4.5rem] pb-[7rem] text-center text-[#645E56]">
        Get access to unique frontend challenges
      </h2>
      <div className=" w-full h-[540px] border-2 border-black bg-white flex items-center justify-center">
        <div className="h-[60%] lg:w-[50%] w-[90%]  flex justify-center flex-col">
          <p className="text-[1.25rem] text-center font-Archivo leading-9 ">
            Build something amazing that makes you stand out and showcase your
            skills by building inspirations that help you understand design,
            master new tools and methods alongside discovering the best
            development practices and feel confident in both small & large-scale
            projects.
          </p>
          <p className="py-[36px] font-Archivo text-[20px] text-center">
            Ready to supercharge your frontend development skills?
          </p>
          <div className="w-full flex justify-center">
            <button className="w-[120px] h-[45px] bg-white border-2 border-black text-black font-Archivo text-[16px] hover:bg-black hover:text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1;
