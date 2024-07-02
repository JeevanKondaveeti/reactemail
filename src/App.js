import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function App(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_favtdcd', 'template_ulg1dnl', form.current, {
        publicKey: 'hriIelF1drSk8Kfex',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <center>
    <form ref={form} onSubmit={sendEmail} style={{display:"flex" , width:"50%" ,
      flexDirection:"column" , margin:"5%" , border:"2px solid blue" , padding:"6%"}}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <br />
      <label>Email</label>
      <input type="email" name="user_email" />
      <br />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
      <br />
    </form>
    </center>
  );
};

export default App;