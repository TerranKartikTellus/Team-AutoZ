 export default function Sending({text1="Failed",text2="Please retry"}){
  return(
<div className=" flex flex-col item-center justify-center ">
      
      <div className="w-[200px] shadow-sm bg-gradient-to-tr from-red-600 hover:shadow-xl flex flex-row item-center space-x-3 rounded  justify-center bg-gray-900 group py-[10px] px-[20px] transition-all duration-500 ease-in-out">
        <div className="text-xl text-gray-100 font-medium group-hover:-translate-x-2 group-hover:opacity-20 tracking-wider group-hover:tracking-widest transition-all duration-500 ease-in-out">{text1}</div>
        <div>
          <svg className="fill-red-600 scale-75 translate-y-1 group-hover:translate-x-3 group-hover:opacity-20 transition-all duration-500 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 12l-18 12v-24z"/></svg>
        </div>
      </div>

      <div className="text-xs text-gray-900 text-center mt-[1px] w-[200px]">
        {text2}
      </div>

</div>
    );

}  
