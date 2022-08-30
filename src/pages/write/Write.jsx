import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import { storage } from '../../firebase';
import './write.css';
import { useNavigate } from 'react-router-dom'
import { ref, uploadBytes, getDownloadURL, getMetadata } from "firebase/storage"
import { v4 } from 'uuid';


export default function Write() {

    const [title, setTitle] = useState("");
    const [postText1, setPostText1] = useState("");
    const [postText2, setPostText2] = useState("");
    const [postText3, setPostText3] = useState("");
    const [postDate, setPostDate] = useState("");
    const [postCategory, setPostCategory] = useState("");
    const [imageObject, setImageObject] =  useState(null);
    const [blogUrl, setBlogUrl] = useState("");
    const [imageUploaded, setImageUploaded] = useState(false);
    
   let navigate = useNavigate();
    
   const singleCollectionRef = collection(db, "single");
   const blogThumbnailRef = ref(storage, `/blogThumbnails/` + v4()  + "-blog thumbnail")

   const handleBlogThumbnail = (e) => {
    if (e.target.files[0]) {
        setImageObject(e.target.files[0])
        setImageUploaded(true)
    }
}

   const handleThumbnailSubmit = () => {
    uploadBytes(blogThumbnailRef, imageObject)
    .then(() => { getDownloadURL(blogThumbnailRef)
    .then( url => {setBlogUrl(url);}); 
    setImageObject(null)
    })
}

    const createPost = async () => {
        await addDoc(singleCollectionRef, 
            {title, postText1, postText2, postText3, postDate, postCategory, blogUrl });
         navigate("/");
         setImageUploaded(false)
    };

    return (
        <>
        <div className='write'>           
                <div className='writeFormGroup'>
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <button className='submitButton' onClick={handleThumbnailSubmit}> {!imageUploaded ? "Submit Image" : "Image Uploaded!"} </button>   
                    <input  id='fileInput' type="file" style={{ display: "none" }} onChange={handleBlogThumbnail} />
                    <input className='textInputTitle' placeholder='Title' type="text" autoFocus={true} 
                        onChange={(event) => {setTitle(event.target.value); }} />
                </div>
                <div className='paragraphs'> 
                <div className='paragraph1'>
                    <textarea className='textInput' placeholder="Paragraph 1" type="text" 
                        onChange={(event) => {setPostText1(event.target.value);}}></textarea>               
                </div>
                <div className='paragraph2'>
                    <textarea className='textInput' placeholder="Paragraph 2" type="text" 
                        onChange={(event) => {setPostText2(event.target.value);}}></textarea>               
                </div>
                <div className='paragraph3'>
                    <textarea className='textInput' placeholder="Paragraph 3" type="text" 
                        onChange={(event) => {setPostText3(event.target.value);}}></textarea>               
                </div>
                </div>

                <input type="text" placeholder='Category' onChange={(event) => {setPostCategory(event.target.value);}}/>
                <br/>
                <br/>
                <input type="date" onChange={(event) => {setPostDate(event.target.value);}}/>
                <br/>
                <br/> 
                <button className='submitButton' onClick={createPost}> Submit </button>   
            
        </div>
        
        </>
    )
}
