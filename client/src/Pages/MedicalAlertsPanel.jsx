import MedicalAlert from "../Components/Cards/MedicalAlert/MedicalAlert";
import { obtenerLlamadosNoAtendidos, obtenerLlamados } from "../Functions/dbFunctions";
import React, { useState, useEffect } from 'react';
import Button from '../Components/Buttons/Button';

function MedicalAlertsPanel() {
    const [llamadosNoAtendidos, setLlamadosNoAtendidos] = useState(['']);
    const [llamados, setLlamados] = useState(['']);
    const [mostrar, setMostrar] = useState(false);


    function handleMostrar() {
        setMostrar(!mostrar);
    }

    useEffect(() => {
        (async () => {
            obtenerLlamadosNoAtendidos().then((data) => {
                setLlamadosNoAtendidos(data);
            })
        })();
    })

    useEffect(() => {
        (async () => {
            obtenerLlamados().then((data) => {
                setLlamados(data);
            })
        })();
    })

    return (
        <div style={{ display: 'flex', width: '100%', height: '15%', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ fontSize: '36px', margin: '25px 0px 25px 0px' }}>Alertas y llamados</h2>
            {mostrar ? <h3>Todos:</h3> : <h3>Llamados no atendidos:</h3>}

            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', width: '100%' }}>
                {llamadosNoAtendidos.map(() => (
                    <MedicalAlert alertData={llamadosNoAtendidos} />
                ))}


                {mostrar && llamados.map((index) => (
                    <MedicalAlert key={index} alertData={llamados} />
                ))}

            </div>


            <Button text={'Ver todas'} onClick={() => handleMostrar()} />

        </div >
    );
}

export default MedicalAlertsPanel;
