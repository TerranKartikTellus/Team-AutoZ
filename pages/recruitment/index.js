import Link from "next/link";
import { useState } from "react";
import HeadTag from "../../components/common/head";
import Top from "../../components/common/top";
import  Y from "/components/Animate/WhenInView/Translate/y"
import Opacity from "/components/Animate/WhenInView/Opacity"
import Scale from "/components/Animate/WhenInView/Scale"

export default function Recruitment(){
  let dat = [
    {
      name: "CSE",
      description:"desc",
      link:"/"
    },
    {
      name: "ECE/EEE",
      description:"desc",
      link:"/"
    },
    {
      name: "Mechanical",
      description:"desc",
      link:"/"
    },
    {
      name: "Design and Social Media",
      description:"desc",
      link:"/"
    },
  ]
  const [data,setData] = useState([dat[1],dat[2],dat[3]]);
  const [active,setActive] = useState([0 , dat[0]]);
  return(
    <div className="bg-gra rounded-sm text-slate-100  bg-gray-50/0    select-none">
      <HeadTag title="Recruitment | AutoZ" cardTitle="Recruitment | AutoZ" description="Research and Development team, VIT Vellore" image="" ></HeadTag>
      <Top main="Recruitment " sub="AutoZ 2022-2023" mini={""}></Top>


     <div className='h-screen snap-center pt-20  md:px-20 flex flex-col md:flex-row  items-center justify-center'>
      {
        active &&
        <div onClick={()=>{
          if(active[0]==3){
                     setActive([0,dat[0]]);
          }else          setActive([active[0]+1,dat[active[0]+1]]);
        }} className="text-5xl scale-75 text-center bg-slate-50/50 h-[150px] w-[300px] md:p-0 p-2  md:h-4/6 flex flex-col items-center justify-center text-black md:w-1/2">
          
          <Opacity initial={0} final={1} duration={1/3} delay={1}>
           {active[1].name}
           <div className="text-lg">Tap to change Domain</div>
          </Opacity>
        </div>
      } 
      { data &&
                <div className="w-full md:w-1/2 space-y-2  px-10 md:h-auto text-center md:text-left h-[350px]">
                  <Opacity  initial={0} final={1} duration={1/3} delay={1}>
                  <div className="space-y-2 w-full">

                  <div className="text-4xl hidden md:block">{active[1].name}</div>
                  <div className="text-xl">{active[1].description}</div>
                  <div className="text-sm"><Link href={active[1].link}><a className="bg-gray-100/80 hover:bg-gray-100/70 rounded-sm p-2 text-black text-sm">View Document</a></Link></div>
                  </div>
                  </Opacity>
                </div>
      }
     </div>
    </div>
  );
}