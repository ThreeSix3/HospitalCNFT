import SystemConfigurationPanel from "../Components/Cards/SystemConfigurationPanel/SystemConfigurationPanel";
import PatientsPanel from "../Components/Cards/PatientsPanel/PatientsPanel";
import CallingBarStats from "../Components/CallingStats/CallingBarStats";
import StatsPanel from "../Components/CallingStats/StatsPanel";
import data from "../Components/CallingStats/data.";
import { useEffect, useState } from "react";
import { obtenerPacientes } from "../Functions/dbFunctions";
function Dashboard() {
    const [pacientes, setPacientes] = useState([]);
    useEffect(()=>{
        (async ()=>{
            obtenerPacientes().then((data)=>{
                setPacientes(data.slice(0,5));
            })
        })();
    },[])
    return (

        <div style={{ display: 'flex', width: '100%', height: '15%', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ fontSize: '36px', margin: '25px 0px 25px 0px' }}>Pacientes</h2>
            <div style={{ display: 'flex', width: '100%', gap: '30px', justifyContent: 'center' }}>
                <PatientsPanel data={pacientes} />
                <SystemConfigurationPanel />
            </div>
            <div style={{ display: 'flex', width: '100%', gap: '30px', justifyContent: 'flex-start' }}>
                <StatsPanel title={'Llamados atendidos'} children={<CallingBarStats data={data} />} />
            </div>

        </div>
    );
}

export default Dashboard;
