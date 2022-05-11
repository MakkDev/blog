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
                {registering ? (<> <h1> Registering! </h1>
                    Email:
                    <input onKeyPress= {(event) => {
            if (event.key === '13') {
              console.log('Enter key pressed');            }
    }} value={email} onChange={handleEmailChange} className="login" />
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} className="login" />
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" onClick={register}>Register</Button>
                        <Button variant="contained" color="error" onClick={() => setRegistering(false)}> X</Button>
                    </Stack>


                </>) : (<> <h1>Welcome!</h1>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} className="login" />
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} className="login" />
                    <Stack direction="row" spacing={2}> 
                        <Button className="regbutton" variant="outlined" type="submit" onClick={signIn} >
                        Login </Button>
                        <Button className="regbutton" variant="contained" onClick={() => setRegistering(true)}>
                        Register </Button>
                    </Stack>
                </>


                )}
            </>}




        </div>
    )
}
