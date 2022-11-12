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
      <source rel="preload" src="https://firebasestorage.googleapis.com/v0/b/autoz-8611b.appspot.com/o/mylivewallpapers.com-Spaceman-with-Dog.mp4?alt=media&token=6138d067-509e-4fa1-8115-f022032be9fd" type="video/mp4" />
      <div rel="preload"  className='bg-backgroundLG h-full w-full bg-cover'></div>
    </video>
      
      
    <video id="myVideo" preload="auto" className="bg-cover opacity-50 saturate-200  block md:hidden object-cover w-full h-full  absolute top-0 left-0"  autoPlay loop muted >
      <source src="https://firebasestorage.googleapis.com/v0/b/autoz-8611b.appspot.com/o/MOBILE-Spaceman-with-Dog.mp4?alt=media&token=26c4e4aa-bffa-4798-83e1-66913933164d" type="video/mp4" />
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