import HeadTag from "../../components/common/head";
import Top from "../../components/common/top";
import { galary } from "../../lib/data/galary";

export default function Gallery1(){
  
  return(
    <main className="bg-gra rounded-sm text-gray-100  bg-gray900   snap-y snap-mandatory h-screen overflow-x-hidden  select-none">
      <HeadTag title="Gallery | AutoZ" cardTitle="Gallery | AutoZ" description="Gallery | AutoZ" image="" ></HeadTag>
      <Top main="Gallery" sub="AutoZ" mini={""}></Top>
      <div className="flex shrink overflow-y-auto">
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
 console.log(arr);
  return(
    <section className="overflow-hidden text-gray-700 w-10/12  mt-32 md:mt-12 bg-green200  mx-auto">
        <section className="overflow-hidden text-gray-700 w-full">
          <div className="container px py2 mx-auto lg:pt-24 w-full lg:px-32">
            <div className="flex flex-col md:flex-row  -m-1 md:-m-2">
              <div className="flex flex-wrap  md:w-1/2">
                
                {
                  arr[0]!=null && <div className="w-1/2 p-1 md:p-2 relative group">
                  {/* <div className="w-full text-white flex flex-col items-center justify-center z-50 h-[160px]   absolute rounded-lg top-0 left-0 opacity-0 group-hover:opacity-90 translate-x-6 group-hover:translate-x-0 duration-300 ease-in-out transition-all">
                    <div className="w-full text-center  text-lg">Head</div>
                    <div className="w-full text-center  text-base">About</div>
                    <div className="w-full text-center  text-sm">More</div>
                  </div> */}
                  <img alt="gallery" className=" block object-cover object-center w-full h-full rounded-lg h-[160px]  grayscale   "
                    src={arr[0].img} />
                </div>
                }
                {
                  arr[1]!=null && <div className="w-1/2 p-1 md:p-2 relative group">
                  {/* <div className="w-full text-white flex flex-col items-center justify-center z-50 h-[160px]   absolute rounded-lg top-0 left-0 opacity-0 group-hover:opacity-90 translate-x-6 group-hover:translate-x-0 duration-300 ease-in-out transition-all">
                    <div className="w-full text-center  text-lg">Head</div>
                    <div className="w-full text-center  text-base">About</div>
                    <div className="w-full text-center  text-sm">More</div>
                  </div> */}
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg h-[160px]  grayscale  "
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
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg h-[334px]  grayscale   "
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
                  <img alt="gallery" className="  grayscale  block object-cover object-center w-full h-full rounded-lg h-[334px]"
                   src={arr[3].img} />
                </div>}
                {arr[4]!=null && <div className="w-1/2 p-1 md:p-2 group-hover:grayscale-0   relative group ">
                  {/* <div className="w-full text-white flex flex-col items-center justify-center z-50 h-[160px]   absolute rounded-lg top-0 left-0 opacity-0 group-hover:opacity-90 translate-x-6 group-hover:translate-x-0 duration-300 ease-in-out transition-all">
                    <div className="w-full text-center  text-lg">Head</div>
                    <div className="w-full text-center  text-base">About</div>
                    <div className="w-full text-center  text-sm">More</div>
                  </div> */}
                  <img alt="gallery" className="  grayscale   block object-cover object-center w-full h-full rounded-lg h-[160px]"
                   src={arr[4].img} />
                </div>}
                {arr[5]!=null && <div className="  grayscale group-hover:grayscale-0   hover:grayscale-0 w-1/2 p-1 md:p-2 relative group">
                  {/* <div className="w-full text-white flex flex-col items-center justify-center z-50 h-[160px]   absolute rounded-lg top-0 left-0 opacity-0 group-hover:opacity-90 translate-x-6 group-hover:translate-x-0 duration-300 ease-in-out transition-all">
                    <div className="w-full text-center  text-lg">Head</div>
                    <div className="w-full text-center  text-base">About</div>
                    <div className="w-full text-center  text-sm">More</div>
                  </div> */}
                  <img alt="gallery" className="  grayscale  block object-cover object-center w-full h-full rounded-lg h-[160px]"
                    src={arr[5].img} />
                </div>}
              </div>
            </div>
          </div>
        </section>
    </section>
  );
}