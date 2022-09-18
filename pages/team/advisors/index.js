import HeadTag from "/components/common/head";
import Top from "/components/common/top";
import Opacity from "/components/Animate/WhenInView/Opacity"
import Scale from "/components/Animate/WhenInView/Scale"
import  Y from "/components/Animate/WhenInView/Translate/y"

export default function Team(){
  return(
    <main className="bg-gra rounded-sm text-gray-100  bg-gray-900/5  snap-y snap-mandatory h-screen overflow-x-hidden  select-none">
      <HeadTag title="Advisors | AutoZ" cardTitle="Advisors | AutoZ" description="Advisors | AutoZ" image="" ></HeadTag>
         <Top main={"Advisors"} sub="AutoZ" mini={""}></Top>

    </main>);
}