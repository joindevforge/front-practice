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
        <p className="font-DM font-[400] text-center text-[60px] leading-[80px] pt-[140px] tracking-[-1.5%]">
          Supercharge your frontend <br />
          development skills
        </p>
        <p className=" text center font-Archivo mt-[21px] text-[23px] tracking-[-1%]   w-[45%]">
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
        <p className="w-[50%] pt-[80px] italic pb-[100px] font-Archivo  text-[24px] leading-[40px]">
          If you&apos;ve got one of these problems it&apos;s time to fix the
          errors you&apos;re making and land the frontend role you always
          wanted.
        </p>
      </div>
      <div className="border-2 bg-white border-black h-full w-full pb-[60px">
        <p className="pt-[100px] font-Archivo text-[26px] text-center pb-[60px] font-[500] ">
          Here are some ways you can benefit from using our platform:
        </p>
        <div className="w-full flex justify-center items-center">
          <div className="container px-16  pb-[30px]">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {benefits.map((benefit, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-center items-center mb-16"
                  >
                    <div className="w-[500px] h-[250px] border-2 border-black bg-white flex justify-center items-center">
                      <div className="px-[35px]">
                        <p className="text-start font-light font-Archivo text-[18px] leading-[28px]">
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

      <h2 className="pt-[85px] font-DM text-[72px] pb-[112px] text-center text-[#645E56]">
        Get access to unique frontend challenges
      </h2>
      <div className=" w-full h-[540px] border-2 border-black bg-white flex items-center justify-center">
        <div className="h-[60%] w-[45%]  flex justify-center flex-col">
          <p className="text-[20px] text-center font-Archivo leading-9 ">
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
