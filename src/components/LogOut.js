import axios from "axios";






function LogOut() {

    axios('http://localhost:8000/logout',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        withCredentials:'include',
        
    })    
    return (
        
        <div>            
            <h1 className="logout-header">You are logged out</h1>
        </div>
    )
}

export default LogOut