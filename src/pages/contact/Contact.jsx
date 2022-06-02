import React from 'react'
import "./contact.css"
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography'


export default function Contact() {


  let navigate = useNavigate();

  return (
    <>
        <div className='write1'>
            <Typography sx={{mb:"5%", fontSize:"40px"}} color="#CCC">Contact Crypto Simplified</Typography>
                <div className='writeFormGroup1'>
                    <input className='textInputTitle1' placeholder='Subject' type="text" autoFocus={true} />
                
                    <textarea className='textInput1' placeholder="How Can We Help You?" type="text"></textarea>
                                  
                </div>
                <Button sx={{fontSize:"130%"}} onClick={() => {navigate("/"); alert("Successfully Submitted!")}} color="success" variant="contained" > Submit </Button>
                
                
            
            
        </div>
        
        </>
    )
}
