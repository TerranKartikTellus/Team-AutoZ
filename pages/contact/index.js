import HeadTag from "../../components/common/head";
import Top from "../../components/common/top";
import { useRef, useState } from "react";
import MSend from '/components/sendButton/send.js';
import MSending from '/components/sendButton/sending.js';
import MSendFailed from '/components/sendButton/sendFailed.js';
import emailjs from '@emailjs/browser';

import toast,{ Toaster } from "react-hot-toast";

export default function Contact(){
  return(
    <main className="bg-gra rounded-sm flcenter text-gray-100  bg-gray-900/5  snap-y snap-mandatory h-screen overflow-x-hidden  select-none">
      <HeadTag title="Contact | AutoZ" cardTitle="Contact | AutoZ" description="Contact | AutoZ" image="" ></HeadTag>
        <Toaster
      
      gutter={14}
      position="top-right"
      reverseOrder={true}
  
      />
         <Top main={"Contact"} sub="AutoZ" mini={""}></Top>
         <div className="mx-auto md:w-2/6 md:scale-90 h-full "><Icon></Icon></div>
        
    </main>
  );
}

function Icon(){
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [msg,setMsg] = useState();
  
  return(
    <div className="flex flex-col bg-opacity-30 text-center  items-ceenter w-full h-full md:h-[280px] space-y-4 bgred-400">
     <div className="relative">
      
      </div> 
      <div className="pt-28 md:pt-20">
      <svg className="fill-gray-100/70 w-32 h-32 mx-auto hidden md:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm22 16l-6.526-6.618-3.445 3.483-3.418-3.525-6.611 6.66 5.051-8-5.051-6 10.029 7.446 9.971-7.446-4.998 6.01 4.998 7.99z"/></svg>
      </div>
      
      <div className="text-4xl hidden md:block">Get in touch with us</div>
      <div className="text-base bg-red400 px-20 k hidden md:block">Always good to hear from you, We are always looking for opportunities</div>
      {/* <div className="text-base">We are always looking for opportunities</div> */}
<div className="w-full h-full ">

<Form></Form>
</div>
    </div>
  );
}

