import React from "react";
import Input from "./components/InpitForm";
import Header from "./components/Header";
import Login from "./components/Login";
import Inputdata from "./components/InputData";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Wrong_Login from "./components/Wrong_ligin";



function App() {
    
    return (
      <div>
          <Header/>
        
          <main>
           
          </main>
        
          <aside>
            
          </aside>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/wrong" element={<Wrong_Login/>}/>
          <Route path="/sign-in" element={<Login/>}/>
          <Route path="/object" element={<Input/>}/>
        </Routes>
      </div>
    );
  
}

export default App;
