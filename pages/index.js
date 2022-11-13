import Main from '/components/home/Main'
import About from '/components/home/About'
import Milestones from '/components/home/Milestones'
import Galary from '/components/home/Galary'
import Team from '/components/home/Team'
import Contact from '/components/home/Contact'
import HeadTag from '../components/common/head'
import Link from 'next/link'



export default function Home() {
  return (
    <div className="bg-gra rounded-sm text-gray-900  bg-gray-50/0  snap-y snap-mandatory h-screen overflow-x-hidden  select-none">
      <HeadTag title="Home | AutoZ" cardTitle="Home | AutoZ" description="Research and Development team, VIT Vellore" image="" ></HeadTag>
      <Link href="/recruitment">
      <a  className="flex flex-col  items-center justify-between space-y-2  fixed top-5 right-5 text-white  tracking-widest ">
        <div className="bg-slate-100/80 rounded-md hover:bg-slate-100/10 group hover:bg-opacity-50 transition-all duration-200 ease-in-out p-2 md:p-5"><img src="/svg/twoPeople.svg" className="group-hover:invert md:w-8 md:h-8 w-5 h-5"></img></div>
        <div className='text-center'>Recruitment<br></br> 2022-2023</div>
      </a>
      </Link>
     <div className='h-screen snap-center saturat'><Main></Main></div>
     {/* <div className='h-screen snap-center'><About></About></div>
     <div className='h-screen snap-center'><Milestones></Milestones></div>
     <div className='h-screen snap-center'><Galary></Galary></div>
     <div className='h-screen snap-center'><Team></Team></div>
     <div className='h-screen snap-center'><Contact></Contact></div> */}
    </div>
  )
}







