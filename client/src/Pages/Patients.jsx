import data from '../Components/Cards/PatientsPanel/data.js';
import EditPatientsPanel from '../Components/Cards/EditPatientsPanel/EditPatientsPanel.jsx';
import DefaultCard from '../Components/Cards/DefaultCard.jsx'
import { useEffect, useState } from 'react';
import { obtenerPacientes } from '../Functions/dbFunctions.js';


export default function Patients() {
    const [pacientes, setPacientes] = useState([]);
    useEffect(()=>{
        (async ()=>{
            obtenerPacientes().then((data)=>{
                setPacientes(data);
            })
        })();
    })
    return (
        <div style={{ width: '100%', display: 'flex', gap: '30px', alignItems: 'center', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '36px', margin: '25px 0px 10px 0px' }}>Pacientes</h2>
            <div>
                <DefaultCard children={<EditPatientsPanel patientsData={pacientes} />} />
            </div>
        </div>
    );
}


