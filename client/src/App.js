import Sidebar from './Components/Sidebar/Sidebar.jsx'
import React, { useState, useEffect } from 'react';
import ContentComponent from './ContentComponent.jsx';
import Login from './Pages/Login.jsx';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home.jsx';
function App() {
  const [token, setToken] = useState("");
  const [sesion, setSesion] = useState(false);
  const [id_enfermero, setId_enfermero] = useState("");
  const [nombre_usuario, setNombre_usuario] = useState("");
  useEffect(() => {
    if(token !== "" && token !== localStorage.getItem('token') && sesion){
      localStorage.setItem('token', token)
    }
    if(id_enfermero !== "" && id_enfermero !== null && id_enfermero !== localStorage.getItem('id_enfermero') && sesion){
      localStorage.setItem('id_enfermero', id_enfermero)
    }
    if(nombre_usuario !== "" && nombre_usuario !== null && nombre_usuario !== localStorage.getItem('nombre_usuario') && sesion){
      localStorage.setItem('nombre_usuario', nombre_usuario)
    }
  }, [token, id_enfermero, nombre_usuario]);
  console.log(nombre_usuario);  
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Login token={token} setToken={setToken} setId_enfermero={setId_enfermero} sesion={sesion} setSesion={setSesion} setNombre_usuario={setNombre_usuario}/>} />
        <Route path="/Hospital" element={<Home token={token} nombre_usuario={nombre_usuario} id_enfermero={id_enfermero}/>} />

      </Routes>
    </Router>

  );
}

export default App;
