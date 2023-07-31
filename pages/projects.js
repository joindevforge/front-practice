import Link from "next/link";
import React from "react";

const data = [
  {
    img: "/pro1/Ableton.jpg",
    title: "ableton",
    link:"/"
  },
  {
    img: "/pro1/abstract.png",
    title: "abstract",
    link:"/"
  },
  {
    img: "/pro1/Backstage-Talks.png",
    title: "backstage talks",
    link:"/"
  },
  {
    img: "/pro1/basic.png",
    title: "basic",
    link:"/"
  },
  {
    img: "/pro1/bonsai.png",
    title: "bonsai",
    link:"/"
  },
  {
    img: "/pro1/Canal-Street.png",
    title: "Canal Street Market",
    link:"/"
  },
  {
    img: "/pro1/deplace-maison.png",
    title: "deplace maisan",
    link:"/"
  },
  {
    img: "/pro1/figma.png",
    title: "Figma Merch",
    link:"/project"
  },
  {
    img: "/pro1/daddy.png",
    title: "godaddy",
    link:"/"
  },
  {
    img: "/pro1/lobe.png",
    title: "lobe",
    link:"/"
  },
  {
    img: "/pro1/Monogram.png",
    title: "Monogram",
    link:"/"
  },
  {
    img: "/pro1/Monstercat.png",
    title: "Monstercat",
    link:"/"
  },
  {
    img: "/pro1/Nintendo.png",
    title: "Nintendo",
    link:"/"
  },
  {
    img: "/pro1/oh.png",
    title: "oh.studio",
    link:"/"
  },
  {
    img: "/pro1/podia.png",
    title: "podia",
    link:"/"
  },
  {
    img: "/pro1/pulse.png",
    title: "pulse",
    link:"/"
  },
  {
    img: "/pro1/Qrates.png",
    title: "Qrates",
    link:"/"
  },
  {
    img: "/pro1/Starbucks.png",
    title: "Starbucks",
    link:"/"
  },
  {
    img: "/pro1/Stark.png",
    title: "stark",  
    link:"/"
  },
];

const data2=[
    {
        img:"/pro2/ecwid.png",
        title:"ecwid"
    },
    {
        img:"/pro2/grasshopper.png",
        title:"grasshopper"
    },
    {
        img:"/pro2/instrument.png",
        title:"instrument"
    },
    {
        img:"/pro2/shopify-dev.png",
        title:"shopify dev"
    },
    {
        img:"/pro2/sketch.png",
        title:"sketch"
    },
    {
        img:"/pro2/Square.png",
        title:"Square"
    },
    {
        img:"/pro2/trello.png",
        title:"trello"
    },
   
]

function projects() {
  return (
    <>
      <div className=" max-w-[1600px] bg-white mx-auto flex flex-col items-center justify-center">
        <h1 className=" md:mt-[72px] mt-[50px] mb-[24px] text-[2.5rem] md:text-[4.5rem] font-DM ">
          Project Library
        </h1>
        <div className=" flex flex-wrap justify-center mb-[50px] lg:max-w-[1280px] mx-auto">
          {data.map((item, index) => {
            return (
              <>
                <Link
                href={item.link}
                  key={index}
                  className="h-[300px]  border-2 border-black m-[18px] sm:w-[380px] w-full bg-white"
                >
                  <div className=" w-full h-[82%] bg-contain">
                    <img
                      src={item.img}
                      alt="as"
                      className=" bg-cover h-full w-full"
                    />
                  </div>
                  <div className="py-[8px] border-t-2 underline border-black px-[16px] text-[1.5rem] font-DM capitalize">
                    {item.title}
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
      {/* end */}
      <div className=" max-w-[1600px] border-t-2 border-black bg-white mx-auto flex flex-col items-center justify-center">
        <h1 className="mt-[36px] text-[2.25rem] font-DM font-bold">
          Retired Projects
        </h1>
        <div className=" flex flex-wrap justify-center mt-[30px] mb-[50px] lg:max-w-[1280px] mx-auto">
         {
            data2.map((item,index)=>{
                return(
                    <>
                    <div key={index}  className="h-[300px]  border-2 border-black m-[18px] sm:w-[380px] w-full bg-white">
            <div className=" w-full h-[82%] bg-contain">
              <img
                src={item.img}
                alt="as"
                className=" bg-cover h-full w-full"
              />
            </div>
            <div className="py-[8px] border-t-2 underline border-black px-[16px] text-[1.5rem] font-DM capitalize">
             {item.title}
            </div>
          </div>
                    </>
                )
            })
         }
        </div>
      </div>
    </>
  );
}

export default projects;
