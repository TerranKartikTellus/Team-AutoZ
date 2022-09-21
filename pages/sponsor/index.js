import HeadTag from "../../components/common/head";
import Top from "../../components/common/top";
import  X from "/components/Animate/WhenInView/Translate/x"
import  Y from "/components/Animate/WhenInView/Translate/y"
import Opacity from "/components/Animate/WhenInView/Opacity"
import {motion} from "framer-motion"
import Link from "next/link";
const role = [
    {
      title: "Financial Assistance",
      ico: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 7h-19v11h-1v-12h20v1zm-2-2h-19v11h-1v-12h20v1zm-6 6c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3zm.15 4.484v.315h-.3v-.299c-.311-.005-.632-.079-.898-.217l.135-.493c.287.11.669.229.968.162.345-.078.415-.433.034-.604-.279-.129-1.133-.242-1.133-.973 0-.409.312-.775.895-.855v-.319h.301v.305c.217.006.461.043.732.126l-.108.493c-.23-.08-.485-.154-.733-.139-.446.026-.486.413-.174.575.514.242 1.182.42 1.182 1.063 0 .516-.404.791-.901.86zm-10.15-7.484v12h20v-12h-20zm18 8.018c-.959.42-1.395 1.022-1.814 1.982h-12.372c-.419-.959-.855-1.562-1.814-1.982v-4.036c.959-.42 1.395-1.022 1.814-1.982h12.371c.42.959.855 1.562 1.814 1.982v4.036z"/></svg>`,
      desc: "Finance is the lifeline of any project. We welcome sponsorship of any amount which will help this initiative to be successfully completed."
    },
    {
      title: "Technical Guidance",
      desc: "The success of this project is dependent on the technical know-how which is often not available in academic circles. Your contribution on this front will be invaluable."
    },
    {
      title: "Parts Sponsorship",
      desc: "The completion of our autonomous bot and upcoming project is dependent on the availability of special parts that are rarely available in the open market."
    },
    {
      title: "Industrial Contacts",
      desc: "Sometimes, getting in touch with the right people is more important for taking the project ahead."
    },
  ]
