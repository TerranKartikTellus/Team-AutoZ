import HeadTag from "/components/common/head";
import Top from "/components/common/top";
import Opacity from "/components/Animate/WhenInView/Opacity"
import Scale from "/components/Animate/WhenInView/Scale"
import  Y from "/components/Animate/WhenInView/Translate/y"
import { board,xboard } from "../../../lib/data/team";
import Image from "next/image";
import Link from "next/link";

  import RX from "/components/Animate/WhenInView/Rotate/x";
export default function Team(){



  return(
    <main className="bg-gra flex flex-col items-start justify-start md:justify-start md:items-start md:flex-row rounded-sm scrollbar-hide text-gray-100  bg-gray-900/5  snap-y snap-mandatory h-screen overflow-x-hidden  select-none">
      <HeadTag title="Board Members | AutoZ" cardTitle="board Members | AutoZ" description="US | AutoZ" image="" ></HeadTag>
         <Top main={"Board Members"} sub="AutoZ" mini={""}></Top>
     {/* <div className="w-full text-center font-Maven text-2xl">board MEMBERS | AUTOZ</div> */}
      
      <div className="w-[700px] hidden md:block fixed top-0 left-0  h-full">
        <div className=" opacity-60 flex flex-col items-center justify-center space-y-2 my-auto  h-full">
         <People></People>
       
        <div className="text-xs tracking-wider">Whats makes us unique</div>
        
        <div className="text-2xl tracking-wider text-center border-b-2 border-gray-100/40 pb-2">Our enthusiastically <br></br>driven Team</div>
       
        <div className="text-xs">
          {board.length} Active Members
         
        </div>
      </div>
      </div>
      <div className="w-[700px] hidden md:block"></div>
      <div className="w-full md:w-2/3 lg:pt36 md:p44 md  lg:px ">      
      {board &&
        <div className="w-full h-full">
        <div  className="pt-[200px] md:pt-0 w-full grid grid-col-1 md:grid-cols-3  overflow-x-auto md: ">
          {board.map((i,index)=>(
            
            <div key={index} className="hover:w-64 mx-auto transition-all duration-500 ease-in-out group   px-4 md:pb-5  w-[300px] md:w-60 bgred-400"> 
              <div className="my-5 mx-auto  relative ">
                <img src={i.img} className="w-full h-80 opacity-90 object-cover rounded-md shadow-lg "></img>
                <div className="absolute top-0 pr-2 left-0 w-full h-full bg-black/20 flex flex-col items-end justify-end">
                  <div className="flex flex-row items-center justify-center space-x-1 scale-75">
                     <Social google={i.email} linkdin={i.linkdin} insta={i.insta}></Social>
                  </div>
                  {i.position && <div className=" opacity-80 overflow-hidden text-right font-thin tracking-wide">{i.position}</div>}
                  <div className="  text-xl font-medium text-right tracking-wider overflow-hidden mb-2">{i.name}</div>
                </div>
              </div>
            </div>
          
          ))}
          </div>
            <div className="w-full text-3xl bg-gray50/30 p-2">Ex-Board Members</div>
            <div  className="pt-[200px] md:pt-0 w-full grid grid-col-1 md:grid-cols-3  overflow-x-auto md: ">
          {xboard.map((i,index)=>(
            
            <div key={index} className="hover:w-64 mx-auto transition-all duration-500 ease-in-out group   px-4 md:pb-5  w-[300px] md:w-60 bgred-400"> 
              <div className="my-5 mx-auto  relative ">
                <img src={i.img} className="w-full h-80 opacity-90 object-cover rounded-md shadow-lg "></img>
                <div className="absolute top-0 pr-2 left-0 w-full h-full bg-black/20 flex flex-col items-end justify-end">
                  <div className="flex flex-row items-center justify-center space-x-1 scale-75">
                     <Social google={i.email} linkdin={i.linkdin} insta={i.insta}></Social>
                  </div>
                  {i.position && <div className=" opacity-80 overflow-hidden text-right font-thin tracking-wide">Ex-{i.position}</div>}
                  <div className="  text-xl font-medium text-right tracking-wider overflow-hidden mb-2">{i.name}</div>
                </div>
              </div>
            </div>
          
          ))}
          </div>

          
          
        </div>
        
      }
      </div>
   
    </main>);
}
function People(){
  return(
    <div className="w-72 h-72 invert">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z"/></svg>
    </div>
  );
}
function Social({google,linkdin,insta}){

  return(
    <div className=' flex flex-row items-end justify-end space-x-2 opacity-80  text-gray-100 w-full '>
        {google && <div>
        <RX initial={"90deg"} final={"0deg"} duration={0.6} delay={1.8}>
          <Link 
          href={`mailto: ${google}`}>
          <a target="_blank" className='opacity-80 transition-all duration-300 ease-in-out hover:opacity-90'><svg className='invert  w-8 h-8' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.917 16.083c-2.258 0-4.083-1.825-4.083-4.083s1.825-4.083 4.083-4.083c1.103 0 2.024.402 2.735 1.067l-1.107 1.068c-.304-.292-.834-.63-1.628-.63-1.394 0-2.531 1.155-2.531 2.579 0 1.424 1.138 2.579 2.531 2.579 1.616 0 2.224-1.162 2.316-1.762h-2.316v-1.4h3.855c.036.204.064.408.064.677.001 2.332-1.563 3.988-3.919 3.988zm9.917-3.5h-1.75v1.75h-1.167v-1.75h-1.75v-1.166h1.75v-1.75h1.167v1.75h1.75v1.166z"/></svg></a>
          </Link>
        </RX>
        
        </div>}

        {linkdin && <div>
          <RX initial={"90deg"} final={"0deg"} duration={0.6} delay={2}>
          <Link href={linkdin}>
          <a target="_blank" className='opacity-80 transition-all duration-300 ease-in-out hover:opacity-90'><svg className='invert  w-8 h-8' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg></a>
          </Link>
          </RX>
        
        </div>}

        {insta && <div>
          <RX initial={"90deg"} final={"0deg"} duration={0.6} delay={2.2}>
          <Link href={insta}>
          <a target="_blank" className='opacity-80 transition-all duration-300 ease-in-out hover:opacity-90 '><svg className='invert  w-8 h-8' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"/></svg></a>
          </Link>
          </RX>
        </div>
        }
    </div>
  );
}