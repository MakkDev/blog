import React from 'react'
import "./contact.css"
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


export default function Contact() {


  let navigate = useNavigate();

  return (
    <>
        <div className='write'>
                <div className='writeFormGroup'>
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input id='fileInput' type="file" style={{ display: "none" }} />
                    <input className='textInputTitle' placeholder='Subject' type="text" autoFocus={true} />
                </div>
                <div className='writeFormGroup'>
                    <textarea className='textInput' placeholder="How Can We Help You?" type="text"></textarea>
                                  
                </div>
                <Button onClick={() => {navigate("/"); alert("Successfully Submitted!")}} color="success" variant="contained" > Submit </Button>
                
                
            
            
        </div>
        
        </>
    )
}
