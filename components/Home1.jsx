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
    <div className="w-full max-w-[1024px] md:max-w-full mx-auto h-full">
      <div className="w-full ">
        <p className="font-DM font-[600] md:text-center text-left px-[1.875rem] md:text-[3.75rem] text-[2.25rem] leading-normal md:leading-[5rem] md:pt-[8.75rem] pt-[7.5rem] tracking-[-1.5%]">
          Supercharge your frontend <br />
          development skills
        </p>
        <div className="w-full h-full flex justify-center">
        <p className="  md:text-center text-left px-[1.875rem] max-w-[1280px] mx-auto md:leading-[1.75] leading-[1.75]   font-Archivo mt-[1.25rem] text-[1.5rem] tracking-[-0.005em] pb-[8.75rem] lg:w-[740px] md:w-[640px] w-[100%] ">
          Level up your frontend development skills by recreating real websites
          from real companies and get rewarded in crypto.
        </p>
      </div>
      </div>
      <div className=" bg-white border-y-2 pb-[6.75rem] border-black flex items-center flex-col justify-center">
        {/* <div className="h-[272px] w-full flex justify-between items-center flex-col "> */}
          <p className="text-center font-DM font-[600] bg-white md:pt-[6.75rem] pt-[5.625rem] tracking-[-1%] leading-[50px]  text-4xl">
            Say goodbye to capstone projects..
          </p>
          <div className=" mt-[2.625rem] items-center flex flex-col justify-between ">
          <div className="lg:w-[52%] md:w-[60%] w-[80%]">
            <p className="text-start text-[1.25rem] font-[400]   font-Archivo  leading-[2.5rem]">
              It&apos;s time to say goodbye to capstone projects holding back
              your true potential to try building new things in frontend.
            </p>
            <p className="text-start text-[1.25rem] mt-[2.5rem]    font-Archivo font-[400] leading-[2.5rem]">
              Get access to unique frontend challenges and inspirations that
              help you take your skills to next level and become a better
              frontend developer.
            </p>
          </div>
          </div>
        {/* </div> */}
      </div>
      <div className="md:py-[6.25rem] py-10 w-full min-h-[75vh] flex  items-center flex-col ">
      <div className="h-[80%] container w-full flex lg:flex-row flex-col items-center">
        <div className="lg:flex-[35%] flex-[100%]  h-full flex justify-center items-center ">
        <p className="font-DM px-[30px] md:text-[2.625rem] text-[2rem] font-[600] text-left md:text-start leading-[3rem] md:leading-[4rem] tracking-[-0.015%] w-[95%] md:w-[90%] lg:w-[85%] pb-10 md:pb-0">
              {" "}
              Are any of these challenges familiar to you as a Frontend
              Developer?
            </p>
        </div>
        <div className="lg:flex-[65%] mx-[20px] flex-[100%] h-full bg-white border-2 border-black">
         <div className="w-full flex items-center h-full justify-center">
         <ul className="list-decimal  text-[1.25rem] font-Archivo font-[400] py-[20px]  px-[20px] ml-4   md:py-[3.75rem]">
                <li className="mb-4 pt-4">
                  {" "}
                  Don&apos;t have professional experience in frontend development
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
      <div className="md:mt-[5rem] mt-[40px]  lg:w-[55%] md:[65%] px-[20px] w-[100%] italic font-[600] font-Archivo leading-[2.65rem] text-[22px] md:text-[1.5rem]">
      If you&apos;ve got one of these problems it&apos;s time to fix the errors
you&apos;re making and land the frontend role you always wanted.
      </div>
      </div>
      {/* </div> */}
      <div className="border-y-2 bg-white border-black h-full w-full">
        <p className="md:pt-[6.25rem] pt-[100px] font-DM text-[1.75rem]  text-center pb-[3.75rem] font-[600]  px-4 md:px-0 ">
          Here are some ways you can benefit from using our platform:
        </p>
        <div className="w-full flex justify-center items-center">
          <div className=" pb-[6.25rem]  h-full">
            <div className="grid grid-cols-1 gap-[2rem] lg:grid-cols-2 ">
              {benefits.map((benefit, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-center items-center mx-[20px] "
                  >
                    <div className="w-[31.25rem] max-w-[31.25rem] h-fit md:min-h-[15.625rem] border-2 border-black bg-white flex justify-center items-center">
                      <div className="px-[1.25rem] py-[25px]">
                        <p className="text-start font-[400] font-Archivo  text-[1.125rem] leading-[2rem]">
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

      <h2 className="md:pt-[5rem] pt-[60px] w-full font-DM text-[3rem] md:text-[4rem]  pb-[60px] md:pb-[7rem] font-[600] text-center text-[#645E56]">
        Get access to unique frontend challenges
      </h2>
      <div className=" w-full h-[540px] pt-[60px] border-2  border-black bg-white flex items-center justify-center">
        <div className=" h-full lg:w-[51%] w-[90%]  flex justify-center flex-col">
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
          <div className="w-full pt-0 pb-[60px] flex justify-center">
            <button className="w-[7.5rem] h-[2.8125rem] bg-white border-2 border-black text-black font-Archivo text-[16px] hover:bg-black hover:text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1;
