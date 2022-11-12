import Link from "next/link";
import { useState } from "react";
import HeadTag from "../../components/common/head";
import Top from "../../components/common/top";

export default function Recruitment(){
  let opt = ["one","two","three"];
  let dat = [
    {
      name: opt[0],
      description:"",
      link:"/"
    },
    {
      name: opt[1],
      description:"",
      link:"/"
    },
    {
      name: opt[2],
      description:"",
      link:"/"
    },
  ]
  const [option,setOption] = useState(opt[0]);
  const [data,setData] = useState(dat[0]);
  return(
    <div className="bg-gra rounded-sm text-slate-100  bg-gray-50/0    select-none">
      <HeadTag title="Recruitment | AutoZ" cardTitle="Recruitment | AutoZ" description="Research and Development team, VIT Vellore" image="" ></HeadTag>
      <Top main="Recruitment" sub="AutoZ" mini={""}></Top>
      
     <div className='h-screen snap-center pt-20  md:px-20 flex flex-row items-center justify-center'>
      { option &&
        <div className="text-3xl w-full md:w-1/2">
         <div>Domain</div>
         <div className="grid grid-cols-3 gap-5">
          {opt.map((i,index)=>(
            <div onClick={()=>{setData(dat[index])}} className="capitalize bg-slate-100 text-gray-900 text-center p-2 text-lg " key={index}>{i}</div>
          ))}
         </div>
        </div>
      }
      { data &&
        <div className="w-1/2 hidden md:block ">
          <div>{data.name}</div>
          <div>{data.description}</div>
          <div>{data.link}</div>
          
        </div>
      }
     </div>
    </div>
  );
}