import React from 'react'
import "./contact.css"
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography'


export default function Contact() {


  let navigate = useNavigate();

  return (
    <>
        <div className='container'>
            <Typography sx={{mb:"5%", fontSize:"7rem", fontFamily: 'Cardo, serif'}} color="black">Contact Makk</Typography>
                <div className='contact-info__container'>
                    <input className='contact-info' placeholder='Name' type="text" autoFocus={true} />
                    <input className='contact-info' placeholder='Email' type="text" autoFocus={true} />
                
                    <textarea className='textInput1' placeholder="Message..." type="text"></textarea>
                                  
                </div>
                <Button className='submitButton' sx={{fontSize:"130%", backgroundColor: "#45a179"}} onClick={() => {navigate("/"); alert("Successfully Submitted!")}} variant="contained" > Submit </Button>
                
                
            
            
        </div>
        
        </>
    )
}
