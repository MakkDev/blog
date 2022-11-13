import { AppBar, Toolbar, CardMedia, Box, Card, CardContent, Container, Button } from '@mui/material'
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import MakkTalksLogo from "../images/MakkTalksLogo.png"
import { Link } from 'react-router-dom'
import { auth } from '../firebase' 

export default function NewTopbar() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
        })
    })

    const handleSignOut = () => {
        signOut(auth).catch((error) => alert(error.message));
    }

    return (
        
            <AppBar sx={{position:"sticky", backgroundColor: "#53c28b" }}> 
            <Toolbar >
            <Box sx={{display:'flex', flex:"1", justifyContent:"center", alignItems:"center",}}>
                <img style={{  width: '9.6rem', }} src={MakkTalksLogo} />
                {/* <Box sx={{  ml:"3%", mr:"1%"}}>
                <a style={{ textDecoration: 'none', color: "inherit" }} href="https://www.instagram.com/makk.eth/" target="_blank"> <i className="topIcon fab fa-instagram-square" /> </a>
                <a style={{ textDecoration: 'none', color: 'inherit' }} href="https://www.youtube.com/channel/UCEnP8E_-fWRKPGxp48dDUkg" target="_blank"> <i className="topIcon fab fa-youtube-square"></i> </a>
                <a style={{ textDecoration: 'none', color: 'inherit' }} href="https://github.com/MakkDev" target="_blank"> <i className="topIcon fab fa-github-square"></i> </a>
            </Box> */}

    
        <Box sx={{display:"flex", flex:"1", alignItems:"center", justifyContent:"center",}} >          
                <Button href='/' sx={{mr:"3%", fontWeight:"600", fontFamily:"Montserrat, sans-serif", fontSize:"110%", px:"1rem", borderRadius:"1.9rem", textDecoration: 'none', color:"#1e1e1e", justifyContent:"center", backgroundColor:"#5AA882", "&:hover": {backgroundColor:"#4EB683", color: '#1e1e1e', filter: "drop-shadow(0 0 0.2rem black)"} }} >Home</Button>
                <Button href='/blog' sx={{mr:"3%", fontWeight:"600", fontFamily:"Montserrat, sans-serif", fontSize:"110%", px:"1rem", borderRadius:"1.9rem", textDecoration: 'none', color:"#1e1e1e", justifyContent:"center", backgroundColor:"#5AA882", "&:hover": {backgroundColor:"#4EB683", color: '#1e1e1e', filter: "drop-shadow(0 0 0.2rem black)"} }} >Blog</Button>
                <Button href='/videos' sx={{mr:"3%", fontWeight:"600", fontFamily:"Montserrat, sans-serif", fontSize:"110%", px:"1rem", borderRadius:"1.9rem", textDecoration: 'none', color:"#1e1e1e", justifyContent:"center", backgroundColor:"#5AA882", "&:hover": {backgroundColor:"#4EB683", color: '#1e1e1e', filter: "drop-shadow(0 0 0.2rem black)"} }} >Videos</Button>
                <Button href='/contact' sx={{mr:"3%", fontWeight:"600", fontFamily:"Montserrat, sans-serif", fontSize:"110%", px:"1rem", borderRadius:"1.9rem", textDecoration: 'none', color:"#1e1e1e", justifyContent:"center", backgroundColor:"#5AA882", "&:hover": {backgroundColor:"#4EB683", color: '#1e1e1e', filter: "drop-shadow(0 0 0.2rem black)"} }} >Contact</Button>
                {/* {auth.currentUser ? (<>
                    <li onClick={handleSignOut} >SIGN OUT</li>                
                </>) : (
                    <Button href="/login" sx={{mr:"3%", fontSize:"110%", borderRadius:"8px", textDecoration: 'none', color: '#1e1e1e', justifyContent:"center", "&:hover": {backgroundColor:"#3C8C64", filter: "drop-shadow(0 0 0.5rem black)"} }} >LOGIN</Button>)
                } */}
                </Box>
                </Box>
            </Toolbar> </AppBar>
    )
}

    //    <Card sx={{top:"50%",backgroundColor:"black", display:"flex", justifyContent:"center", alignItems:"center",width:"100%"}}>
    //    <CardMedia sx={{width:"80%"}} component="img" image='https://i.ibb.co/4NhwrBg/Crypto-Blog-Cover.gif'/>
    //    </Card>


