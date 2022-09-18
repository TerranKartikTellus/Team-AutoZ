import HeadTag from "../../components/common/head";
import Top from "../../components/common/top";
import  X from "/components/Animate/WhenInView/Translate/x"
import  Y from "/components/Animate/WhenInView/Translate/y"
import Opacity from "/components/Animate/WhenInView/Opacity"
import {motion} from "framer-motion"
import Link from "next/link";

export default function Sponsor(){
  return(
    <main className="bg-gra rounded-sm text-gray-100  bg-gray-900/5  snap-y snap-mandatory h-screen overflow-x-hidden  select-none">
         <HeadTag title="Sponsor | AutoZ" cardTitle="Sponsor | AutoZ" description="Sponsor | AutoZ" image="" ></HeadTag>
         <Top main={"Sponsor"} sub="AutoZ" mini={""}></Top>

         <div className="block md:hidden my-auto h-full snap-y snap-mandatory ">
           <motion.div layoutId='layout2' className="snap-center h-full"><Part1></Part1></motion.div>
           <div className="snap-center h-full"><Part2></Part2></div>
         </div>

         <div className="hidden md:block my-auto h-full snap-y snap-mandatory ">
           <div className="snap-center h-full"><Part1></Part1></div>
           
         </div>
         
    </main>
  );
}

