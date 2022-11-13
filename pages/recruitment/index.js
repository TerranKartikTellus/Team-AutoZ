import Link from "next/link";
import { useState } from "react";
import HeadTag from "../../components/common/head";
import Top from "../../components/common/top";

export default function Recruitment(){
  let dat = [
    {
      name: "CSE",
      description:"desc",
      link:"/link"
    },
    {
      name: "ECE/EEE",
      description:"desc",
      link:"/link"
    },
    {
      name: "Mechanical",
      description:"desc",
      link:"/link"
    },
    {
      name: "Design and Social Media",
      description:"desc",
      link:"/link"
    },
  ]
  const [data,setData] = useState([dat[1],dat[2],dat[3]]);
  const [active,setActive] = useState([0 , dat[0]]);
  return(
    <div className="bg-gra rounded-sm text-slate-100  bg-gray-50/0    select-none">
      <HeadTag title="Recruitment | AutoZ" cardTitle="Recruitment | AutoZ" description="Research and Development team, VIT Vellore" image="" ></HeadTag>
      <Top main="Recruitment " sub="AutoZ 2022-2023" mini={""}></Top>


     <div className='h-screen snap-center pt-20  md:px-20 flex flex-row items-center justify-center'>
      {
        active &&
        <div onClick={()=>{
          if(active[0]==3){
                     setActive([0,dat[0]]);
          }else          setActive([active[0]+1,dat[active[0]+1]]);
        }} className="text-5xl bg-slate-50/50 h-4/6 flex flex-col items-center justify-center text-black w-1/2">
          {active[1].name}
          <div className="text-lg">Tap to change Domain</div>
        </div>
      } 
      { data &&
        <div className="w-1/2 space-y-2 hidden md:block px-10">
          <div className="text-4xl">{active[1].name}</div>
          <div className="text-xl">{active[1].description}</div>
          <div className="text-sm"><Link href={active[1].link}><a className="bg-gray-100/80 hover:bg-gray-100/70 rounded-sm p-2 text-black text-sm">View Document</a></Link></div>
          
        </div>
      }
     </div>
    </div>
  );
}