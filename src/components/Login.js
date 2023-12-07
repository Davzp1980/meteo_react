import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";





function Login() {
    const [inpname, setName] = useState("")
    const [inppassword, setPassword] = useState("")
    const [login, setRedirect] = useState(false)
    const [err, setErr]= useState(false);
    
    
    
    const signIn = async (e) => {
        e.preventDefault()
        
        await axios('http://localhost:8000/sign-in',{
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
        setRedirect(true)
     
    }
    if (err) {
        return <Navigate to='/wrong'/>
    }
    if (login) {
        return <Navigate to='/object'/>
    }

    
    function signUP(){

     axios.post('http://localhost:8000/create-user',{
                name: inpname,
                password: inppassword
            }).then((r => {
                setName('')
                setPassword('')
            }))
        
    }
    
    return (
        
        <div >
            <div className="login">
                <input name="name" placeholder="name" value={inpname}
                    onChange={(e) => setName(e.target.value)} />
                <input name="password" placeholder="password" value={inppassword}
                    onChange={(e) => setPassword(e.target.value)}/>
                <div className="sign-buttons">
                    <p className="signIn-button"><button type="button" onClick={signIn}>Sign In</button></p>
                    <p><button type="button" onClick={signUP}>Sign Up</button></p>
                    
                </div>
               
                
            </div>
           
            
        </div>
    )
}

export default Login