import React from 'react';
//import  ReactDOM  from "react-dom";
import App from './App';
import * as ReactDOMClient from 'react-dom/client'
import './css/main.css'
import './css/table.css'
import './css/input_data.css'
import { BrowserRouter } from 'react-router-dom';




/*
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </React.StrictMode>,
    document.getElementById('app')
)
*/


const app = ReactDOMClient.createRoot(document.getElementById("app"))

app.render(
  
  <React.StrictMode>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </React.StrictMode>,
)

