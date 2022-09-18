import Link from "next/link";
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
       <div className="snap-center h-full"><PartSM4></PartSM4></div>
     </div>
    </main>
  );
}

function PartSM3(){
  return(
    <div className="bg-red-4 h-full flex flex-row">
      <div className="w-full opacity-60 flex flex-col items-center justify-center space-y-2 my-auto  h-full">
        <People></People>
        <div className="text-xs tracking-wider">Whats makes us unique</div>
        <div className="text-2xl tracking-wider text-center border-b-2 border-gray-100/40 pb-2">Our enthusiastically <br></br>driven Team</div>
        <div className="text-xs">
          29 Active Members
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
      <div className="w-1/2 opacity-60 flex flex-col items-center justify-center space-y-2 my-auto  h-full">
        <Opacity initial={0} final={1} duration={1/3} delay={0}>
           <People></People>
        </Opacity>
        <Opacity initial={0} final={1} duration={1/3} delay={0.4}>
        <div className="text-xs tracking-wider">Whats makes us unique</div>
        </Opacity>
        <Opacity initial={0} final={1} duration={1/3} delay={0.8}>
        <div className="text-2xl tracking-wider text-center border-b-2 border-gray-100/40 pb-2">Our enthusiastically <br></br>driven Team</div>
        </Opacity>
        <div className="text-xs">
          <Opacity initial={0} final={1} duration={1/3} delay={1.1}>
          29 Active Members
          </Opacity>
        </div>
      </div>
      
      <div className="h-full w-auto">
         <Opacity initial={0} final={1} duration={1/3} delay={1.1}>
          <Y initial={"10px"} final={"0px"} duration={1} delay={1.1} >
            <div className="w-[1px] h-[400px] mt-32 bg-gray-50/50 my-auto"></div>
          </Y>
         </Opacity>  
        </div>

      <div className="w-1/2 flex flex-col items-center justify-center space-y-2">
          <div className="flex flex-row items-center justify-center space-x-2">
             
             <Opacity initial={0} final={1} duration={1/3} delay={1.2}>
              <Scale initial={0.5} final={1} duration={1/3} delay={1.2}>
              <Link href="/team/advisors">
              <a className="w-44 h-44 bg-gray-100/70 flex flex-row items-center justify-center text-gray-900 text-lg tracking-wider hover:opacity-20 ease-in-out">Advisors </a>
              </Link>              
              </Scale>
             </Opacity>

             <Opacity initial={0} final={1} duration={1/3} delay={1.2}>
              <Scale initial={0} final={1} duration={1/3} delay={1.2}>
              <Link href="/team/board">
              <a className="w-44 h-44 bg-gray-100/70 flex flex-row items-center justify-center text-gray-900 text-lg tracking-wider hover:opacity-20 ease-in-out">Board Members</a>
              </Link>
              </Scale>
             </Opacity>
          
          </div>

           <div className="flex flex-row items-center justify-center space-x-2">
          
            <Opacity initial={0} final={1} duration={1/3} delay={1.2}>
              <Scale initial={0} final={1} duration={1/3} delay={1.2}>
                <Link href="/team/core">
                    <div className="w-44 h-44 bg-gray-100/70 flex flex-row items-center justify-center text-gray-900 text-lg tracking-wider hover:opacity-20 transition-all duration-400 ease-in-out text-center">Core Committee Members</div>
                </Link>
              </Scale>
            </Opacity> 
            
            <Opacity initial={0} final={1} duration={1/3} delay={1.2}>
              <Scale initial={0} final={1} duration={1/3} delay={1.2}>
                <Link href="/team/alumni">
                  <a className="w-44 h-44 bg-gray-100/70 flex flex-row items-center justify-center text-gray-900 text-lg tracking-wider hover:opacity-20 transition-all duration-400 ease-in-out">Alumni</a>
                </Link>
              </Scale>
            </Opacity>
          
          </div>
      </div>
    </div>
  );
}

function People(){
  return(
    <div className="w-72 h-72 invert">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z"/></svg>
    </div>
  );
}