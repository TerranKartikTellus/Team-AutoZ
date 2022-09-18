import Link from "next/link";
import Opacity from "../Animate/WhenInView/Opacity";
import SocialMedia from "../common/SocialMedia";

export default function Main(){
  return(
    // <div className="h-screen pt-20 px-56 flex flex-row items-center justify-center space-x-2  mx-auto">  
    //   <div className="flex bg-red-00 w-full flex-col items-start justify-center space-y-8 mx-auto">
    //   <div><Middle></Middle></div>
    //   <div><TagLine></TagLine></div>
    //   <div><GetStarted></GetStarted></div>
    //   </div>
    //   <div className="bg-red-00 w-full">
    //     <ImageGal></ImageGal>
    //   </div>
    // </div>
    <div className="flex  flex-row items-center justify-center w-full h-full space-x bg-gray-950">
        {/* <div className=" flex flex-row items-center justify-center">
        </div> */}
        {/* <div className="w-1/2 flex flex-col items-end   justify-center h-full">
          <Left></Left>
        </div> */}
        <div className="w-full flex flex-col items-center justify-center   h-full">
          <Right></Right>
        </div>



        
          {/* <div className="text-blue-800 text-sm"> by vit vellore </div> */}
    </div>
  );
}
function Left(){
  return(
    <div className="w-full h-full flex flex-col items-end   justify-center ">
      <img src="/logo.svg" className="w-44 h-44"></img>
    </div>
  );
}
function Right(){
  return(
    <div className="w-full h-full flex flex-col items-center justify-center ">
      <div>
      <img className="w-32 h-32 invert opacity-80 mb-4" src="/svg/robot.svg"></img>  
      </div>
    <Opacity initial={0} final={1} duration={1}>
    <div className="text-5xl tracking-widest text-blue-100 w-[300px] sm:w-[500px] text-center  bg-red300 font-semibold border-b-2 border-gray-100/30 pb-3 mb-3">AutoZ</div>
    </Opacity>
    <Opacity  initial={0} final={1} delay={0.8} duration={0.5}>
    <div className="text-xl tracking-widest text-blue-100  text-center w-full bg-red300 font-normal">Research & Development</div>
    </Opacity>
    <Opacity initial={0} final={1} delay={1.1} duration={0.5}>
    <div className="text-lg tracking-widest text-blue-100/90  text-center w-full bg-red-300font-normal">&apos;Autonomous Vehicles&apos;</div>
    </Opacity>
    {/* <div className="text-lg tracking-widest text-blue-100/80  text-center w-full bg-red-300font-normal">VIT Vellore</div> */}
    
    <div className="pt-3"><SocialMedia></SocialMedia></div>
    
    
    </div>
  );
}
function ImageGal(){
  return(
    <div className="bg-red-40 pl-10">
      {/* <img src="/drone1.png" className="shadow-xl shadow-cyan-800/70 w-52 h-52 object-cover animate-pulse delay-300"></img>  
        <img src="/rover2.jpeg" className="shadow-xl shadow-cyan-800/70 w-52 h-52 object-cover animate-pulse delay-75"></img>  
        <img src="/rover1.jpeg" className="shadow-xl shadow-cyan-800/70 w-52 h-52 animate-pulse object-cover"></img>
    */}

        {/* <img src="/image.webp" className="shadow-yan-800/70 w-52 h-52 ane-pulse object-cover"></img> */}
   
   
        {/* <img src="/circle.webp" className="scale-50 absolute  translate-y-10 -translate-x-20 -rotate-45 shadow-yan-800/70 w-52 h-52 ane-pulse object-cover"></img> */}
   
   
        {/* <img src="/circle.webp" className=" absolute top-0 left-0 w-96 h-96 animate-spin-slow ane-pulse object-cover"></img> */}
   
        <img src="/circle.webp" className="opacity-80  w-96 h-96 animate-spin-slow ane-pulse object-cover"></img>
   
        {/* <img src="/image.webp" className="scale-50 translate-y-10 -translate-x-20 -rotate-45 shadow-yan-800/70 w-52 h-52 ane-pulse object-cover"></img> */}
   
   
    </div>
  );
}
function News(){
  return(
    <div>
      <Link href="/">
        <a className="bg-gray-100 shadow drop-shadow-lg shadow-gray-200/50 text-gray-900/70 text-base py-1 px-3 rounded font-thin font-sans">
          NEWS  Announcing Vikram
        </a>
      </Link>
    </div>
  );
}
function Middle(){
  return(
    <div className="text-5xl font-medium text-left w-[650px] tracking-wider ">
      Autonomous vehicles and Automated systems
            {/* Transcribe and understand audio with a single AI-powered API */}
    </div>
  );
}
function TagLine(){
  return(
    <div className="w-[650px] text-left opacity-90 ">
      
        Team AutoZ is a research & development team driven by undergraduate B.Tech students of <strong className="font-bold font-sans">VIT Vellore</strong>. The primary aim of our team is to <strong className=" font-sans">design and develop autonomous ground vehicles</strong> and to use our innovation for practical applications of the bot to solve real-world issues, and work with companies that are keen on trying to bring automation into the market.
       
    </div>
  );
}
function GetStarted(){
  return(
    <div className="">
      <Link href="/">
        <a className="bg-[#6438cf] hover:bg-opacity-90 text-gray-100 py-1 px-2 ">
          Get In Touch
        </a>
      </Link>
    </div>
  );
}
