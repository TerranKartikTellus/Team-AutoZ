import { useState } from "react";
import HeadTag from "../../components/common/head";
import Top from "../../components/common/top";
import { galary } from "../../lib/data/galary";

export default function Gallery1(){
  
  return(
    <main className="bg-gra rounded-sm text-gray-100  bg-gray900   snap-y snap-mandatory h-screen overflow-x-hidden  select-none">
      <HeadTag title="Gallery | AutoZ" cardTitle="Gallery | AutoZ" description="Gallery | AutoZ" image="" ></HeadTag>
      <Top main="Gallery" sub="AutoZ" mini={""}></Top>
      <div className="flex shrink overflow-y-auto pt-20">
      {
        galary && <div className="pb-[150px]">  
          {galary.map((i,index)=>(
            <div className="" key={index}>
              { i.length>=3 && <Show  arr={i}></Show>}
            </div>
          ))}
        </div>
      }
      {/* <Show arr={galary}></Show> */}
      </div>
      
    </main>
  );
}
function Show({arr}){
 const [showImage,setViewImage]  =  useState(false);
 const [image,setImage]  =  useState();
 console.log(arr);
  return(
    <section className="overflow-hidden text-gray-700 w-10/12  mt- mt-5 bg-green200   mx-auto">
        
        {showImage && <div className="fixed top-0 left-auto right-auto w-5/6 h-10/12">
          <div className="z-50 relative">
            <button className="absolute -top-5 -right-5" onClick={()=>{setViewImage(false)}}><svg className="w-7 h-7 invert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/></svg></button>
            {image}</div>
          </div>}
        <section className="overflow-hidden z-0 text-gray-700 w-full ">
          <div className="container px py2 z-0 mx-auto lg4 w-full lg:px-32">
            <div className="flex flex-col z-0 md:flex-row  -m-1 md:-m-2">
              <div className="flex flex-wrap z-0  md:w-1/2">
                
                {
                  arr[0]!=null && <div className="z-0 w-1/2 p-1 md:p-2 relative group">
                  {/* <div className="w-full text-white flex flex-col items-center justify-center z-50 h-[160px]   absolute rounded-lg top-0 left-0 opacity-0 group-hover:opacity-90 translate-x-6 group-hover:translate-x-0 duration-300 ease-in-out transition-all">
                    <div className="w-full text-center  text-lg">Head</div>
                    <div className="w-full text-center  text-base">About</div>
                    <div className="w-full text-center  text-sm">More</div>
                  </div> */}
                  <img  onClick={()=>{setViewImage(true); setImage(<FullScreen link={arr[0].img}></FullScreen>) }}  alt="gallery" className=" block object-cover object-center w-full h-full rounded-lg h-[160px]  grays   "
                    src={arr[0].img} />
                </div>
                }
                {
                  arr[1]!=null && <div className="z-0 w-1/2 p-1 md:p-2 relative group">
                  {/* <div className="w-full text-white flex flex-col items-center justify-center z-50 h-[160px]   absolute rounded-lg top-0 left-0 opacity-0 group-hover:opacity-90 translate-x-6 group-hover:translate-x-0 duration-300 ease-in-out transition-all">
                    <div className="w-full text-center  text-lg">Head</div>
                    <div className="w-full text-center  text-base">About</div>
                    <div className="w-full text-center  text-sm">More</div>
                  </div> */}
                  <img  onClick={()=>{setViewImage(true); setImage(<FullScreen link={arr[1].img}></FullScreen>) }}  alt="gallery" className="block object-cover object-center w-full h-full rounded-lg h-[160px]  graysca  "
                    src={arr[1].img} />
                </div>
                }
                {
                  arr[2]!=null && <div className="w-full p-1 md:p-2  relative group ">
                  <div className="w-full text-white flex flex-col items-center justify-center z-50 h-[334px]   absolute rounded-lg top-0 left-0 opacity-0 group-hover:opacity-90 translate-x-6 group-hover:translate-x-0 duration-300 ease-in-out transition-all">
                    <div className="w-full text-center  text-lg">Head</div>
                    <div className="w-full text-center  text-base">About</div>
                    <div className="w-full text-center  text-sm">More</div>
                  </div>
                  <img  onClick={()=>{setViewImage(true); setImage(<FullScreen link={arr[2].img}></FullScreen>) }}  alt="gallery" className="block object-cover object-center w-full h-full rounded-lg h-[334px]  graysca   "
                   src={arr[2].img} />
                </div>}
              </div>

              <div className="flex flex-wrap md:w-1/2 group">
                {
                  arr[3]!=null && <div className="w-full p-1 md:p-2  relative group ">
                  <div className="w-full text-white flex flex-col items-center justify-center z-50 h-[334px]   absolute rounded-lg top-0 left-0 opacity-0 group-hover:opacity-90 translate-x-6 group-hover:translate-x-0 duration-300 ease-in-out transition-all">
                    <div className="w-full text-center  text-lg">Head</div>
                    <div className="w-full text-center  text-base">About</div>
                    <div className="w-full text-center  text-sm">More</div>
                  </div>
                  <img  onClick={()=>{setViewImage(true); setImage(<FullScreen link={arr[3].img}></FullScreen>) }}  alt="gallery" className="  graysce  block object-cover object-center w-full h-full rounded-lg h-[334px]"
                   src={arr[3].img} />
                </div>}
                {arr[4]!=null && <div className="w-1/2 p-1 md:p-2 group-hover:grayscale-0   relative group ">
                  {/* <div className="w-full text-white flex flex-col items-center justify-center z-50 h-[160px]   absolute rounded-lg top-0 left-0 opacity-0 group-hover:opacity-90 translate-x-6 group-hover:translate-x-0 duration-300 ease-in-out transition-all">
                    <div className="w-full text-center  text-lg">Head</div>
                    <div className="w-full text-center  text-base">About</div>
                    <div className="w-full text-center  text-sm">More</div>
                  </div> */}
                  <img  onClick={()=>{setViewImage(true); setImage(<FullScreen link={arr[4].img}></FullScreen>) }}  alt="gallery" className="  gracale   block object-cover object-center w-full h-full rounded-lg h-[160px]"
                   src={arr[4].img} />
                </div>}
                {arr[5]!=null && <div className="  graysale group-hover:grayscale-0   hover:grayscale-0 w-1/2 p-1 md:p-2 relative group">
                  {/* <div className="w-full text-white flex flex-col items-center justify-center z-50 h-[160px]   absolute rounded-lg top-0 left-0 opacity-0 group-hover:opacity-90 translate-x-6 group-hover:translate-x-0 duration-300 ease-in-out transition-all">
                    <div className="w-full text-center  text-lg">Head</div>
                    <div className="w-full text-center  text-base">About</div>
                    <div className="w-full text-center  text-sm">More</div>
                  </div> */}
                  <img  onClick={()=>{setViewImage(true); setImage(<FullScreen link={arr[5].img}></FullScreen>) }}  alt="gallery" className="  grayale  block object-cover object-center w-full h-full rounded-lg h-[160px]"
                    src={arr[5].img} />
                </div>}
              </div>
            </div>
          </div>
        </section>
    </section>
  );
}

function FullScreen({link}){
  return (
    <img src={link} className={"w-full h-full object-cover"}></img>
  );
}