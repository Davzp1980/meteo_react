import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Input from "./InpitForm";




function Login() {
    const [inpname, setName] = useState("")
    const [inppassword, setPassword] = useState("")
    const [login, setRedirect] = useState(false)
    const [err, setErr]= useState(false);
    const [signUp, setSignUp] = useState(false)
    
    
    const signIn = async (e) => {
        e.preventDefault()
        
        await axios('http://localhost:8000/logout',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            withCredentials:'include',
            data: JSON.stringify({
                name:inpname,
                password:inppassword
            })
        }).catch(function(error){
            console.log(error.response.status)
            setErr(true)
            
        })
    }

    
    
    
    return (
        
        <div className="login">
            
            <input name="name" placeholder="name" value={inpname}
                onChange={(e) => setName(e.target.value)} />
            <input name="password" placeholder="password" value={inppassword}
                onChange={(e) => setPassword(e.target.value)}/>
            <p><button type="button" onClick={signIn}>Sign In</button></p>
            <p><button type="button" onClick={signUP}>Sign Up</button></p>
        </div>
    )
}

export default Login