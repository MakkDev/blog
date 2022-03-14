import "./login.css"
import { useEffect, useState } from 'react'
import { signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import {Link, } from 'react-router-dom';
import Blog from "../blog/Blog";


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
            {auth.currentUser ? <div> <Blog/> </div> : <>
                {registering ? (<> <h1> Registering! </h1>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} className="login" />
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} className="login" />

                    <button onClick={register}>Register</button>
                    <button onClick={() => setRegistering(false)}> X</button>

                </>) : (<> <h1>Welcome!</h1>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} className="login" />
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} className="login" />

                    <button type="submit" onClick={signIn} >Login</button>
                    <button onClick={() => setRegistering(true)}>Register</button> </>

                )}
            </>}




        </div>
    )
}