export default function Sponsor(){
  return(
    <main className="bg-gra rounded-sm text-gray-100  bg-gray-900/5  snap-y snap-mandatory h-screen overflow-x-hidden  select-none">
         <HeadTag title="Sponsor | AutoZ" cardTitle="Sponsor | AutoZ" description="Sponsor | AutoZ" image="" ></HeadTag>
         <Top main={"Sponsor's"} sub="" mini={""}></Top>

         <div className="block md:hidden my-auto h-full snap-y snap-mandatory ">
           <div className="snap-center h-full scale-105"><Part2></Part2></div>
           <motion.div layoutId='layout2' className="snap-center h-full"><Part1></Part1></motion.div>
         </div>

         <div className="hidden md:block my-auto h-full ">
           <div className=" h-full"><Part1></Part1></div>
           
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
    <div className="w-full flex flex-col items-center md:flex-col justify-center h-full bg-red400 px-10">
        <div className="flex flex-col items-center md:w-1/2 justify-center space-y-3">
          {/* <HandShake></HandShake> */}
           
      <div className="hidden fixed bottom-10 mx-auto  g-red-300 md:block md:w-full opacity-75">
         
        <div className="flex  mx-auto left-auto right-auto  flex-row items-center justify-evenly w-5/6 mx-auto bg-gray-50">
         <div className="text-center text-black text-xs "><Link href="https://www.ansys.com/en-in"><a><img className=" contrast-150 w-full h-16  object-cover" src="/img/sponsors/ansys.png"></img></a></Link></div>
         <div className="text-center text-black text-xs "><Link href="https://www.pcbpower.com/"><a><img className=" contrast-150  w-full h-16 object-cover" src="/img/sponsors/pcb.png"></img></a></Link></div>
         <div  className="text-center text-black text-xs "><Link href="https://www.solidworks.com/"><a><img className=" contrast-150 w-full h-16  object-cover" src="/img/sponsors/port 3.png"></img></a></Link></div>
         <div  className="text-center text-black text-xs "><Link href="https://www.xsens.com/"><a><img className=" contrast-150 w-full h-16 pb object-cover" src="/img/sponsors/port1.png"></img></a></Link></div>
         <div  className="text-center text-black text-xs "><Link href="https://www.tdk.com/en/index.html"><a><img className=" contrast-150 w-full h-16  object-cover" src="/img/sponsors/TDK.png"></img></a></Link> </div>
         <div  className="text-center text-black text-xs mt-5 mb-2 "><Link href="https://www.mathworks.com/"><a><img className=" contrast-150 w-full h-16 r" src="/img/sponsors/matlab.svg"></img></a></Link></div>
        </div>
                    <div className="mx-auto bg-gr500 text-center flex flex-row items-center justify-center text-gray-900 w-5/6 bg-gray-50">              View Sponsorship Brochure  <Link  href="https://firebasestorage.googleapis.com/v0/b/autoz-8611b.appspot.com/o/Team%20AutoZ%20Sponsorship%20Brochure%202022-23.pdf?alt=media&token=8c7cd748-06b8-441e-b8a5-47183644ff9e"><a target="_blank" className="underline">here</a></Link></div>

    </div>
   
      
    <Opacity initial={0} final={1} duration={1/3} delay={0.5}>
           <div className="h-full flex flex-col items-center justify-center">

           <div className="opacity- text-2xl tracking-wider bg-red500 mt-20  text-center y-100/40 pb-2 bged-400 md:border-b-2 md:border-gray-100/70 mb-3">
            <div className="block md:hidden"><p>Role of Sponsorships </p>in our success </div><div className="hidden md:block">Role of Sponsorships in our success </div>
            </div>
           <div className="h-[460px] ">
            {role.map(i=>(
              <div key={i} className=" my-1 transition-all duration-500 group ease-in-out">
                <div className="text-xl text-center tracking-wider opacity-90 bg-red400 w">{i.title}</div>
                <div className="text-center opacity-70">{i.desc}</div>
              </div>
            ))}
           </div>
{/* <div className="text-base  tracking-widest text-blue-100/80 text md:text-left mx-auto md:mx-0 w-[300px] text-center bg-red300 font-normal "> 
    
</div> */}
            </div>
        </Opacity>

       
   

      
        

        {/* <div className="text-center text-lg font-sans tracking-wider text-black">Since 2016</div> */}
       </div>
     </div>
      
  );
}

function Part2(){
  
  return(
    <div className="  flex flex-col items-center justify-center h-full  bg-red400 px-10 md:max-w-md">
       <div className="text-xl tracking-widest text-blue-100/80 text md:text-left mx-auto md:mx-0 w-[300px] text-center bg-red300 font-normal mb-5">We Greatly appreciate your generous contributions </div>
       <div className="bg-gray-100/90 rounded p-10 my- ">

       <div className="flex flex-row items-center w-full justify-center">
        <div className="text-center text-black text-xs w-1/2"><img className="w-full  object-cover" src="/img/sponsors/ansys.png"></img></div>
        <div className="text-center text-black text-xs w-1/2"><img className="  object-cover" src="/img/sponsors/pcb.png"></img></div>
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
<div className="text-base mt-5 tracking-widest text-blue-100/80 text md:text-left mx-auto md:mx-0 w-[300px] text-center bg-red300 font-normal "> 
    View Sponsorship Brochure <Link href="https://firebasestorage.googleapis.com/v0/b/autoz-8611b.appspot.com/o/Team%20AutoZ%20Sponsorship%20Brochure%202022-23.pdf?alt=media&token=8c7cd748-06b8-441e-b8a5-47183644ff9e"><a target="_blank" className="underline">here</a></Link>
</div>
       
        
    </div>
  );
}