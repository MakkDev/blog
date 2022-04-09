import React from 'react'
import "./contact.css"

export default function Contact() {
  return (
    <>
        <div className='write'>
            <form className='writeForm'>
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
                <button type='submit'> Submit </button>  
                
            </form>
            
        </div>
        
        </>
    )
}
