import Opacity from "../components/Animate/WhenInView/Opacity";

export default function Load(){
  return(
    <Opacity initial={ 0 } final={ 1 } duration={1} delay={0}>
    <div className='text-5xl w-full h-screen opacity-90 flex flex-col items-center justify-center text-gray-100 '>
      <img src="/load.gif" className="w-44 h-44 opacity-75 rounded-lg"></img>
    </div>
    </Opacity>
  );
}