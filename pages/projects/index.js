import Galary from "../../components/home/Galary";
 import HeadTag from "../../components/common/head";
import Top from "../../components/common/top";

export default function Latest(){
  
  return(
    <main className="bg-gra  rounded-sm text-gray-100  bg-gray-900/5   snap-y snap-mandatory h-screen overflow-x-hidden  select-none">
         <HeadTag title="Projects | AutoZ" cardTitle="Projects | AutoZ" description="LATEST | AutoZ" image="" ></HeadTag>
     <Top main={"Projects"} sub="AutoZ" mini={""}></Top>
     <Galary></Galary>
    </main>
  );
}