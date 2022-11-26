import Link from "next/link";
import { useEffect, useState } from "react";
import React, { useRef, useMemo, Fragment } from 'react'
import HeadTag from "../../components/common/head";
import Top from "../../components/common/top";

import {questions} from "/lib/data/recruitment"
import ReactStars from "react-rating-stars-component";

export default function Recruitment(){
  const [show,setshow] = useState(true);
  console.log(show);
  const [switchPanel, setSwitch] = useState(true);
  const myRef= useRef();
  useEffect(()=>{
    document.getElementById("vid").addEventListener('ended', (event) => {
      document.getElementById("vid").classList.add("hidden");console.log('end');
    });
    const observer = new IntersectionObserver((entries)=>{
      const entry = entries[0];
      console.log('entry',entry);
      setshow(!entry.isIntersecting);
    })

    observer.observe(myRef.current)
    
  },[])


  return(
    <div className="bg-gra  overflidden b400 md:h-full rounded-sm w-full text-slate-100  bg-gray-50/0  overflow-y-scroll  select-none overflow-y-hidden">
      <div className="z-10">

      <HeadTag className=""  title="Recruitment | AutoZ" cardTitle="Recruitment | AutoZ" description="Research and Development team, VIT Vellore" image="" ></HeadTag>
      </div>
      {<Top main="Recruitment " sub="AutoZ 2022-2023" mini={""}></Top>}


     <div className='w-full h-screen snap-center pt-20  md:px-20 flex flex-col md:flex-row  items-center justify-center'>
      {/* {switchPanel && 
      <div style={{ position: 'relative',zIndex:1}} className="mx-auto z-50 md:hidden"> 
        <video style={{ position: 'relative',zIndex:1}} controls autoPlay src="https://firebasestorage.googleapis.com/v0/b/autoz-8611b.appspot.com/o/mylivewallpapers.com-Spaceman-with-Dog.mp4?alt=media&token=6138d067-509e-4fa1-8115-f022032be9fd" id="vid"     className="w-[400px]"   >
         <source autoPlay src={"https://firebasestorage.googleapis.com/v0/b/autoz-8611b.appspot.com/o/mylivewallpapers.com-Spaceman-with-Dog.mp4?alt=media&token=6138d067-509e-4fa1-8115-f022032be9fd"}  id="vid"
          type="video/mp4" />No video found
        </video>
         </div>} */}
      {<div ref={myRef} className="w-full">{questions && <ShowQuestions q={questions}></ShowQuestions>}</div>}
     </div>
    </div>
  );
}

function ShowQuestions({q}){
  return(
  <div className="flex flex-row items-center justify-center space-x-3">
    <div className="w-1/2   h-screen  fixed  flex flex-col items-center justify-center top-0 left-0">
    {/* <div className="hidden">  */}
        <div className="text-center text-xl hidden md:block w-5/6 fenter">
            <video controls   autoPlay loop src="https://firebasestorage.googleapis.com/v0/b/autoz-8611b.appspot.com/o/mylivewallpapers.com-Spaceman-with-Dog.mp4?alt=media&token=6138d067-509e-4fa1-8115-f022032be9fd" id="vid"  className="w-full"   >
             <source autoPlay src={"https://firebasestorage.googleapis.com/v0/b/autoz-8611b.appspot.com/o/mylivewallpapers.com-Spaceman-with-Dog.mp4?alt=media&token=6138d067-509e-4fa1-8115-f022032be9fd"}  id="vid"
              type="video/mp4" />No video found
            </video>
          
          </div>
    {/* </div> */}
    </div>
    <div className="w-1/2 hidden md:block">
 
    </div>
    <div className=" md:w-1/2 py-14 my-10 overflow-x-hidden">
      <div className="mx-auto overflo pt-[5200px] md:pt-[2700px] ">
        {/* <div className="rounded-md md:hidden mx-auto bed-400 mb-10"> 
        <video className="rounded-md mx-auto" controls autoPlay src="https://firebasestorage.googleapis.com/v0/b/autoz-8611b.appspot.com/o/mylivewallpapers.com-Spaceman-with-Dog.mp4?alt=media&token=6138d067-509e-4fa1-8115-f022032be9fd" id="vid"       >
         <source autoPlay src={"https://firebasestorage.googleapis.com/v0/b/autoz-8611b.appspot.com/o/mylivewallpapers.com-Spaceman-with-Dog.mp4?alt=media&token=6138d067-509e-4fa1-8115-f022032be9fd"}  id="vid"
          type="video/mp4" />No video found
        </video>
         </div> */}
        {/* <div className=" tracking-wider text-sm ml-5 ">Try today</div> */}
        {q.map((i,index)=>{
          return (
            <div className="text-white z-50  tracking-wide   border-b  rounded-sm m-3 p-5 group block transition-all duration-500 ease-in-out" key={index}>
            
            <div className=" text-2xl fn font-medium pb-2     opacity-"><strong className="tracking-wide opacity-90">Questions {index+1}: {i[0]}</strong></div>
            <div className="flex md:flex-row flex-col w-full md:items-center md:justify-around">
            <div className="w-full md:w-8/12 border-t-[1p border-black py-1 opacity-80 tracking-wider"><strong>Skills required:</strong> {i[1]}</div>
            <div className="w-full md:w-4/12 bg-re-400 text-center md:text-right border-t-[1p border-black py-1 opacity-80">
              <strong>Difficulty level</strong> 
              <div className=" flex flex-row items-center md:justify-end justify-center select-none">{<Stars number={i[2]}></Stars>}</div> 
            </div>
            </div>
          </div>)
        })}
        </div>
    </div>
  </div>
  );
}

function Stars({number}){
  return(
    <ReactStars
    count={5}
    // onChange={ratingChanged}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="rgb(203 213 225)"
    value={number}
  />
  );
}