import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef, useEffect, useState } from "react";

function Carosuel() {
  const [padd, setPadd] = useState("1rem");
  useEffect(() => {
    const handleResize = () => {
      // Adjust perPage based on screen size
      if (window.innerWidth < 768) {
        setPadd("1rem");
      } else {
        setPadd("4rem");
      }
    };

    // Set initial perPage value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = [
    {
      title: "Here's what our Pro Subscribers have to say",
      desc: "One of the best advantages pro subscription has to offer you is the code review upon completing the challenge and it helped me gain insights on better frontend practices",
      name: "Surya",
      university: "JNTUH",
    },
    {
      title: "Here's what our Pro Subscribers have to say",
      desc: "One of the best advantages pro subscription has to offer you is the code review upon completing the challenge and it helped me gain insights on better frontend practices",
      name: "Surya",
      university: "JNTUH",
    },
    {
      title: "Here's what our Pro Subscribers have to say",
      desc: "One of the best advantages pro subscription has to offer you is the code review upon completing the challenge and it helped me gain insights on better frontend practices",
      name: "Surya",
      university: "JNTUH",
    },
  ];

  return (
    <>
      <div className="w-full h-full relative mb-[40px]">
        <Splide
          hasTrack={false}
          aria-label="..."
          options={{
            type: "loop",
            pagination: true,
            arrows: false,
            autoplay: true,
          }}
        >
          <SplideTrack>
            {data.map((item, index) => {
              return (
                <>
                  <SplideSlide key={index}>
                    <div className=" h-full w-full md:pt-[100px] pt-[50px]  flex items-center justify-center ">
                      <div className="w-[80%] h-full  pb-10  sm:pt-0 flex items-center  flex-col ">
                        <p className="md:m-[1rem] m-0 md:text-[2.25rem] text-[1.8rem] text-center font-[600] font-DM">
                          {item.title}
                        </p>
                        <p className="mt-[36px] w-full text-[#000000] font-Archivo text-center  font-[400] text-[22px] leading-[1.7] md:text-[1.5rem] md:leading-[2.65rem]">
                          &ldquo;{item.desc}&ldquo;
                        </p>
                        <div className="text-center lg:mt-[4.125rem] mt-[2.0rem] pb-10  flex items-center flex-col">
                          <div className=" w-[75px] h-[75px] flex items-center justify-center text-[3rem] italic font-DM  font-[400] bg-[#FAEAD7] rounded-[50%]">
                            <span className="opacity-20">S</span>
                          </div>
                          <p className="text-[1.375rem] mt-[1rem] font-DM font-[400]">
                            {" "}
                            {item.name}
                          </p>
                          <p className="font-Archivo font-[400] text-[1.125rem]">
                            Student from {item.university}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SplideSlide>
                </>
              );
            })}
          </SplideTrack>
          <div className="splide__arrows hidden relative"></div>
        </Splide>
      </div>
    </>
  );
}

export default Carosuel;
