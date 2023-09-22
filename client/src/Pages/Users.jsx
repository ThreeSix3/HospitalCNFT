
import EditPatientsPanel from '../Components/Cards/EditPatientsPanel/EditPatientsPanel.jsx';
import DefaultCard from '../Components/Cards/DefaultCard.jsx'
import { useEffect, useState } from 'react';
import UsersPanel from '../Components/Cards/UsersPanel/UsersPanel.jsx';
import { obtenerUsuarios } from '../Functions/dbFunctions.js';
import { obtenerEnfermeros } from '../Functions/dbFunctions.js';

export default function Users() {
    const [usuarios, setUsuarios] = useState(['']);
    const [enfermeros, setEnfermeros] = useState(['']);
    useEffect(() => {
        (async () => {
            obtenerUsuarios().then((data) => {
                setUsuarios(data);
            })
        })();
    })

    useEffect(() => {
        (async () => {
            obtenerEnfermeros().then((data) => {
                setEnfermeros(data);
            })
        })();
    })
    return (
        <div style={{ width: '100%', display: 'flex', gap: '30px', alignItems: 'center', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '36px', margin: '25px 0px 10px 0px' }}>Pacientes</h2>
            <div>
                <DefaultCard children={<UsersPanel usuarios={usuarios} enfermeros={enfermeros} />} />
            </div>
        </div>
    );
}

