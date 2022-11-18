import Link from "next/link";
import { useEffect, useState } from "react";
import HeadTag from "../../components/common/head";
import Top from "../../components/common/top";
import  Y from "/components/Animate/WhenInView/Translate/y"
import Opacity from "/components/Animate/WhenInView/Opacity"
import Scale from "/components/Animate/WhenInView/Scale"
import {questions} from "/lib/data/recruitment"
export default function Recruitment(){

  const [switchPanel, setSwitch] = useState(true);
  useEffect(()=>{
    document.getElementById("vid").addEventListener('ended', (event) => {
      document.getElementById("vid").classList.add("hidden");console.log('end');
    });
  },[])
  
  return(
    <div className="bg-gra rounded-sm w-full text-slate-100  bg-gray-50/0  overflow-y-scroll  select-none overflow-y-hidden">
      <div className="z-10">

      <HeadTag className=""  title="Recruitment | AutoZ" cardTitle="Recruitment | AutoZ" description="Research and Development team, VIT Vellore" image="" ></HeadTag>
      </div>
      <Top main="Recruitment " sub="AutoZ 2022-2023" mini={""}></Top>


     <div className='w-full h-screen snap-center pt-20  md:px-20 flex flex-col md:flex-row  items-center justify-center'>
      {switchPanel && 
      <div className="md:hidden"> 
        <video controls autoPlay src="https://firebasestorage.googleapis.com/v0/b/autoz-8611b.appspot.com/o/mylivewallpapers.com-Spaceman-with-Dog.mp4?alt=media&token=6138d067-509e-4fa1-8115-f022032be9fd" id="vid"     className="w-[400px]"   >
         <source autoPlay src={"https://firebasestorage.googleapis.com/v0/b/autoz-8611b.appspot.com/o/mylivewallpapers.com-Spaceman-with-Dog.mp4?alt=media&token=6138d067-509e-4fa1-8115-f022032be9fd"}  id="vid"
          type="video/mp4" />No video found
        </video>
         </div>}
      {<div className="w-full">{questions && <ShowQuestions q={questions}></ShowQuestions>}</div>}
     </div>
    </div>
  );
}

function ShowQuestions({q}){
  return(
  <div className="flex flex-row items-center justify-center space-x-3">
    <div className="w-1/2   h-screen  fixed  flex flex-col items-center justify-center top-0 left-0">
    {/* <div className="hidden">  */}
        <div className=" hidden md:block w-5/6 fenter">
            <video controls   autoPlay loop src="https://firebasestorage.googleapis.com/v0/b/autoz-8611b.appspot.com/o/mylivewallpapers.com-Spaceman-with-Dog.mp4?alt=media&token=6138d067-509e-4fa1-8115-f022032be9fd" id="vid"  className="w-full"   >
             <source autoPlay src={"https://firebasestorage.googleapis.com/v0/b/autoz-8611b.appspot.com/o/mylivewallpapers.com-Spaceman-with-Dog.mp4?alt=media&token=6138d067-509e-4fa1-8115-f022032be9fd"}  id="vid"
              type="video/mp4" />No video found
            </video>
            
          </div>
    {/* </div> */}
    </div>
    <div className="w-1/2 hidden md:block">
 
    </div>
    <div className=" md:w-1/2 py-14 my-8 ">
      <div className="overflo pt-[2900px] md:pt-[1800px] ">
        <div className=" tracking-wider text-sm ml-5 ">Try today</div>
        {q.map((i,index)=>{
          return (
            <div className="text-black z-50 tracking-wide md:bg-slate-50/80 bg-slate-50 hover:md:bg-slate-50/10 hover:md:text-white rounded-sm m-3 p-5 group block transition-all duration-500 ease-in-out" key={index}>
            
            <div className=" text-2xl fn font-medium pb-2"><strong className="tracking-wide opacity-90">Questions {index+1}: {i[0]}</strong></div>
            <div className=" border-t-[1px] border-black py-1 "><strong>Skills required:</strong> {i[1]}</div>
            <div className=" border-t-[1px] border-black py-1 ">
              <strong>Difficulty level:</strong> {i[2]} 
              
            </div>
          </div>)
        })}
        </div>
    </div>
  </div>
  );
}

function HalfStar(){
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524v-12.005zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></svg>
  );
}
function Star(){
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
  );
}