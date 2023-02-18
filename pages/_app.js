import '../styles/globals.css'
import Nav from '../components/common/navbar'
import { useRouter } from 'next/router'
import Opacity from '../components/Animate/WhenInView/Opacity';
import {useState} from "react"
import nextRouter from 'next/router';
import Y from '../components/Animate/WhenInView/Translate/y';
import Link from "next/link"

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  
  const [loading,setLoading] = useState(false);
  nextRouter.events.on('routeChangeStart',(url)=>{
    setLoading(true);
  })
  nextRouter.events.on('routeChangeComplete',(url)=>{
    setLoading(false);
  })
  


  return <main className=' font-Maven bg-black relative h-full w-full'>

    <video id="myVideo" preload="auto"  className="bg-cover opacity-50 saturate-200  hidden md:block object-cover w-full h-full absolute top-0 left-0"  autoPlay loop muted >
      <source rel="preload" src="https://firebasestorage.googleapis.com/v0/b/autoz-8611b.appspot.com/o/bg-v.mp4?alt=media&token=8d50e27d-ecd6-4a6b-a549-d474b55f184d" type="video/mp4" />
      <div rel="preload"  className='bg-backgroundLG h-full w-full bg-cover'></div>
    </video>
      
      
    <video id="myVideo" preload="auto" className="bg-cover opacity-50 saturate-200  block md:hidden object-cover w-full h-full  absolute top-0 left-0"  autoPlay loop muted >
      <source rel="preload" src="https://firebasestorage.googleapis.com/v0/b/autoz-8611b.appspot.com/o/bg-m-v.mp4?alt=media&token=0120e773-0a30-408d-8559-27ed16af2d23" type="video/mp4" />
      <div className='bg-backgroundSM h-full  w-full bg-cover'></div>
    </video>
    <div rel="preload" className='bg-black/40 w-full   h-full absolute top-0 left-0 animate-'>.</div>

    <div className='overflow-hidden bg-green400  shadowd bg-green400 w-full shadow-gray-400/80 drop-shadow-2xl'>
        {loading && 
             <Load></Load>
        }
          
        
    
          {!loading && <Opacity initial={0.8} final={1} duration={1}>
            <div className='bg-red0 scale-90'>
              <Opacity initial={ 0 } final={ 1 } duration={1} delay={0}>
                <Y initial={ "100px" } final={ "0px" } duration={0.8} delay={0}>

               <Component {...pageProps} />
                </Y>
              </Opacity>
            </div>
          </Opacity>
           } 
          <Nav route={router.route}></Nav>
        
    </div>  
  
  </main>
}

export default MyApp
function Load(){
  return(
    <Opacity initial={ 0 } final={ 1 } duration={1} delay={0}>
    <div className='text-5xl w-full h-screen opacity-90 flex flex-col items-center justify-center text-gray-100 '>
      <img src="/load.gif" className="w-44 h-44 opacity-75 rounded-lg"></img>
    </div>
    </Opacity>
  );
}