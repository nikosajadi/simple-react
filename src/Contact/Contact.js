import React, { Children } from "react";
import Button from "../Button/Button";

const Contact = () => {
  const HandleChangeInputText = (event) =>{
    console.log('event', event.target.value)
  }
  const HandleChangeTextArea =(event)=>{
    console.log('textarea', event.target.value)
  }
  const HandleSubmit = () =>{
    console.log('Submitted')
  }  

  return (
    <div className="Contact">
      <p>Contact me at: <a href="mailto:Nasibeh.sajjadi@gmail.com">Nasibeh.sajjadi@gmail.com</a></p>

      <div className="formControl">
      <input onChange={HandleChangeInputText} type="text" placeholder="subject" />
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
