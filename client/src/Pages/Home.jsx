import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import ContentComponent from '../ContentComponent';

export default function Home({token, id_enfermero, nombre_usuario}) {
    const [activeElement, setActiveElement] = useState(0);
    useEffect(()=>{
        if(token === null || token ==="" || nombre_usuario === null || nombre_usuario === ""){
            window.location.replace('/');
            return <></>
        }
    },[token, nombre_usuario])
    
    
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar user={nombre_usuario} setActiveElement={setActiveElement} />
            <div className='content'>
                <ContentComponent activeElement={activeElement} token={token} id_enfermero={id_enfermero} nombre_usuario={nombre_usuario}/>
            </div>
        </div>
    )
}