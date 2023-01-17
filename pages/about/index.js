import HeadTag from "../../components/common/head";
import Top from "../../components/common/top";
import  X from "/components/Animate/WhenInView/Translate/x"
import  Y from "/components/Animate/WhenInView/Translate/y"
import Opacity from "/components/Animate/WhenInView/Opacity"
import Scale from "/components/Animate/WhenInView/Scale"
import { projects } from "../../lib/data/projects";
import Link from "next/link";
export default function About(){
  return(
    <main className="bg-gra  rounded-sm text-gray-100  md:bg-gray-900/5   snap-y snap-mandatory h-screen overflow-x-hidden  select-none">
         <HeadTag title="About | AutoZ" cardTitle="LATEST | AutoZ" description="LATEST | AutoZ" image="" ></HeadTag>
     <Top  main={"About"} sub={"Automating Vehicles A to Z "} mini={""}></Top>
     <div className="hidden md:block my-auto h-full snap-y snap-mandatory ">
       <div className="h-full flex flex-col item-center justify-center">
        <Part1></Part1>
        <div className="text-xl mb-1 tracking-wider w-full text-center opacity-80">
        Our Mission
        </div>
        <div className="text-base tracking-wide w-full text-center opacity-80">
          Striving to make a change for the betterment of humanity<br></br> through the extensive use of technology to mimic human intelligence.

        </div>
       </div>
       
       {/* <div className="snap-center h-full"><Part2></Part2></div> */}
     </div>

     <div className="block md:hidden my-auto h-full snnap-mandatory ">
       <div className=""><PartSM1></PartSM1></div>
       {/* <div className=""><PartSM2></PartSM2></div> */}
       {/* <div className="snap-center h-full"><PartSM3></PartSM3></div>
       <div className="snap-center h-full"><PartSM4></PartSM4></div> */}
     </div>
    </main>
  );
}

function ProjectList({projects}){
  return(
    <div className="bg-green500 flex flex-center items-center justify-center  w-full bordert-2 border-gray-100/70 pt-5  text-gry-700 mt-3 text-xs font-sans text- bg-red400   trackin">
      <Opacity initial={0} final={1} duration={1/3} delay={1}>
    
        { projects.map(i=>( 
          
          <Link key={i} href="/projects"><a>
            
            <p  className="inline-block  my- hover:bg-gray-100/20 tracking  text-gray-100 text-base bg-gra100/10 rounded-sm mr-5 p-1">{i.title} </p> 
          </a></Link>
        
        )) }
        <div className="mb-3 text-base">Our most ambitious projects</div>
      </Opacity>
     </div> 
  );
}
      