function HandShake(){
  return(
    <div className="w-32 h-32 invert opacity-60">
       <Opacity initial={0} final={1} duration={1/3} delay={1}>

        <svg className="w-full h-full " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.062 13.875l-1.625-5.979 3.367-1.092c-1.939-4.022-6.04-6.804-10.804-6.804-4.779 0-8.894 2.801-10.824 6.845l3.386 1.051-1.625 5.979-2.937-.767c.56 6.108 5.747 10.892 12 10.892s11.439-4.784 12-10.892l-2.938.767zm-14.826 1.845c-.314-.231-.382-.673-.151-.987l.806-1.088c.23-.313.67-.383.986-.151.316.231.383.672.152.987l-.807 1.087c-.217.298-.687.37-.986.152zm1.424 1.04c-.313-.232-.387-.664-.156-.978l.812-1.096c.229-.313.67-.381.984-.151.315.23.385.673.152.986l-.812 1.097c-.212.292-.672.366-.98.142zm1.426 1.04c-.313-.231-.383-.673-.151-.988l.805-1.086c.233-.315.674-.382.987-.152.314.231.383.673.151.987l-.805 1.088c-.218.296-.686.372-.987.151zm3.217-.201l-.807 1.092c-.215.294-.682.374-.986.151-.314-.231-.383-.672-.152-.986l.809-1.092c.229-.311.67-.382.986-.149.314.228.382.671.15.984zm.743 1.401c-.142 0-.296-.033-.451-.113.235-.318.579-.742.707-1.044l.159.159c.487.487.127.998-.415.998zm4.922-2.979c-.275.276-.723.276-.998 0l-2.025-2.025c-.065-.067-.174-.069-.243-.005-.075.067-.078.184-.006.255l1.875 1.876c.276.276.276.722 0 .998-.275.276-.723.276-.998 0l-1.523-1.524c-.068-.068-.178-.069-.247-.002-.072.069-.072.183-.003.252l1.264 1.265c.276.276.276.722 0 .999-.274.275-.722.276-.997 0l-.654-.654c.17-1.042-.595-1.891-1.53-1.972-.248-.591-.803-.985-1.422-1.039-.238-.571-.784-.984-1.424-1.04-.506-1.208-2.158-1.432-2.95-.351l-.44.595c-.449-.169-.934-.31-1.489-.441l1.273-4.685c1.899-.017 3.396-1.817 5.149-.709-.574.71-1.045 1.277-1.755 1.691-.567.332-.833.981-.66 1.616.216.797 1.024 1.354 1.968 1.354 1.248 0 2.54-1.025 3.521-1.761.578.577 3.831 3.775 4.315 4.31.274.274.274.72-.001.997zm.495-1.954s-3.125-3.084-4.053-4.013c-.496-.494-.838-.562-1.41-.101-.728.586-1.619 1.182-2.277 1.413-1.291.452-1.996-.647-1.396-.999 1.22-.711 1.814-1.737 2.839-2.898.284-.322.623-.441.969-.441.376 0 .761.14 1.095.312 1.517.784 2.897 1.319 4.351 1.212l1.296 4.768c-.464.208-.931.45-1.414.747z"/></svg>
       </Opacity>
    
    </div>
  );
}
function Part1(){
  return(
    <div className="w-full flex flex-col items-center md:flex-row justify-center h-full bg-red400 px-10">
        <div className="flex flex-col items-center md:w-1/2 justify-center space-y-3">
          <HandShake></HandShake>
           <Opacity initial={0} final={1} duration={1/3} delay={1}>
           <div className="opacity-70 text-xs tracking-wider">Our Support</div>
           </Opacity>
           <Opacity initial={0} final={1} duration={1/3} delay={1.1}>
           <div className="opacity-70 text-2xl tracking-wider text-center border-b-2 border-gray-100/40 pb-2">Greatly appreciate <p> generous contributions </p> </div>
           </Opacity>
           <Opacity initial={0} final={1} duration={1/3} delay={1.1}>
           <div className="opacity-70 text-xs">Since 2016</div>
           </Opacity>
      
          {/* <div  className="text-center opacity-70 md:w-8/12">Thank you so much for your generous contribution throughout the years. We greatly appreciate your support to our organization</div> */}
        </div>
    <Opacity initial={0} final={1} duration={1/3} delay={1.3}>  
    <Y initial={'-60px'} final={'0px'} duration={1/3} delay={1.3}>

      <div className="w-[1px] h-[400px] bg-gray-50/50 my-auto hidden md:block"></div>
    </Y>
    </Opacity>  
      <div className="hidden mx-auto  g-red-300 md:block md:w-1/2 opacity-75">
          <div className="  flex flex-col items-center justify-center h-full  bg-red400 px-10 mx-auto md:max-w-md">
       <Opacity initial={0} final={1} duration={1/3} delay={1.3}>
        <X initial={'60px'} final={'0px'} duration={1/3} delay={2}>
       <div className="bg-gray-100/90 rounded p-10 my-auto ">
        <Opacity initial={0} final={1} duration={1/3} delay={2}>
        <div className="flex flex-row items-center justify-center">
         <div className="text-center text-black text-xs "><Link href="https://www.ansys.com/en-in"><a><img className=" contrast-150   object-cover" src="/img/sponsors/ansys.png"></img></a></Link></div>
         <div className="text-center text-black text-xs "><Link href="https://www.pcbpower.com/"><a><img className=" contrast-150   object-cover" src="/img/sponsors/pcb.png"></img></a></Link></div>
        </div> 
        </Opacity>

        <Opacity initial={0} final={1} duration={1/3} delay={3}>
        <div className="flex flex-row items-center justify-center">
         <div  className="text-center text-black text-xs "><Link href="https://www.solidworks.com/"><a><img className=" contrast-150   object-cover" src="/img/sponsors/port 3.png"></img></a></Link></div>
         <div  className="text-center text-black text-xs "><Link href="https://www.xsens.com/"><a><img className=" contrast-150  pb object-cover" src="/img/sponsors/port1.png"></img></a></Link></div>
        </div> 
        </Opacity>

        <Opacity initial={0} final={1} duration={1/3} delay={3}>

        <div className="flex flex-row items-center justify-center">
         <div  className="text-center text-black text-xs "><Link href="https://www.tdk.com/en/index.html"><a><img className=" contrast-150   object-cover" src="/img/sponsors/TDK.png"></img></a></Link> </div>
        </div> 
        </Opacity>
         <Opacity initial={0} final={1} duration={1/3} delay={3}>
         <div  className="text-center text-black text-xs mt-5 mb-2 "><Link href="https://www.mathworks.com/"><a><img className=" contrast-150 w-full h-16  r" src="/img/sponsors/matlab.svg"></img></a></Link></div>
         </Opacity>
        

        {/* <div className="text-center text-lg font-sans tracking-wider text-black">Since 2016</div> */}
       </div>
        </X>
       </Opacity>
    </div>
        </div>
    </div>
  );
}

function Part2(){
  return(
    <div className="  flex flex-col items-center justify-center h-full  bg-red400 px-10 md:max-w-md">
       <div className="bg-gray-100/90 rounded p-10 my-auto ">

       <div className="flex flex-row items-center justify-center">
        <div className="text-center text-black text-xs "><img className="  object-cover" src="/img/sponsors/ansys.png"></img></div>
        <div className="text-center text-black text-xs "><img className="  object-cover" src="/img/sponsors/pcb.png"></img></div>
       </div> 
       <div className="flex flex-row items-center justify-center">
        <div  className="text-center text-black text-xs "><img className="  object-cover" src="/img/sponsors/port 3.png"></img></div>
        <div  className="text-center text-black text-xs "><img className=" pb object-cover" src="/img/sponsors/port1.png"></img></div>
       </div> 
       <div className="flex flex-row items-center justify-center">
        <div  className="text-center text-black text-xs "><img className="  object-cover" src="/img/sponsors/TDK.png"></img> </div>
       </div> 
        <div  className="text-center text-black text-xs "><img className="w-full h-16  r" src="/img/sponsors/matlab.svg"></img></div>
        

        {/* <div className="text-center text-lg font-sans tracking-wider text-black">Since 2016</div> */}
       </div>
    </div>
  );
}