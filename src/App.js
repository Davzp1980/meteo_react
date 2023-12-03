import React from "react";
import Input from "./components/InpitForm";
import Header from "./components/Header";
import Login from "./components/Login";
import Inputdata from "./components/InputData";




function App() {
    
    return (
      <div>
          <Header/>
        
          <main>
            <Input />
          </main>
        
          <aside>
            <Inputdata />
            <Login />
          </aside>
          
      </div>
    );
  
}

export default App;