function PartSM1(){
  return(
    <div className="relative w-full h-screen flex flex-col item-center justify-center ">
        <img src="/autozlogo.png" className="h-[70px] opacity-90 object-cover w-5/6 mx-auto mb-10"></img>
        {/* <div className="text-3xl mb-3 pb-5 tracking-wider opacity-80 border-b-2 border-gray-100/40 text-gray-50  text-center  pb-2">Automating <p>Vehicles   A to Z | AutoZ</p></div> */}
        <div className="tracking-wide text-xl px-3 opacity-75 text-right">   
        We work on developing <br></br>autonomous vehicles and automated systems.<br></br> Our team comprises a diverse set of people having prior experience in industrial projects. Striving to make a change for the betterment of humanity through the extensive use of technology to mimic human intelligence.
        <div><ProjectList projects={projects}></ProjectList></div>

        </div>
        
        {/* <div className="text-xl text-center px-10">    </div> */}
    </div>
  );
}
function PartSM2(){
  return(
    <div className="bg-red-0 h-full flex flex-col md:flex-row pt- my-auto  ">
      <div className="w-full  my-auto flex flex-col items-center justify-center">
          <div className="h-full w-full text-lg px-10 text-ellipsis my-auto bordel-2 text-gray-100/70 pt-20 font-sans flex flex-col items-center justify-center ">
            <strong>Team AutoZ</strong>  is a research & development team driven by undergraduate students of VIT Vellore. Since our infancy we are working on developing autonomous vehicles and automated systems. Our team comprises a diverse set of people having prior experience in industrial projects. 
            Our Mission is To design and develop products in solving real world use cases, and to work with companies that are keen at trying to bring automation into the market.
          </div>

          <div className="w-full mx-auto bged-400 "><ProjectList projects={projects}></ProjectList></div>
      </div>
    </div>
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




function Part1(){
  return(
    <div className="bg-red-4 h flex flex-col md:flex-row  ">
      <div className="w-full bg-red300 pt-10 pr-4 md:w-1/2 opacity-80 flex flex-col items-end bg-red400 justify-center space-y-2 my-auto  h-full">
         <Opacity initial={0} final={1} duration={1/3} delay={1}>

        {/* <Roboat></Roboat>
         */}
         <img src="/autozlogo.png" className="h-[70px] mb-10"></img>
         </Opacity>
        <Opacity initial={0} final={1} duration={1/3} delay={1.1}>

        {/* <div className="text-xs tracking-wider">Our Eye&apos;s on</div> */}
        </Opacity>
        <Opacity initial={0} final={1} duration={1/3} delay={1.2}>

        <div className="text-2xl tracking-wider border-b-2 border-gray-100/40 text-gray-50  text-right  pb-2">Automating <p>Vehicles   A to Z | AutoZ</p></div>
        </Opacity>
        <Opacity initial={0} final={1} duration={1/3} delay={1.3}>

        {/* <div className="text-lg text-center px-44 font-medium">Our Vision Since 2016  </div>
        <div className="text-lg text-center px-56">
                  
Striving to make a change for the betterment of humanity through the extensive use of technology to mimic human intelligence.

        </div> */}


        </Opacity>
      </div>
        {/* <div className="h-full w-auto">
         <Opacity initial={0} final={1} duration={1/3} delay={1.3}>
          <Y initial={"10px"} final={"0px"} duration={1/2} delay={1.3} >
            <div className="w-[1px] h-[400px] mt-32 bg-gray-50/50 my-auto"></div>
          </Y>
         </Opacity>  
        </div> */}

      <div className="w-1/2 pl-4 bg-red500 h-5/6 my-auto opacit">
          {/* <Opacity className="w-full h-full" initial={0} final={1} duration={1/3} delay={2.3}> */}
          <div className="h-full w-1/2  text-xl px- text-left m p  my-auto bordel-2 text-gray-100/70 py-20 font-sans flex flex-col items-start  justify-center ">
           <Opacity initial={0} final={1} duration={1/3} delay={1.4}>
            We work on developing <br></br>autonomous vehicles and automated systems. Our team comprises a diverse set of people having prior experience in industrial projects. 
<br></br>

          </Opacity>
            {/* AutoZ <br></br> is a research & development team<br></br> driven by undergraduate students of VIT Vellore.<br></br> Since our infancy we are working on developing autonomous vehicles and<br></br> automated systems. Our team comprises a diverse set of people having prior experience in industrial projects.  */}
            <div><ProjectList projects={projects}></ProjectList></div>
          </div>
          {/* </Opacity> */}
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
        <Opacity initial={0} final={1} duration={1/3} delay={0.1}>
        <div className="text-xs tracking-wider">Whats makes us unique</div>
        </Opacity>
        <Opacity initial={0} final={1} duration={1/3} delay={0.2}>
        <div className="text-2xl tracking-wider text-center border-b-2 border-gray-100/40 pb-2">Our enthusiastically <br></br>driven Team</div>
        </Opacity>
        <div className="text-xs">
          <Opacity initial={0} final={1} duration={1/3} delay={0.3}>
          29 Active Members
          </Opacity>
        </div>
      </div>
      
      <div className="h-full w-auto">
         <Opacity initial={0} final={1} duration={1/3} delay={2.3}>
          <Y initial={"10px"} final={"0px"} duration={1} delay={2.3} >
            <div className="w-[1px] h-[400px] mt-32 bg-gray-50/50 my-auto"></div>
          </Y>
         </Opacity>  
        </div>


      <div className="w-1/2 flex flex-col items-center justify-center space-y-2">
          <div className="flex flex-row items-center justify-center space-x-2">
             
             <Opacity initial={0} final={1} duration={1/3} delay={2}>
              <Scale initial={0.5} final={1} duration={1/3} delay={2}>
              <Link href="/team/advisors">
              <a className="w-44 h-44 bg-gray-100/70 flex flex-row items-center justify-center text-gray-900 text-lg tracking-wider hover:opacity-20 ease-in-out">Advisors </a>
              </Link>              
              </Scale>
             </Opacity>

             <Opacity initial={0} final={1} duration={1/3} delay={2.2}>
              <Scale initial={0} final={1} duration={1/3} delay={2.2}>
              <Link href="/team/board">
              <a className="w-44 h-44 bg-gray-100/70 flex flex-row items-center justify-center text-gray-900 text-lg tracking-wider hover:opacity-20 ease-in-out">Board Members</a>
              </Link>
              </Scale>
             </Opacity>
          
          </div>

           <div className="flex flex-row items-center justify-center space-x-2">
          
            <Opacity initial={0} final={1} duration={1/3} delay={2.1}>
              <Scale initial={0} final={1} duration={1/3} delay={2.1}>
                <Link href="/team/core">
                    <div className="w-44 h-44 bg-gray-100/70 flex flex-row items-center justify-center text-gray-900 text-lg tracking-wider hover:opacity-20 transition-all duration-400 ease-in-out text-center">Core Committee Members</div>
                </Link>
              </Scale>
            </Opacity> 
            
            <Opacity initial={0} final={1} duration={1/3} delay={2.2}>
              <Scale initial={0} final={1} duration={1/3} delay={2.2}>
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
function Roboat(){
  return(
    <div className="w-32 h-32 invert">
       <svg className="w-full h-full"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.025 16c2.196.014 3.975 1.801 3.975 4 0 2.208-1.793 4-4 4h-16c-2.208 0-4-1.792-4-4s1.792-4 4-4h16.025zm-15.525 2.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm10 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm10 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm.5-3.5h-16v-15h6v6h4v-6h6v15zm-2-4h-3.895v2h3.895v-2z"/></svg>
    </div>
  );
}
