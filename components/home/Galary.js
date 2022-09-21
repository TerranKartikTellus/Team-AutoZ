import Link from "next/link";
import { useState } from "react";
import { projects } from "../../lib/data/projects";
export default function Galary(){
  
  return(
    <div className="h-screen text-gray-100 bg-red500 w-screen">
        {/* <div className="text-gray-100 bg-red-400 hidden md:block">Our most promissinng projects</div> */}
        <div className="hidden md:block"><Show projects={projects}></Show></div>
        <div className="md:hidden block"><ShowSm projects={projects}></ShowSm></div>
    </div>
  );
}

function Show({projects}){
  const [showMore , setShoMore] = useState();

  return(
    <div className="text-gray-100 200/30 hidden md:block my-auto h-full snap-y snap-mandatory scroll">
      {/* <div className="w-1/2"></div> */}
      <div className="z-30 ">
      {
        projects.map(i=>(
          <div key={i} className="z-30 h-screen snap-center flex flex-row justify-center items-center">
            <div className="w-5/12 flex flex-col items-center justify-center">
              <div className="w-full h-full mx-auto flex flex-row items-center relative justify-center border-b-2 border-gray-50/50">
               <img className="grayscale  transition-all duration-700 opacity-90 w-[280px] h-[280px] opacity-100 hover:grayscale-0  border2 order-gray-50/60 object-cover rounded-sm absolute -translate-x-16" src={i.img1}></img> 
               <img className="grayscale  transition-all duration-700 opacity-90 w-[180px] h-[180px] opacity-100 hover:grayscale-0  border2 order-gray-50 absolute translate-y-28 translate-x-24 object-cover rounded-sm" src={i.img2}></img>
               <img className="grayscale  transition-all duration-700 opacity-80 w-[200px] h-[200px] opacity-100 hover:grayscale-0  border2 order-gray-50/80 absolute -translate-y-32 translate-x-20 object-cover rounded-sm" src={i.img3}></img>
              </div>
            </div>
            <div className="w-[100px]  h-full  flex flex-col items-center justify-center">
              <div className="bg-gray-100/60 w-2 h-2 scale-50 rounded-full mb-2"></div>
              <div className="bg-gray-100/80 w-2 h-2 scale-75 rounded-full mb-2"></div>
              <div className="bg-gray-100/90 w-2 h-2 rounded-full"></div>
              <div className="bg-gray-100/90 rounded-lg mx-auto w-[1px] h-[200px] text-transparent">.</div>
              <div className="bg-gray-100/90 w-2 h-2 rounded-full"></div>
              <div className="bg-gray-100/80 w-2 h-2 scale-75 rounded-full mt-2"></div>
              <div className="bg-gray-100/60 w-2 h-2 scale-50 rounded-full mt-2"></div>
              
            </div>
            <div className="w-5/12 space-y-2 pr-10 bgred-400">
                <div className="text-5xl tracking-wider">{i.title}</div>
                
                {/* <div className="opacity-60 text-xs">{i.date}</div> */}
                <div className="opacity-60 text-base">{i.about}</div>
                <div className="opacity-80 text-lg">{i.description}</div>
                <div className="flex flex-rwo items-center justify-start">
                  <div>
                    <Link href="/" >
                    <a  className="group flex flex-row items-center space-x-2 justify-start">
                    {/* <img src="/svg/camera.svg" ></img> */}
                    <svg className="invert opacity-80 w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-8 10.199l-3.64 1.801 3.64 1.796v2.204l-6-2.935v-2.131l6-2.934v2.199zm8 2.866l-6 2.935v-2.204l3.64-1.796-3.64-1.801v-2.199l6 2.935v2.13z"/></svg>
                    <div className="opacity-0 group-hover:opacity-80 translate-x-10 group-hover:translate-x-0 duration-300 transition-all ease-in-out">repo</div>
                    </a>
                    </Link>
                  </div>
                </div>
            </div>
            
          </div>
        ))
      }
      </div>
    </div>
  );
}


function ShowSm({projects}){
  return(
    <div className="text-gray-100 200/30  my-auto h-full snap-y snap-mandatory scroll">
      {
        projects.map(i=>(
          <div key={i} className="h-screen snap-center flex flex-col justify-center items-center">
            <div className="text-transparent h-[40px] bg-red">.</div>
            <div className="h-auto flex flex-col items-center justify-center">
              <div className="w-full h-auto mx-auto  relative ">
               <img className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out opacity- shadow-lg abso shadow-blue-800/20 w-[260px] h-[260px] rder-2 border-gray- object-cover rounded " src={i.img1}></img> 
               {/* <img className=" opacity- shadow-lg shadow-blue-800/20 w-[160px] h-[160px] rder-2 border-gray- object-cover rounded-full" src={i.img}></img> */}
                {/* <div className="absolute -top-5 right-0"><Link href="/"><a className=" text-center mx-auto opacity-60 text-base w-full bg-red400">Repository</a></Link></div>  */}
            
            <div className="flex flex-row items-center w-full bg-red200 justify-around space-x-4">

            <div className="text-center text-5xl tracking-wider mt-4">{i.title}</div>

            </div>
              </div>
            </div>
            {/* <div className="h-[100px]    flex flex-col items-center justify-center">
              <div className="bg-gray-100/60 w-2 h-2 scale-50 rounded-full mb-2"></div>
              <div className="bg-gray-100/80 w-2 h-2 scale-75 rounded-full mb-2"></div>
              <div className="bg-gray-100/90 w-2 h-2 rounded-full"></div>
              <div className="bg-gray-100/90 rounded-lg mx-auto w-[1px] h-[200px] text-transparent">.</div>
              <div className="bg-gray-100/90 w-2 h-2 rounded-full"></div>
              <div className="bg-gray-100/80 w-2 h-2 scale-75 rounded-full mt-2"></div>
              <div className="bg-gray-100/60 w-2 h-2 scale-50 rounded-full mt-2"></div>
              
            </div> */}
            <div className="h-auto space-y-2 p bgred-400  flex flex-col items-center justify-center">
              
                {/* <div className="text-center text-xs opacity-80 tracking-wider">{i.date}</div> */}
                <div className="text-center opacity-60 text-base">{i.about}</div>
                <div className="text-center opacity-80 text-lg">{i.description}</div>
                <div><Link href="/">
                  <a className="flex underline flex-row item-center justify-center space-x-3">
                    <div >View Repository</div>
                    {/* <svg className="invert opacity-80 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-8 10.199l-3.64 1.801 3.64 1.796v2.204l-6-2.935v-2.131l6-2.934v2.199zm8 2.866l-6 2.935v-2.204l3.64-1.796-3.64-1.801v-2.199l6 2.935v2.13z"/></svg> */}
                    
                  </a>
                  </Link>
                </div>
            </div>
            
          </div>
        ))
      }
    </div>
  );
}

