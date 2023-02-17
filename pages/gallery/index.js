import { useEffect, useState } from "react";
import HeadTag from "../../components/common/head";
import Top from "../../components/common/top";
// import { galary } from "../../lib/data/galary";
import firebase from "firebase/app";
import { firebaseConfig, storageRef } from "../../lib/firebase/firebase";
import { getStorage, ref, listAll } from "firebase/storage";
import { storage } from "../../lib/firebase/firebase";
import Image from "next/image";


export default function Gallery1({imageURLs}){
  const [view,setView] = useState(false);
  function toggleView(){ setView(!view); }
  const [viewImage,setViewImage] = useState();
  function toggleViewImage(src){  }

    let images = []
  let temp = []

// console.log(imageURLs);
  for(let i=0;i<imageURLs.length;i++){
    temp.push({'img':imageURLs[i]})
    if(temp.length==6){
      images.push(temp)
      temp = []
    }
    if(i==imageURLs.length-1){
      images.push(temp)
    }
  }
  // console.log('images:',images);
  let galary = images

  return(
    <main className="bg-gra rounded-sm text-gray-100  bg-gray900   snap-y snap-mandatory h-screen overflow-x-hidden  select-none">
      <HeadTag title="Gallery | AutoZ" cardTitle="Gallery | AutoZ" description="Gallery | AutoZ" image="" ></HeadTag>
      <Top main="Gallery" sub="AutoZ" mini={""}></Top>
      
      

      <div className="flex shrink overflow-y-auto mt-20">
      {
        galary && <div className="pb-[150px]">  
          {galary.map((i,index)=>(
            <div className="" key={index}>
              { i.length>=3 && <Show toggleView={toggleView} toggleViewImage={toggleViewImage} arr={i}></Show>}
            </div>
          ))}
        </div>
      }
      {/* <Show arr={galary}></Show> */}
      </div>
      
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
function Show({arr,toggleView,toggleViewImage}){
 
  // console.log(arr);
  return(
    <section className="overflow-hidden text-gray-700 w-10/12  mt- mt-5 bg-green200   mx-auto">
        
       
        <section className="overflow-hidden z-0 text-gray-700 w-full ">
          <div className="container px py2 z-0 mx-auto lg4 w-full lg:px-32">
            <div className="flex flex-col z-0 md:flex-row  -m-1 md:-m-2">
              <div className="flex flex-wrap z-0  md:w-1/2">
                
                {
                  arr[0]!=null && <div onClick={()=>{ toggleView(); toggleViewImage(arr[0].img) }} className="z-0 w-1/2 p-1 md:p-2 relative group">
                  {/* <div className="w-full text-white flex flex-col items-center justify-center z-50 h-[160px]   absolute rounded-lg top-0 left-0 opacity-0 group-hover:opacity-90 translate-x-6 group-hover:translate-x-0 duration-300 ease-in-out transition-all">
                    <div className="w-full text-center  text-lg">Head</div>
                    <div className="w-full text-center  text-base">About</div>
                    <div className="w-full text-center  text-sm">More</div>
                  </div> */}
                  <Image layout='fill'  loading={'lazy'}   alt="gallery" className="laz block object-cover object-center w-full h-full rounded-lg h-[160px]  grays   "
                    src={arr[0].img} />
                </div>
                }
                {
                  arr[1]!=null && <div onClick={()=>{ toggleView(); toggleViewImage(arr[1].img) }} className="z-0 w-1/2 p-1 md:p-2 relative group">
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
                  arr[2]!=null && <div onClick={()=>{ toggleView(); toggleViewImage(arr[2].img) }} className="w-full p-1 md:p-2  relative group ">
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
                  arr[3]!=null && <div onClick={()=>{ toggleView(); toggleViewImage(arr[3].img) }} className="w-full p-1 md:p-2  relative group ">
                  <div className="w-full text-white flex flex-col items-center justify-center z-50 h-[334px]   absolute rounded-lg top-0 left-0 opacity-0 group-hover:opacity-90 translate-x-6 group-hover:translate-x-0 duration-300 ease-in-out transition-all">
                    {/* < className="w-full text-center  text-lg">Head< */}
                  </div>
                  <img    alt="gallery" className="  graysce  block object-cover object-center w-full h-full rounded-lg h-[334px]"
                   src={arr[3].img} />
                </div>}
                {arr[4]!=null && <div onClick={()=>{ toggleView(); toggleViewImage(arr[4].img) }} className="w-1/2 p-1 md:p-2 group-hover:grayscale-0   relative group ">
                  {/* <div className="w-full text-white flex flex-col items-center justify-center z-50 h-[160px]   absolute rounded-lg top-0 left-0 opacity-0 group-hover:opacity-90 translate-x-6 group-hover:translate-x-0 duration-300 ease-in-out transition-all">
                    <div className="w-full text-center  text-lg">Head</div>
                    <div className="w-full text-center  text-base">About</div>
                    <div className="w-full text-center  text-sm">More</div>
                  </div> */}
                  <img    alt="gallery" className="  gracale   block object-cover object-center w-full h-full rounded-lg h-[160px]"
                   src={arr[4].img} />
                </div>}
                {arr[5]!=null && <div onClick={()=>{ toggleView(); toggleViewImage(arr[5].img) }} className="  graysale group-hover:grayscale-0   hover:grayscale-0 w-1/2 p-1 md:p-2 relative group">
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
  const imageRefs = await storageRef.child('galary/galary_v0').listAll();
  const imageURLs = await Promise.all(
    imageRefs.items.map((item) => item.getDownloadURL())
  );

  
  return {
    props: {
    imageURLs,
    },
  };
}