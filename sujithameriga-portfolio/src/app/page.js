'use client'
import Image from "next/image";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai";
import shiny from "../../public/shiny.png"
import ADP_logo from "../../public/ADP_logo.png"
import computer_science from "../../public/computer_science.jpg"
import Deloitte2_logo from "../../public/Deloitte2_logo.png"
import UF_logo from "../../public/UF_logo.png"
import Zenoti_logo from "../../public/Zenoti_logo.png"
import mobile_game from "../../public/mobile_game.jpg"
import Twitter_clone_erlang from  "../../public/Twitter_clone_erlang.jpeg"
import { useState } from "react";


export default function Home() {
  const [lightMode, setLightMode]=useState(false);
  return (
    <html>
      
        <head>
        <title>className Meriga Portfolio</title>
        </head>
        <body>
        <main className={lightMode?"bodylight":"bodydark"}>
          <section className="">
            <nav className="py-10 mb-12 flex justify-between">
              <h1 className="text-xl font-burtons">developedbysujitha</h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill onClick={()=>{setLightMode(!lightMode)}} className="cursor-pointer text-2xl" title="Switch theme"/>
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-red-500 text-white px-4 py-2 rounded-md ml-8"
                    href="https://drive.google.com/file/d/1KIz6aP_q5u4s_fQyntlVEuxHFQ9oRDIg/view" title="Navigate to resume" type="application/pdf"
                  >
                    Résumé
                  </a>
                </li>
              </ul>
            </nav>
            <div className="text-center p-10">
            <h6 className="font-extralight">Hello! I am</h6>
              <h2 className="text-5xl py-2 bg-gradient-to-r from-cyan-700 via-cyan-500 to-red-500 text-transparent bg-clip-text">Sujitha Meriga</h2>
              <h3 className="text-2xl py-2">Software developer</h3>
              <p className="">Welcome to my portfolio!</p>
              <br />
              <p className="text-md py-5 leading-8 text-gray-300">
                I am a software developer specialized in fintech. I build full-stack
                web and mobile applications.<br/>
                 I am currently pursuing my Masters in Computer Science at the
                University of Florida.
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 pb-20 text-gray-300">
              <AiFillMail/>
              <AiFillLinkedin/>
              <AiFillGithub/>
            </div>
            <div className="fullwidth">
            <div className="px-3 mx-auto bg-gradient-to-b from-cyan-500 rounded-full w-80 h-80 overflow-hidden">
              <Image src={shiny} objectFit="cover" style={{position:"relative",height:"300px", width:"300px"}}/>
            </div>
            </div>
            <div>
            Hey there! I'm Sujitha Meriga, a tech enthusiast with a knack for crafting software solutions. Whether it's building real-time payment systems or creating fun mobile apps, I love diving into challenges headfirst. With a Master's in Computer Science and a passion for innovation, I'm all about making tech magic happen.
            </div>
            <div className="timeline antialiased text-gray-100 container mx-auto px-6 flex flex-col space-y-8">

              <div className="absolute block w-2 h-full bg-gray-500 shadow-md-inset-0 self-center md:mx-auto md:right-0 md:left-0 xs:absolute mt-32"></div>

              <div>

                <Image src={mobile_game} className=" timeline-img "></Image>
              
                <div className="timeline-container ">

                  <div className="timeline-para">
                    [June 2023-present]
                    <br/>
                  Developing a mobile gaming application with Flutter and Adobe Flash engine. <br/>
                  <small>To be released on App Store and Play Store.</small>
                  </div>
                  
                </div>
                

              </div>

              <div>

                <Image src={UF_logo} className=" timeline-img"></Image>
                <div className="timeline-container timeline-container-left">

                  <div className="timeline-para">
                    [Aug 2022-present]
                    <br/>
                  Pursuing Masters at UF in Computer Science.<br/>
                  <small>Advanced Data Structures, Analysis of Algorithms, Distributed Operating System Principles</small>  
                  </div>
                </div>
                

              </div>

              <div>

                <Image src={Zenoti_logo} className=" timeline-img"></Image>
                <div className="timeline-container">

                  <div className="timeline-para">
                    [Apr 2021- Aug 2022]
                    <br/>
                  Software Engineer At Zenoti<br/>
                  <small>Worked in the fintech division of Zenoti, developed applications for processing payments on the platform.</small>  
                  </div>
                </div>
                

              </div>

              <div>

                <Image src={Deloitte2_logo} className=" timeline-img"></Image>
                <div className="timeline-container timeline-container-left">

                  <div className="timeline-para">
                    [Jan 2021-Apr 2021]
                    <br/>
                  Software Internship at Deloitte<br/>
                  <small>Worked on the Azure cloud, developed scripts and tools to automate internal processes, delpoyed these onto the cloud.</small>  
                  </div>
                </div>
                

              </div>

              <div>

                <Image src={ADP_logo} className=" timeline-img "></Image>
              
                <div className="timeline-container ">

                  <div className="timeline-para">
                    [Aug 2020-Dec 2020]
                    <br/>
                  Software Engineering internship at ADP<br/>
                  <small>Worked on migrating the database to PostgreSQL from Oracle database. Created and modified several codefiles and stored procedures in the process.</small>
                  </div>
                  
                </div>
                

              </div>

              <div>

                <Image src={computer_science} className=" timeline-img"></Image>
                <div className="timeline-container timeline-container-left">

                  <div className="timeline-para">
                    [Aug 2017-Jun 2021]
                    <br/>
                  Bachelor of Technology at GNITS, Hyderabad, India<br/>
                  <small>Advanced Data Structures, Analysis of Algorithms, Distributed Operating System Principles</small>  
                  </div>
                </div>
                

              </div>

            </div>

            <div className="project-flipcards m-24 text-2xl py-2  text-center p-10">
              <h4 className="m-10">Projects</h4>
                <div className="flex  justify-between my-10 ">
                  <div className="w-[380px] h-[220px] bg-transparent  cursor-pointer group perspective">
                    <div  className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                      <div className="absolute backface-hidden border-2 w-full h-full ">
                        <Image src={UF_logo}></Image>
                      </div>
                      <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 ">
                      
                      </div>
                    </div>
                  </div>                 
                </div>
                <div className="flex  justify-between my-10">
                <div className="w-[380px] h-[220px] bg-transparent  cursor-pointer group perspective">
                <div  className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  <div className="absolute backface-hidden border-2 w-full h-full ">
                  {/* <Image src={Twitter_clone_erlang} className="w-full h-full"></Image> */}
                  sdcbsdoiucoweisankl
                  </div>
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 ">

                  </div>
                </div>
                </div>
                <div className="w-[380px] h-[220px] bg-transparent cursor-pointer group perspective">
                <div  className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  <div className="absolute backface-hidden border-2 w-full h-full ">
                  {/* <Image src={Twitter_clone_erlang} className="w-full h-full"></Image> */}
                  sdcbsdoiucoweisankl
                  </div>
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 ">

                  </div>
                </div>
                </div>
                <div className="w-[380px] h-[220px] bg-transparent cursor-pointer group perspective">
                <div  className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  <div className="absolute backface-hidden border-2 w-full h-full ">
                  {/* <Image src={Twitter_clone_erlang} className="w-full h-full"></Image> */}
                  sdcbsdoiucoweisankl
                  </div>
                  <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 ">

                  </div>
                </div>
                </div>
                </div>
            </div>

            </section>
        </main>
        </body>
      
    </html>
  );
}
