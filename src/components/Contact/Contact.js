import React, { useState } from "react";
import Button from "../Button/Button";

/**
 * Contact Component
 * 
 * A form that allows users to input a subject and a request message.
 * Upon submission, the subject and request are logged to the console.
 */
const Contact = () => {
  // State variables to hold the form input values
  const [subject, setSubject] = useState('');
  const [textarea, setTextarea] = useState('');

  /**
   * HandleChangeSubject
   * 
   * Updates the subject state when the user types in the subject input field.
   * @param {object} event - The event object containing the new input value.
   */
  const HandleChangeSubject = (event) => {
    setSubject(event.target.value);
  };
   

  /**
   * HandleChangeTextArea
   * 
   * Updates the textarea state when the user types in the textarea field.
   * @param {object} event - The event object containing the new input value.
   */
  const HandleChangeTextArea = (event) => {
    setTextarea(event.target.value);
  };

  /**
   * HandleSubmit
   * 
   * Logs the current subject and textarea values to the console when the form is submitted.
   */
  const HandleSubmit = () => {
    console.log('Submitted');
    console.log('subject:', subject);
    console.log('textarea:', textarea);
  };

  return (
    <div className="Contact">
      {/* Static email link */}
      <p>Contact me at: <a href="mailto:Nasibeh.sajjadi@gmail.com">Nasibeh.sajjadi@gmail.com</a></p>

      {/* Input for subject */}
      <div className="formControl">
        <input onChange={HandleChangeSubject} type="text" placeholder="subject" />
        <div>Subject: {subject}</div>
      </div>

      {/* Textarea for the request message */}
      <div className="formControl">
        <textarea onChange={HandleChangeTextArea} placeholder="Your Request"></textarea>
      </div>

      {/* Submit button to handle form submission */}
      <div className="formControl">
        <Button handleClick={HandleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default Contact;
