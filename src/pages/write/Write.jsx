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

    const [imageUpload, setImageUpload] =  useState(null);
    const [blogUrl, setBlogUrl] = useState([]);


    
   let navigate = useNavigate();
    
   const singleCollectionRef = collection(db, "single");
   const blogThumbnailRef = ref(storage, `/blogThumbnails/` + v4()  + "-blog thumbnail")

   const handleBlogThumbnail = (e) => {
    if (e.target.files[0]) {
        setImageUpload(e.target.files[0])
    }
}

   const handleBlogSubmit = () => {
    uploadBytes(blogThumbnailRef, imageUpload).then(() => {
        getDownloadURL(blogThumbnailRef).then((blogUrl) => {
            setBlogUrl(blogUrl);
        }); setImageUpload(null)
    })
}

    const createPost = async () => {
        await addDoc(singleCollectionRef, 
            {title, postText1, postText2, postText3, postDate, postCategory, });
        navigate("/");
    };

    return (
        <>
        <div className='write'>           
                <div className='writeFormGroup'>
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <button onClick={handleBlogSubmit}> Submit </button>   
                    <input  id='fileInput' type="file" style={{ display: "none" }} onChange={handleBlogThumbnail} />
                    <input className='textInputTitle' placeholder='Title' type="text" autoFocus={true} 
                        onChange={(event) => {setTitle(event.target.value); }} />
                </div>
                <div className='writeFormGroup'>
                    <textarea className='textInput1' placeholder="Paragraph 1" type="text" 
                        onChange={(event) => {setPostText1(event.target.value);}}></textarea>               
                </div>
                <div className='writeFormGroup'>
                    <textarea className='textInput1' placeholder="Paragraph 2" type="text" 
                        onChange={(event) => {setPostText2(event.target.value);}}></textarea>               
                </div>
                <div className='writeFormGroup'>
                    <textarea className='textInput1' placeholder="Paragraph 3" type="text" 
                        onChange={(event) => {setPostText3(event.target.value);}}></textarea>               
                </div>


                <input type="text" placeholder='Category' onChange={(event) => {setPostCategory(event.target.value);}}/>
                <br/>
                <br/>
                <input type="date" onChange={(event) => {setPostDate(event.target.value);}}/>
                <br/>
                <br/> 
                <button onClick={createPost}> Submit </button>   
            
        </div>
        
        </>
    )
}
