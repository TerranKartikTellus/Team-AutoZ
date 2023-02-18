import { useCallback, useEffect, useState } from "react";
import HeadTag from "../../components/common/head";
import Top from "../../components/common/top";
// import { galary } from "../../lib/data/galary";
import firebase from "firebase/app";
import { firebaseConfig, storageRef } from "../../lib/firebase/firebase";
import { getStorage, ref, listAll } from "firebase/storage";
import { storage } from "../../lib/firebase/firebase";
import Image from "next/image";

export default function Gallery1({imageURLs,oimageURLs}){
  const [view,setView] = useState(false);
  function toggleView(){ setView(!view); }

  function toggleViewImage(src){  }

    let images = []
  let temp = {}

    let oimages = []
  let otemp = {}

// console.log(imageURLs);
  for(let i=0;i<imageURLs.length;i++){
    images.push({'id':i, 'img': imageURLs[i]})
  }
  for(let i=0;i<oimageURLs.length;i++){
    oimages.push({'id':i, 'img': oimageURLs[i]})
  }

    console.log(images);
    console.log(oimages);
      // const [view,setView] = useState(false)
  const [item,setItem] = useState(null)


  return(
    <main className="bg-gra rounded-sm text-gray-100  bg-gray900   snap-y snap-mandatory h-screen overflow-x-hidden  select-none">
      <HeadTag title="Gallery | AutoZ" cardTitle="Gallery | AutoZ" description="Gallery | AutoZ" image="" ></HeadTag>
      <Top main="Gallery" sub="AutoZ" mini={""}></Top>
      
      {
        view && item ? <div className=" bg-gray-600/80 rounded-xl w-full h-full flex p-4 md:p-0 flex-col items-center justify-center">
          <button className="fixed bottom-8 invert opacity-70 z-50  md:top-3 right-3 text-black" onClick={()=>{setView(!view)}}><img className="w-7 hover:opacity-75 h-7" src="/svg/close.svg"></img></button>
           <img alt={'Loading Please Wait'} src={item} className="md:w-8/12 md:h-5/6 w-full   shadow-xl object-cover rounded-xl"></img>
           
          <img></img>
        </div>

        :
        <>
      <div className="flex shrink overflow-y-auto mt-20 px-72 pt-20 hidden md:block">
      {
        images ?
          <div className="bg-red-0 w-full h-full grid grid-cols-1 md:grid-cols-4 gap-7">
            {images.map(i=>(
                
                <div key={i.id} onClick={()=>{
                      setView(!view);
                      setItem(oimages[i.id].img)
                }} className={`hidden md:block ${i.id%3==1 && i.id%2==0 ? "md:col-span-2 row-span-2  bg-red00 h-[600px] m-16 hover:border-[4px] hover:border-gray-50": "p-3 col-span-1 overflow-hidden h-[300px]" } `}>
                <img  className={`block  rounded-xl brightness-75 opacity-95 hover:opacity-100 object-cover object-center hover:scale-105 duration-300 shadow-xl ease-in-out transition-all hover:border-[4px] hover:border-gray-50 w-full h-full`}    alt={i.id}   src={i.img} />
                </div>
                
            ))}    
          </div>
          
          : "No Images found !"
      }
      </div>

      <div className="w-full h-full md:hidden block">

      <div className=" flex shrink overflow-y-auto mt-32 pt-5">
      {
        images ?
        <div className="bg-red-0 w-full h-full grid grid-cols-1 gap-10">
            {images.map(i=>(
                
              <div key={i.id} 
               onClick={()=>{
                      setView(!view);
                      setItem(oimages[i.id].img)
                }} 
              className={`h-[300px] w-[300px] mx-auto rounded-xl group`}>
                
                <img  className=" mx-auto object-cover rounded-xl object-center h-[300px] w-[300px] group-hover:opacity-90 "   alt={i.id}   src={i.img} />
                </div>
                
                ))}    
          </div>
          
          : "No Images found !"
        }
      </div>
        </div>
            
        </>
          }
    
    </main>

  );
}
// function ImageView({src,toggleView}){
//   return(
//       <div className="relat h-[800px] mx-auto z-50 flex flex-col items-center justify-center">
//         <img src={src} className="h-[800px] w-[800px] object-cover contrast-125"></img>
//         {!src && <div>No Image Found</div>}
//         </div>
//   );
// }
function Show({arr,oarr,toggleView,toggleViewImage}){
  const [view,setView] = useState(false)
  const [item,setItem] = useState(null)
console.log('arrrr',arr);
  // console.log(arr);
  return(
    <section className={`overflow-hidden text-gray-700 w-10/12  mt- mt-5 bg-green200   mx-auto  ${view && ""}`}>
        
      {view && <div className="fixed top-0 left-0 bg-gray-50/90 w-full h-full z-50  flex rounded-xl flex-col items-center justify-center" >
        <img    alt="gallery" className="w-4/6 h-4/6 object-cover shadow-2xl rounded-md "  src={item} />
        </div>}

        <section className="overflow-hidden z-0 text-gray-700 w-full lg:translate-x-20">
          <div className="container px py2 z-0 mx-auto lg4 w-full lg:px-32">
            <div className="flex flex-col z-0 md:flex-row   md:-m-2">
              <div className="flex flex-wrap z-0  md:w-1/2 mx-auto">
                
                {
                  arr[0]!=null && <div onClick={()=>{ setItem(arr[0].img); setView(!view);   toggleView(); toggleViewImage(arr[0].img) }} className="z-0 w-1/2 p-1 md:p-2 relative group">
                  {/* <div className="w-full text-white flex flex-col items-center justify-center z-50 h-[160px]   absolute rounded-lg top-0 left-0 opacity-0 group-hover:opacity-90 translate-x-6 group-hover:translate-x-0 duration-300 ease-in-out transition-all">
                    <div className="w-full text-center  text-lg">Head</div>
                    <div className="w-full text-center  text-base">About</div>
                    <div className="w-full text-center  text-sm">More</div>
                  </div> */}
                  <Image layout='fill'   loading={'lazy'}   alt="gallery" className="laz block object-cover object-center w-full h-full rounded-lg h-[160px]  grays   "
                    src={arr[0].img} />
                </div>
                }
                {
                  arr[1]!=null && <div onClick={()=>{setItem(arr[1].img); toggleView(); toggleViewImage(arr[1].img) }} className="z-0 w-1/2 p-1 md:p-2 relative group">
                  {/* <div className="w-full text-white flex flex-col items-center justify-center z-50 h-[160px]   absolute rounded-lg top-0 left-0 opacity-0 group-hover:opacity-90 translate-x-6 group-hover:translate-x-0 duration-300 ease-in-out transition-all">
                    <div className="w-full text-center  text-lg">Head</div>
                    <div className="w-full text-center  text-base">About</div>
                    <div className="w-full text-center  text-sm">More</div>
                  </div> */}
                  <img    alt="gallery" className="block object-cover object-center w-full h-full rounded-lg h-[160px]  graysca  "
                    src={arr[1].img} />
                </div>
                }
                {
                  arr[2]!=null && <div onClick={()=>{setItem(arr[2].img); toggleView(); toggleViewImage(arr[2].img) }} className="w-full p-1 md:p-2  relative group ">
                  <div className="w-full text-white flex flex-col items-center justify-center z-50 h-[334px]   absolute rounded-lg top-0 left-0 opacity-0 group-hover:opacity-90 translate-x-6 group-hover:translate-x-0 duration-300 ease-in-out transition-all">
                    {/* <div className="w-full text-center  text-lg">Head</div>
                    <div className="w-full text-center  text-base">About</div>
                    <div className="w-full text-center  text-sm">More</div> */}
                  </div>
                  <img    alt="gallery" className="block object-cover object-center w-full h-full rounded-lg h-[334px]  graysca   "
                   src={arr[2].img} />
                </div>}
              </div>

              <div className="flex flex-wrap md:w-1/2 group">
                {
                  arr[3]!=null && <div onClick={()=>{setItem(arr[3].img); toggleView(); toggleViewImage(arr[3].img) }} className="w-full p-1 md:p-2  relative group ">
                  <div className="w-full text-white flex flex-col items-center justify-center z-50 h-[334px]   absolute rounded-lg top-0 left-0 opacity-0 group-hover:opacity-90 translate-x-6 group-hover:translate-x-0 duration-300 ease-in-out transition-all">
                    {/* < className="w-full text-center  text-lg">Head< */}
                  </div>
                  <img    alt="gallery" className="  graysce  block object-cover object-center w-full h-full rounded-lg h-[334px]"
                   src={arr[3].img} />
                </div>}
                {arr[4]!=null && <div onClick={()=>{setItem(arr[4].img); toggleView(); toggleViewImage(arr[4].img) }} className="w-1/2 p-1 md:p-2 group-hover:grayscale-0   relative group ">
                  {/* <div className="w-full text-white flex flex-col items-center justify-center z-50 h-[160px]   absolute rounded-lg top-0 left-0 opacity-0 group-hover:opacity-90 translate-x-6 group-hover:translate-x-0 duration-300 ease-in-out transition-all">
                    <div className="w-full text-center  text-lg">Head</div>
                    <div className="w-full text-center  text-base">About</div>
                    <div className="w-full text-center  text-sm">More</div>
                  </div> */}
                  <img    alt="gallery" className="  gracale   block object-cover object-center w-full h-full rounded-lg h-[160px]"
                   src={arr[4].img} />
                </div>}
                {arr[5]!=null && <div onClick={()=>{setItem(arr[5].img); toggleView(); toggleViewImage(arr[5].img) }} className="  graysale group-hover:grayscale-0   hover:grayscale-0 w-1/2 p-1 md:p-2 relative group">
                  {/* <div className="w-full text-white flex flex-col items-center justify-center z-50 h-[160px]   absolute rounded-lg top-0 left-0 opacity-0 group-hover:opacity-90 translate-x-6 group-hover:translate-x-0 duration-300 ease-in-out transition-all">
                    <div className="w-full text-center  text-lg">Head</div>
                    <div className="w-full text-center  text-base">About</div>
                    <div className="w-full text-center  text-sm">More</div>
                  </div> */}
                  <img    alt="gallery" className="  grayale  block object-cover object-center w-full h-full rounded-lg h-[160px]"
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


export async function getServerSideProps() {
  const imageRefs = await storageRef.child('galary/thumb').listAll();
  const imageURLs = await Promise.all(
    imageRefs.items.map((item) => item.getDownloadURL())
  );

  const oimageRefs = await storageRef.child('galary/orig').listAll();
  const oimageURLs = await Promise.all(
    oimageRefs.items.map((item) => item.getDownloadURL())
  );



  
  return {
    props: {
    imageURLs, oimageURLs
    },
  };
}