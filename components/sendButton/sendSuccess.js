 export default function Sending({text1="Done",text2=""}){
  return(
    <div className=" flex flex-col item-center justify-center">
      
      <div className="w-[200px] shadow-sm hover:shadow-xl flex flex-row item-center space-x-3 rounded  justify-center bg-gray-900 group py-[10px] px-[20px] transition-all duration-500 ease-in-out">
        <div className="text-xl text-gray-100 font-medium group-hover:-translate-x-2 opacity-80 group-hover:opacity-100 tracking-wider group-hover:tracking-widest transition-all duration-500 ease-in-out">{text1}</div>
        <div>
          <svg className="fill-green-500 scale-75 translate-y-1 translate-x-3 opacity-80 group-hover:opacity-100 transition-all duration-500 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 12l-18 12v-24z"/></svg>
        </div>
      </div>

      <div className="text-xs text-gray-900 text-center mt-[1px] w-[200px]">
        {text2}
      </div>

    </div>
    );

}  
