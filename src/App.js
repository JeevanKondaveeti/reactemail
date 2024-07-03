import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

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
          console.log(e);
          alert('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <center>
    <form ref={form} onSubmit={sendEmail} style={{display:"flex" , width:"50%" ,
      flexDirection:"column" , margin:"5%" , border:"1px solid grey" , padding:"6%"}}>
      <TextField id="" label="Name" variant="outlined" name="user_name" style={{padding:"1%"}}/>
      <br />
      <TextField id="outlined-basic" label="Email" variant="outlined" name="user_email" style={{padding:"1%"}}/>
      <br />
      <TextField id="outlined-basic" label="Message" variant="outlined" name="message" multiline maxRows={4} style={{padding:"1%"}}/>
      <Button variant="contained" type="submit" value="Send">Submit</Button>
      <br />
    </form>
    </center>
  );
};

export default App;