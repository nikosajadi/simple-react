import React, { Children } from "react";
import Button from "../Button/Button";
import { useState } from "react";


const Contact = () => {
  const [subject, setSubject]= useState('')
 const [textarea,setTxestarea]=useState('')



  const HandleChangeSubject = (event) =>{
    setSubject(event.target.value)
  }
  const HandleChangeTextArea =(event)=>{
    setTxestarea(event.target.value)
  }
  const HandleSubmit = () =>{
    console.log('Submitted')
    console.log('subject', subject)
   console.log('texteraa', textarea)
  }  

  return (
    <div className="Contact">
      <p>Contact me at: <a href="mailto:Nasibeh.sajjadi@gmail.com">Nasibeh.sajjadi@gmail.com</a></p>
 
      <div className="formControl">
      <input onChange={HandleChangeSubject} type="text" placeholder="subject" />
      <div>Subject:{subject}</div>
      </div>
      <div className="formControl">
          <textarea onChange={HandleChangeTextArea}>Your Request</textarea>
      </div>
      <div className="formControl">
      <Button handleClick={HandleSubmit} >Submit</Button>
      </div> 
     
    </div>
  );
}

export default Contact;
