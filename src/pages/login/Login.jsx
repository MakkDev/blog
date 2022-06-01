import "./login.css"
import { useEffect, useState } from 'react'
import { signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { Link, } from 'react-router-dom';
import Blog from "../blog/Blog";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState([]);
    const [registering, setRegistering] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
        })
    })

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const signIn = async () => {
        await signInWithEmailAndPassword(auth, email, password).then(() => {
            setEmail("");
            setPassword("");
        })
            .catch((error) => {
                alert("Invalid Email or Password");
            })
    };

    const register = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
            .catch((error) => alert(error.message));
        setPassword("")
        setEmail("")
    };

    const handleSignOut = () => {
        signOut(auth).catch((error) => alert(error.message));
    }



    return (
        <div className='loginPage'>
            {auth.currentUser ? <div> <Blog /> </div> : <>
                {registering ? (<> <h1 style={{marginBottom:"0.5%", color:"#CCC"}}> Registering! </h1>
                <span style={{marginTop:"0.5%",color:"#CCC"}}>Email:</span>  
                    <input value={email} onChange={handleEmailChange} className="login" />
                    <span style={{color:"#CCC"}}> Password: </span>  
                    <input type="password" value={password} onChange={handlePasswordChange} className="login" />
                    <Stack sx={{mt:"1%"}} direction="row" spacing={2}>
                        <Button sx={{fontSize:"70%"}} variant="contained" onClick={register}>Register</Button>
                        <Button sx={{fontSize:"70%"}} variant="contained" color="error" onClick={() => setRegistering(false)}> X</Button>
                    </Stack>


                </>) : (<> <h1 style={{marginBottom:"0.5%", color:"#CCC"}}>Welcome!</h1>
                  <span style={{marginTop:"0.5%",color:"#CCC"}}>Email:</span>  
                    <input type="email" value={email} onChange={handleEmailChange} className="login" />
                  <span style={{color:"#CCC"}}> Password: </span>  
                    <input type="password" value={password} onChange={handlePasswordChange} className="login" />
                    <Stack sx={{mt:"1%"}} direction="row" spacing={2}> 
                        <Button sx={{fontSize:"70%"}} variant="outlined" type="submit" onClick={signIn} >
                        Login </Button>
                        <Button sx={{fontSize:"70%"}} variant="contained" onClick={() => setRegistering(true)}>
                        Register </Button>
                    </Stack>
                </>


                )}
            </>}




        </div>
    )
}
