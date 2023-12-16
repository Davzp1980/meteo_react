import React from "react";
import GetData from "./components/GetData";
import Header from "./components/Header";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import WrongLogin from "./components/Wrong_login";
import LogOut from "./components/LogOut";
import Footer from "./components/Footer";



function App() {
    
    return (
      <div>
        <header>
            <Header/>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/wrong" element={<WrongLogin/>}/>
            <Route path="/sign-in" element={<Login/>}/>
            <Route path="/object" element={<GetData/>}/>
            <Route path="/logout" element={<LogOut/>}/>
          </Routes>
        </main>
        <footer>
          <Footer />
        
        </footer>
      </div>
    );
  
}

export default App;
