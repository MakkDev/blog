import { useEffect, useState } from 'react'
import { ref, uploadBytes, getDownloadURL, getMetadata } from "firebase/storage"
import { updateProfile } from "firebase/auth";
import { storage } from '../../firebase';
import { Avatar } from '@mui/material';
import { auth } from "../../firebase";
import "./profile.css";
import { useContext } from 'react';
import { urlContext } from '../../context';

export default function Profile() {

    const { url, setUrl } = useContext(urlContext);
    const [profilePic, setProfilePic] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
        })
    })

    const handleProfilePic = (e) => {
        if (e.target.files[0]) {
            setProfilePic(e.target.files[0])
        }
    }


    const handleSubmit = () => {
        const imageRef = ref(storage, "/profilePics/" + user.uid + "profilePic")
        uploadBytes(imageRef, profilePic).then(() => {
            getDownloadURL(imageRef).then((url) => {
                setUrl(url);
            }).catch(error => {
                alert(error.message)
            }); setProfilePic(null)
        }).catch(error => {
            alert(error.message)
        });
    }

    const imageRef = ref(storage, "/profilePics/" + user.uid + "profilePic")

    return (
        <> {auth.currentUser ? <div className='profile'>
            <Avatar src={ getMetadata(imageRef).then((metadata) => { })
                .catch((error) => { })} sx={{ width: 150, height: 150 }} />
            <input className='fileUpload' type="file" onChange={handleProfilePic} />
            <button type="submit" onClick={handleSubmit}> Submit </button>
        </div> : <p> You Are Not Signed In!</p>} </>
    )
}
