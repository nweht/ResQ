import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import SecondPage from './components/SecondPage';
import DronSub from "./components/DronSub";
import Salvavidas from "./components/Salvavidas";
import Andas from "./components/Andas";

function App(){
  return(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<><HomePage/></>}></Route>
  <Route path="/modosDeUso" element={<><SecondPage/></>}></Route>    
  <Route path="/dronSub" element={<><DronSub/></>}></Route>  
  <Route path="/salvavidas" element={<><Salvavidas/></>}></Route>  
  <Route path="/andas" element={<><Andas/></>}></Route>  
</Routes>
    </BrowserRouter>

  )
}

export default App;
