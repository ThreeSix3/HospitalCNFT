import data from '../Components/Cards/PatientsPanel/data.js';
import EditPatientsPanel from '../Components/Cards/EditPatientsPanel/EditPatientsPanel.jsx';
import DefaultCard from '../Components/Cards/DefaultCard.jsx'
import Button from '../Components/Buttons/Button.jsx';
import { useState, useEffect } from 'react';
import { iniciarSesion } from '../Functions/dbFunctions.js';
import { useNavigate } from 'react-router-dom';

export default function Login({token, setToken, setId_enfermero, setSesion, setNombre_usuario}) {
    const navigate = useNavigate();
    const [Usuario, setUsuario] = useState("");
    const [Contrasena, setContrasena] = useState("");
    const [mantenerSesion, setMantenerSesion] = useState(false);
    useEffect(()=>{
        if(localStorage.getItem('token') !== "" && localStorage.getItem('token') !== undefined){
          setToken(localStorage.getItem('token'));
        }
        if(localStorage.getItem('id_enfermero') !== "" && localStorage.getItem('id_enfermero') !== undefined ){
          setId_enfermero(localStorage.getItem('id_enfermero'));
        }
        if(localStorage.getItem('nombre_usuario') !== "" && localStorage.getItem('nombre_usuario') !== undefined ){
            setNombre_usuario(localStorage.getItem('nombre_usuario'));
          }
      },[]);
    async function inicioSesion(){
        try {
            const data = await iniciarSesion(Usuario, Contrasena);
            console.log(data);
            if (typeof data === "object" && data.hasOwnProperty("token")) {
                setToken(data.token);
                setId_enfermero(data.id_enfermero);
                setNombre_usuario(data.nombre_usuario);
                if(mantenerSesion){
                    setSesion(true);
                }

            } else {
              throw new Error("Los datos ingresados no son válidos");
            }
          } catch (e) {
            console.log(e);
          }
    }
    useEffect(() => {
        // Verificar si hay un token de autenticación
        
        if (token) {
          
          navigate('/Hospital');
        }
      }, [token]);

    return (
        <div style={{ width: '100%', display: 'flex', gap: '30px', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ marginTop: '10%', width: '40%' }}>
                <DefaultCard title={'Iniciar sesión'} children={
                    <>
                        <div style={{ paddingBottom: 30, marginTop: 30 }}>
                            Usuario: <input required defaultValue={Usuario} onChange={(e) => { setUsuario(e.target.value) }} type='text' style={{ height: 25, borderRadius: 10, border: '1px solid #333333', fontSize: 15, fontWeight: 'bold', paddingLeft: 5 }}></input>
                        </div>
                        <div style={{ paddingBottom: 30 }}>
                            Contraseña: <input defaultValue={Contrasena} required type='password' onChange={(e) => { setContrasena(e.target.value) }} style={{ height: 25, borderRadius: 10, border: '1px solid #333333', fontSize: 15, fontWeight: 'bold', paddingLeft: 5 }}></input>
                        </div>
                        <div><input type='checkbox' onChange={(e) => { setMantenerSesion(e.target.checked) }}></input>Mantener sesión iniciada</div>
                        <Button text={'Continuar'} type={'submit'} onClick={() => { inicioSesion() }} />
                    </>} />
            </div>
        </div>
    );
}