function Form(){
const [sendSuccess , setMessage] = useState("");
 
  const [alertE , setE ] = useState("");
  const [alertN , setN ] = useState("");
  const [alertM , setM ] = useState("");
  const [sendbutton,setText] = useState(<Send></Send>);

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,settMessage] = useState("");
  const form = useRef();
 function onChangeName(e){
   var str = e.currentTarget.value;
   const arr = str.split(" ");
   for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
   }
   const nameFinal = arr.join(" ");
   e.currentTarget.value = nameFinal
   setName( nameFinal );
   setN("");
 }
 function onChangeEmail(e){
   setEmail( e.currentTarget.value );
   setE("");
 }
 function onChangeMessage(e){
   settMessage( e.currentTarget.value );
   setM("");
 }
 function sendMail(e){
    e.preventDefault();
   
    if(document.getElementById("messageId").value == "" || document.getElementById("nameId").value == "" || document.getElementById("emailId").value == ""){

      if(document.getElementById("emailId").value == ""){
        setE("Please enter your email !");
        toast.error('Email not found',{duration: 3000,});
      }
      if(document.getElementById("nameId").value == ""){
        setN("Please enter your name");
        toast.error('Name not  found',{duration: 4000,});
      }
       if(document.getElementById("messageId").value == ""){
        setM("Add me a message !");
        toast.error('Message not found',{duration: 2000,});
      }
    }
    else{
      setText(<Sending></Sending>);
      toast.loading('Sending...',{duration: 1000,});
      emailjs.sendForm('service_jhdwwkg','template_ka8xlxr',form.current,'g_PyZNM23g11IQdgx').then(res=>{
        // console.log("then: ",res); setMessage("true");
        setText(<SentSuccess></SentSuccess>);
        setName(document.getElementById("nameId").value);
        // setName("");setEmail("");setMessage("");
        document.getElementById('nameId').value="";
        document.getElementById('emailId').value="";
        document.getElementById('messageId').value="";
        toast.success('Successful',{duration: 4000,style: {opacity: 0.4},})
      }).catch(err=>{
        console.log("err: ",err);
        setMessage("false");
        setText(<SentFailed></SentFailed>);
        toast.error('Failed to send message',{duration: 4000,});
      });
      
   }
  }
  function Send(){
  return(
  <>
    <MSend text2=""></MSend>
  </>);
}  
function Sending(){
  return(
    <>
    <MSending></MSending>
  </>
  );
}  
function SentSuccess(){
  return(
   <>
    <MSend text2="Sent Successfully"></MSend>
  </>
  );
}  
function SentFailed(){
  return(<>
   <MSendFailed></MSendFailed>
  </>
          );         
}
  return(
     <div className=" lg:w-[370px] lg:h-96 h-5/6 lg:p-5 lg:rounded-sm py-5 md:py-0 mx-auto text-left  mt-3 w-full flex flex-col items-center justify-center lg:mt-0  bg-gray-50 rounded-sm hover:shadow-2xl transition-all duration-300 ease-in-out tracking-widest bg-red ">
                                               <div className="pb-5 lg:hidden">
      <svg className="fill-gray-900 w-32 h-32 mx-auto " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm22 16l-6.526-6.618-3.445 3.483-3.418-3.525-6.611 6.66 5.051-8-5.051-6 10.029 7.446 9.971-7.446-4.998 6.01 4.998 7.99z"/></svg>
       <div className="text-base bg-red400 px-20 k text-gray-900 text-center">Always good to hear from you, We are always looking for opportunities</div>
     
      </div>
                                                <form ref={form} onSubmit={sendMail} className="w-10/12  flex flex-col items-center justify-center  space-y-3">
                                                          <div className=" relative  w-full mx-auto scale-95 lg:scale-100">
                                                                    <div className="w-full absolute top-1  left-1 font-sans text-gray-500 text-xs">
                                                                       <label htmlFor="name"> Name <span className="bg-red-600 text-white">{alertN}</span></label>
                                                                    </div>
                                                                    <div className="w-full font-sans text-gray-800  ">
                                                                       <input onChange={(e)=>{onChangeName(e)}} className="first-letter:capitalize w-full px-2 pb-1 pt-5 border-b-2 border-gray-400 rounded outline-none text-base font-sans font-medium placeholder-gray-800 bg-gray-50" placeholder="" autoComplete="off" id="nameId" name="from_name" type={"text"}></input>
                                                                    </div>
                                                          </div>

                                                          <div className=" relative  w-full mx-auto scale-95 lg:scale-100">
                                                                    <div className="w-full absolute top-1  left-1 font-sans text-gray-500 text-xs">
                                                                        <label htmlFor="name">Email <span className="bg-red-600 text-white"> {alertE}</span></label>
                                                                       
                                                                      </div>
                                                                    <div className="w-full font-sans text-gray-800  ">
                                                                     <input onChange={(e)=>{onChangeEmail(e) }} className="w-full px-2 pb-1 pt-5 border-b-2 border-gray-400 rounded outline-none text-base font-sans font-medium placeholder-gray-800 bg-gray-50" placeholder="" autoComplete="off" id="emailId" name="from_email" type={"email"}></input>
                                                                     
                                                                    </div>
                                                          </div>

                                                          <div className=" relative  w-full mx-auto scale-95 lg:scale-100">
                                                                    <div className="w-full absolute top-1  left-1 font-sans text-gray-500 text-xs">
                                                                       <label htmlFor="name">Message <span className="text-right bg-red-600 text-white">{alertM}</span></label>
                                                                      </div>
                                                                    <div className="w-full font-sans text-gray-800  ">
                                                                        <textarea onChange={ (e)=>onChangeMessage(e) } className="w-full h-24 px-2 pb-1 pt-5 border-b-2 border-gray-400 rounded outline-none text-base font-sans font-medium placeholder-gray-800 bg-gray-50" placeholder="" autoComplete="off" id="messageId" name="message" type={"text"}></textarea>
                                                                      
                                                                     </div>
                                                          </div>
                                                          <div>
                                                                    <div className="   flex flex-col items-center justify-center rounded-full">
                                                                             <button type="submit">
                                                                                {sendbutton}
                                                                              </button>
                                                                    </div>
                                                          </div>
                                                </form>
                                      </div>
  );
}