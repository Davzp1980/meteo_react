import React, { useState } from "react";
import axios from "axios";


function Inputdata() {

    const [object, setObject] = useState("")
    const [temperetura, setTemperetura] = useState('')
    const [humidity, setHumidity] = useState('')
    const [pressure, setPressure] = useState('')
    
    function Submit (){
        
          axios('http://localhost:8000/add-data',{
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            withCredentials: 'include',
            data: JSON.stringify({
              object: object,
              temperetura: parseFloat(temperetura),
              humidity: parseInt(humidity,0),
              pressure: parseInt(pressure,0)
            })
            
      }).then((r => {
          setObject('')
          setTemperetura('')
          setHumidity('')
          setPressure('')        
        console.log(r.config.data)
      }))

    }

    return(
        <div className="input_data" >
            
            <input value={object} placeholder="object" onChange={(e)=> setObject(e.target.value)} /><br></br>
            <input value={temperetura} placeholder="temperetura" onChange={(e)=> setTemperetura(e.target.value)}/><br></br>
            <input value={humidity} placeholder="humidity" onChange={(e)=> setHumidity(e.target.value)}/><br></br>
            <input value={pressure} placeholder="pressure" onChange={(e)=> setPressure(e.target.value)}/><br></br>
            <button type="button" onClick={Submit} >Add Data</button>
            
        </div>
    )
}






export default Inputdata