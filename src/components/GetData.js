import React, {  useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function GetData() {
    
  const [data, setData] = useState([])
  const [get, setGet] = useState("")
  const [err, setErr] = useState(false)
     
  function submit(event) {
    event.preventDefault()

    axios.get('http://localhost:8000/object', {
      withCredentials: true,
      params: {
        object: get
      }
    })
      .then(datas => {
        setData(datas.data);
        console.log(datas)
              
      }).catch((err) => {
        setErr(true)
      })
  }

  if (err) {
    return <Navigate to='/sign-in' />
  }
    
  return (
      
    <div className="table-data">
      <form className="object">
        <select onChange={e => setGet(e.target.value)}>
          <option value="">--Choose an object--</option>
          <option value="lux" >lux</option>
          <option value="laboratory" >laboratory</option>
          <option value="kitchen" >kitchen</option>
        </select>
          
        <button onClick={submit}>Sumbit</button>
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>Обьект</th>
              <th>Темперетура</th>
              <th>Влажность</th>
              <th>Давление</th>
              <th>Дата</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => (
              <tr key={e.id}>
                <td>{e.object}</td>
                <td>{e.temperetura}</td>
                <td>{e.humidity}</td>
                <td>{e.pressure}</td>
                <td>{e.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default GetData;
