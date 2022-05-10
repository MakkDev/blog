import React from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { FirebaseError } from 'firebase/app'
import { db } from '../../firebase'
import { Navigate, useNavigate } from 'react-router-dom'

export default function CreatePost() {

    const navigate = useNavigate();
    const singlePostsCollectionRef = collection(db, "single")
    const createPost = async () => {
        await addDoc(singlePostsCollectionRef, {title, postDesc, postDate});
        navigate("/");
    };

  return (
    <div>
        
    </div>
  )
}
