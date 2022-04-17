import './book.css';
import useRef, { useState } from "react";
import React from 'react';
function Book(){
    var [fslot,setFSlot]=useState();
    var [sslot,setSSlot]=useState();
    var x= new Date();
    var tog=React.useRef(null);
    var dis=React.useRef(null);
    var di=React.useRef(null);
    var cola=React.useRef(null);
    var colb=React.useRef(null);
    x.setDate(x.getDate()+5);
    var m=x.getMonth();
    var year=x.getFullYear();
    var c= [0,0];
    function proceeda(){
        di.current.classList.remove("close");
        c[0]=1;
        c[1]=0;
        if(c[0]==1){
            cola.current.style.backgroundColor="green";
            cola.current.style.borderColor="green"
            colb.current.style.borderColor="darkblue"
            cola.current.style.color="white";
            colb.current.style.backgroundColor="white";
            colb.current.style.color="black";
    
        }
        
        //dis.current.classList.add("gr");
        
            

       
            
    }
    function proceedb(){
       
        di.current.classList.remove("close");
        c[1]=1;
        c[0]=0;
        if(c[1]==1){
            colb.current.style.backgroundColor="green";
            cola.current.style.backgroundColor="white";
            cola.current.style.color="black";
            colb.current.style.color="white";
            colb.current.style.borderColor="green"
            cola.current.style.borderColor="darkblue"
        }
        
 
    }
    function changeDisplay(x){
        dis.current.classList.remove("close");
        
       
        fetch("https://mentorplus.s3.ap-south-1.amazonaws.com/config/availability.json",{
            method:"get",
            headers:{"content-type":"application/json"}
        }).then((res)=>res.json()).then((result)=>{
            let obj= result.find(r=>r.date==`${year}-0${m}-${x}T00:00:00.000Z`);
            
            setFSlot(obj.available[0].hour);
            setSSlot(obj.available[1].hour);
        })

    }
    var months=["January","Feburary","March","April","May","June","July","August","September","October",
"November","December"];
  var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var arr=[0,1,2,3,4,5,6];
  for(let i=0;i<7;i++){
      if(x.getDay()+arr[i]<7){
          arr[i]+=x.getDay();
      }
      else{
          arr[i]=arr[i]+x.getDay()-7;
      }
  }
  
  
  var month=months[x.getMonth()];
  
  console.log(x.getDate());
    return(
        <>
        <div id="topnav">
            
            <div id="mp">
            <span style={{color:"darkblue",display:"inline-block",fontWeight:"bolder"}}>Mentor</span>
            <span style={{color:"red",display:"inline-block",fontWeight:"bolder"}}>Plus</span>   
            </div>
            <div id="bar">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div id="head">
        <div id="navbar">
        <div id="logo">
            <h1 style={{color:"darkblue",display:"inline-block",fontWeight:"bolder"}}>Mentor</h1>
            <h1 style={{color:"red",position:"relative",left:"-30px",display:"inline-block",fontWeight:"bolder"}}>Plus</h1>
        </div>
            <h3>Home</h3>
            <h3>Profile</h3>
            <h3></h3>
            <h3></h3>
            <h3></h3>
        </div>
        <div id="home">
        
        <h1 id="colorful">Book Demo Session Slot</h1>
        <h2 className="slota">Select Date</h2>
        <div id="boxes">
            
         <div onClick={()=>changeDisplay(x.getDate())}>
             
             <h4>{days[arr[0]]}</h4>
             <h3>{x.getDate()}</h3>
             <h4>{month}</h4>
         </div>
         <div onClick={()=>changeDisplay(x.getDate()+1)}>
             <h4>{days[arr[1]]}</h4>
             <h3>{x.getDate()+1}</h3>
             <h4>{month}</h4>
         </div>
         <div onClick={()=>changeDisplay(x.getDate()+2)}>
             <h4>{days[arr[2]]}</h4>
             <h3>{x.getDate()+2}</h3>
             <h4>{month}</h4>
         </div>
         
         
         <div onClick={()=>changeDisplay(x.getDate()+3)}>
             <h4>{days[arr[3]]}</h4>
             <h3>{x.getDate()+3}</h3>
             <h4>{month}</h4>
         </div>
         <div onClick={()=>changeDisplay(x.getDate()+4)}>
             <h4>{days[arr[4]]}</h4>
             <h3>{x.getDate()+4}</h3>
             <h4>{month}</h4>
         </div>
         <div onClick={()=>changeDisplay(x.getDate()+5)}>
             <h4>{days[arr[5]]}</h4>
             <h3>{x.getDate()+5}</h3>
             <h4>{month}</h4>
        
         </div>
     </div>
     <div className="slot close" ref={dis}>
         <h2>Select Slot</h2>
         <button onClick={proceeda} ref={cola}>{fslot}PM - {fslot+1}PM</button>
         <button onClick={proceedb} ref={colb}>{sslot}PM - {sslot+1}PM</button>
     </div>
     <div id="pay" className='close' ref={di}>
         <button>Proceed to Pay</button>
     </div>
     </div>
     
     </div>
     
        </>
    )
}
export default Book;