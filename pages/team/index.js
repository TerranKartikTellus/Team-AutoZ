import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HeadTag from "../../components/common/head";
import Top from "../../components/common/top";
import Opacity from "/components/Animate/WhenInView/Opacity"
import Scale from "/components/Animate/WhenInView/Scale"
import  Y from "/components/Animate/WhenInView/Translate/y"

export default function Team(){
  return(
    <main className="bg-gra rounded-sm text-gray-100  bg-gray-900/5  snap-y snap-mandatory h-screen overflow-x-hidden  select-none">
      <HeadTag title="Team | AutoZ" cardTitle="TEAM MEMBERS | AutoZ" description="US | AutoZ" image="" ></HeadTag>
         <Top main={"Team Members"} sub="AutoZ" mini={""}></Top>
      


     <div className="hidden md:block my-auto h-full snap-y snap-mandatory ">
       
       <div className="snap-center h-full"><Part2></Part2></div>
     </div>

     <div className="block md:hidden my-auto h-full snap-y snap-mandatory ">
       
       <div className="snap-center h-full"><PartSM3></PartSM3></div>
       {/* <div className="snap-center h-full"><PartSM4></PartSM4></div> */}
     </div>
    </main>
  );
}

function PartSM3(){
 const [team,setteam]= useState(false);
  return(
    <div className="relative bg-red-4 h-full rounded-sm flex flex-row group">
      <div className="opacity-0 translate-x-full group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out absolute top-auto left-auto w-full bg-red-4 h-full flex flex-row my-auto">
      
      <div className="w-full  flex flex-col items-center justify-center space-y-2">
          <div className="flex flex-row items-center justify-center space-x-2">
            <Link href="/team/advisors"><a className="w-32 h-32 bg-gray-100/70 flex flex-row items-center justify-center text-gray-900 text-lg tracking-wider hover:opacity-20 text-center">Advisors</a></Link>
            <Link href="/team/board"><a className="w-32 h-32 bg-gray-100/70 flex flex-row items-center justify-center text-gray-900 text-lg tracking-wider hover:opacity-20 text-center">Board Members  </a></Link>
          </div>

           <div className="flex flex-row items-center justify-center space-x-2">
            <Link href="/team/core"><a className="w-32 h-32 text-center bg-gray-100/70 flex flex-row items-center justify-center text-gray-900 text-lg tracking-wider hover:opacity-20 ">Core Committee Members</a></Link>
            <Link href="/team/alumni"><a className="w-32 h-32 bg-gray-100/70 flex flex-row items-center justify-center text-gray-900 text-lg tracking-wider hover:opacity-20 text-center">Alumni</a></Link>
          </div>
      </div>
    </div>
      <div className="w-full opaci relative -z-10 flex flex-col items-center justify-center space-y-2 my-auto  h-full">
         <img src="https://firebasestorage.googleapis.com/v0/b/autoz-8611b.appspot.com/o/team%2FautoZteam%20(1).jpg?alt=media&token=6cc37fea-4ab1-4766-8ca1-2cd8c04ec996"
              className="object-cover contrast-125 h-full mx-auto my-auto w-full  mx-auto"
              layout='fixed'
              alt=""
            ></img>
            <div className=" bg-black/40 absolute -top-2 left-0 w-full h-full text-transparent">v</div>
        <div className="absolute  bottom-10 ">
        <div className=" text-3xl tracking-wider text-center border-b-2 border-gray-100/40 pb-2">Our enthusiastically <br></br>driven Team</div>
          <div className=" flex flex-row items-center justify-center space-x-2 my-3 z-50">
            <Link href="/team/advisors"><a className="opacity-90 text-base">Advisors</a></Link>
            <Link href="/team/board"><a    className="opacity-90 text-base">Board</a></Link>
            <Link href="/team/core"><a     className="opacity-90 text-base">Core</a></Link>
            <Link href="/team/alumni"><a   className="opacity-90 text-base"> Alumni</a></Link>
          </div>
        {/* <div className=" text-xs tracking-wider">Whats makes us unique</div> */}
        <div className="mx-auto w-full bg-re text-center text-xs">
          29 Active Members
        </div>
        </div>
      </div>
      
    </div>
  );
}

function PartSM4(){
  return(
    <div className="bg-red-4 h-full flex flex-row my-auto">
      
      <div className="w-full  flex flex-col items-center justify-center space-y-2">
          <div className="flex flex-row items-center justify-center space-x-2">
            <Link href="/team/advisors"><a className="w-32 h-32 bg-gray-100/70 flex flex-row items-center justify-center text-gray-900 text-lg tracking-wider hover:opacity-20 text-center">Advisors</a></Link>
            <Link href="/team/board"><a className="w-32 h-32 bg-gray-100/70 flex flex-row items-center justify-center text-gray-900 text-lg tracking-wider hover:opacity-20 text-center">Board Members  </a></Link>
          </div>

           <div className="flex flex-row items-center justify-center space-x-2">
            <Link href="/team/core"><a className="w-32 h-32 text-center bg-gray-100/70 flex flex-row items-center justify-center text-gray-900 text-lg tracking-wider hover:opacity-20 ">Core Committee Members</a></Link>
            <Link href="/team/alumni"><a className="w-32 h-32 bg-gray-100/70 flex flex-row items-center justify-center text-gray-900 text-lg tracking-wider hover:opacity-20 text-center">Alumni</a></Link>
          </div>
      </div>
    </div>
  );
}


