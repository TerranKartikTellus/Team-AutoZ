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
    // document.getElementById("vid").addEventListener('ended', (event) => {
    //   document.getElementById("vid").classList.add("hidden");console.log('end');
    // });
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
        {/* <div className="text-center text-xl hidden md:block w-5/6 fenter">
            <video controls   autoPlay loop src="https://firebasestorage.googleapis.com/v0/b/autoz-8611b.appspot.com/o/mylivewallpapers.com-Spaceman-with-Dog.mp4?alt=media&token=6138d067-509e-4fa1-8115-f022032be9fd" id="vid"  className="w-full"   >
             <source autoPlay src={"https://firebasestorage.googleapis.com/v0/b/autoz-8611b.appspot.com/o/mylivewallpapers.com-Spaceman-with-Dog.mp4?alt=media&token=6138d067-509e-4fa1-8115-f022032be9fd"}  id="vid"
              type="video/mp4" />No video found
            </video>
          
          </div> */}
    {/* </div> */}
    </div>
    {/* <div className="w-1/2 hidden md:block">
 
    </div> */}
    <div className=" md:w-3/5 py-14 my-10 overflow-x-hidden">
      <div className="mx-auto overflo pt-[6100px] md:pt-[3200px] ">
        {/* <div className="rounded-md md:hidden mx-auto bed-400 mb-10"> 
        <video className="rounded-md mx-auto" controls autoPlay src="https://firebasestorage.googleapis.com/v0/b/autoz-8611b.appspot.com/o/mylivewallpapers.com-Spaceman-with-Dog.mp4?alt=media&token=6138d067-509e-4fa1-8115-f022032be9fd" id="vid"       >
         <source autoPlay src={"https://firebasestorage.googleapis.com/v0/b/autoz-8611b.appspot.com/o/mylivewallpapers.com-Spaceman-with-Dog.mp4?alt=media&token=6138d067-509e-4fa1-8115-f022032be9fd"}  id="vid"
          type="video/mp4" />No video found
        </video>
         </div> */}
        {/* <div className=" tracking-wider text-sm ml-5 ">Try today</div> */}
        {q.map((i,index)=>{
          return (
            <Link  key={index} href={i[3] ? i[3] : '/'}>
            <a target="_blank" className=" text-white relative group z-50  tracking-wide   border-b  rounded-sm m-3 p-5 group block transition-all duration-500 ease-in-out">
            {/* {<div className="absolute transition-all ease-in-out duration-200 translate-x-5 md:group-hover:translate-x-0 top-1 right-1  hover:underline md:group-hover:opacity-100 opacity-0"><Link href={i[3] ? i[3] : '/'}><a className="bg-gray-100 text-gray-900 tracking-widest p-2 text-base ">Link</a></Link></div>} */}
            <div className=" text-2xl fn font-medium pb-2     opacity-"><strong className="tracking-wide opacity-90">Questions {index+1}: {i[0]}</strong></div>
            <div className="flex md:flex-row flex-col w-full md:items-center md:justify-around">
            <div className="w-full md:w-8/12 border-t-[1p border-black py-1 opacity-80 tracking-wider"><strong>Skills required:</strong> {i[1]}</div>
            
            <div className="w-full md:w-4/12 bg-re-400 text-center md:text-right border-t-[1p border-black py-1 opacity-80">
              {/* <Link href="/"><a className="text-sm p-2 bg-gray-100 rounded text-gray-800">Link</a></Link><br></br> */}
              <strong>Difficulty level</strong> 
              <div className=" flex flex-row items-center md:justify-end justify-center select-none">{<Stars number={i[2]}></Stars>}</div> 
              {/* {<div className="mx-auto hover:underline hover:opacity-90 md:hidden my-3"><Link href={i[3] ? i[3] : '/'}><a className="bg-gray-100 text-gray-900 tracking-widest p-2 text-base ">Link</a></Link></div>} */}
            </div>
            </div>
          </a>
            </Link>
          )
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
    disabled
    // changeRating={null}
    // onChange={null}
    edit={false}
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