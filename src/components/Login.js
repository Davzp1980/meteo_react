import React, { useState } from "react";
import axios from "axios";



function Login() {
    const [inpname, setName] = useState("")
    const [inppassword, setPassword] = useState("")
    
    const signIn = async (e) => {
        e.preventDefault()
        console.log(inpname,inppassword)
        await axios('http://localhost:8000/sign-in',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            withCredentials:'include',
            data: JSON.stringify({
                name:inpname,
                password:inppassword
            })
        
                
        }).then((r => {
                console.log(r)
            }))
        
    }
        
    /*
    function signIn(){

        axios('http://localhost:8000/sign-in',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials:'include',
            body: JSON.stringify({
                name:inpname,
                password:inppassword
            })
        
                
        }).then((r => {
                console.log(r)
            }))
    }
    */
    
    function signUP(){

     axios.post('http://localhost:8000/create-user',{
                name: inpname,
                password: inppassword
            }).then((r => {
                setName('')
                setPassword('')
                console.log(r)

            }))
            
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