function Part2(){
  return(
    <div className="bg-red-4 h-full flex flex-row">
      <div className="w-full relative opacity-  flex flex-col items-center justify-start space-y-2 my-auto  ">
        <div className="relative bg w-4/6 h-full group">

        <Opacity initial={0} final={1} duration={1/3} delay={0}>
           {/* <People></People>
            */}
            <img src="https://firebasestorage.googleapis.com/v0/b/autoz-8611b.appspot.com/o/team%2FautoZteam%20(1).jpg?alt=media&token=6cc37fea-4ab1-4766-8ca1-2cd8c04ec996"
              className="object-cover contrast-125 h-full mx-auto my-auto w-full  mx-auto"
              layout='fixed'
              alt=""
            ></img>

         <div className="absolute w-full  transition-all duration-500 ease-in-out bottom-0 flex flex-col items-center justify-end mx-auto  right-0 bg-black/10  group-hover:translate-y-0  h-full">
               
           <Opacity initial={0} final={1} duration={1/3} delay={0.8}>
        <div className="text-2xl tracking-wider text-center  pb-2">Our enthusiastically <br></br>driven Team</div>
        </Opacity>
            </div>
            <div className="absolute w-full  group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out top-0 mx-auto  mr- right-0 bg-black/10 translate-y-6 group-hover:translate-y-0  h-full">
              
      <div className=" my-auto h-full w-full flex flex-col items-center justify- space-y-2">
         <div className="w-full  my-auto space-y-2">

          <div className="flex h-f flex-row items-center justify-center space-x-2">
             
             <Opacity initial={0} final={1} duration={1/3} delay={1.2}>
              <Scale initial={0.5} final={1} duration={1/3} delay={1.2}>
              <Link href="/team/advisors">
              <a className="w-44 h-44 bg-gray-100 flex flex-row items-center justify-center text-gray-900 text-lg tracking-wider hover:opacity-20 ease-in-out">Advisors </a>
              </Link>              
              </Scale>
             </Opacity>

             <Opacity initial={0} final={1} duration={1/3} delay={1.2}>
              <Scale initial={0} final={1} duration={1/3} delay={1.2}>
              <Link href="/team/board">
              <a className="w-44 h-44 bg-gray-100 flex flex-row items-center justify-center text-gray-900 text-lg tracking-wider hover:opacity-20 ease-in-out">Board Members</a>
              </Link>
              </Scale>
             </Opacity>
          
          </div>

           <div className="flex flex-row bg-red400 items-center justify-center space-x-2">
          
            <Opacity initial={0} final={1} duration={1/3} delay={1.2}>
              <Scale initial={0} final={1} duration={1/3} delay={1.2}>
                <Link href="/team/core">
                    <div className="w-44 h-44 bg-gray-100 flex flex-row items-center justify-center text-gray-900 text-lg tracking-wider hover:opacity-20 transition-all duration-400 ease-in-out text-center">Core Committee Members</div>
                </Link>
              </Scale>
            </Opacity> 
            
            <Opacity initial={0} final={1} duration={1/3} delay={1.2}>
              <Scale initial={0} final={1} duration={1/3} delay={1.2}>
                <Link href="/team/alumni">
                  <a className="w-44 h-44 bg-gray-100 flex flex-row items-center justify-center text-gray-900 text-lg tracking-wider hover:opacity-20 transition-all duration-400 ease-in-out">Alumni</a>
                </Link>
              </Scale>
            </Opacity>
          
          
          </div>
         
         </div>
      </div>
            </div>
        </Opacity>
            </div>
        {/* <div className="absolute top-0 right-0 bg-gray-200">

        <Opacity initial={0} final={1} duration={1/3} delay={0.4}>
        <div className="text-xs tracking-wider bg-red-400">Whats makes us unique</div>
        </Opacity>
        <Opacity initial={0} final={1} duration={1/3} delay={0.8}>
        <div className="text-2xl tracking-wider text-center border-b-2 border-gray-100/40 pb-2">Our enthusiastically <br></br>driven Team</div>
        </Opacity>
        <div className="text-xs">
          <Opacity initial={0} final={1} duration={1/3} delay={1.1}>
          29 Active Members
          </Opacity>
        </div>
        </div> */}
      </div>
      
      {/* <div className="h-full w-auto">
         <Opacity initial={0} final={1} duration={1/3} delay={1.1}>
          <Y initial={"10px"} final={"0px"} duration={1} delay={1.1} >
            <div className="w-[1px] h-[400px] mt-32 bg-gray-50/50 my-auto"></div>
          </Y>
         </Opacity>  
        </div> */}

    </div>
  );
}

function People(){
  return(
    <div className="w-20 h-20 invert">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z"/></svg>
    </div>
  );
}