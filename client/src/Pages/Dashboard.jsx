import DefaultCard from "../Components/Cards/DefaultCard";
import Sidebar from "../Components/Sidebar/Sidebar";
import SystemConfigurationPanel from "../Components/Cards/SystemConfigurationPanel/SystemConfigurationPanel";
import PatientsPanel from "../Components/Cards/PatientsPanel/PatientsPanel";
import CallingBarStats from "../Components/CallingStats/CallingBarStats";
import CallingBarStatsPanel from "../Components/CallingStats/CallingBarStatsPanel";
import data from "../Components/CallingStats/data.";

function Dashboard() {
    return (

        <div style={{ display: 'flex', width: '100%', height: '15%', flexDirection: 'column' }}>
            <div style={{ display: 'flex', width: '100%', gap: '30px', justifyContent: 'center' }}>
                <PatientsPanel />
                <SystemConfigurationPanel />
            </div>
            <div style={{ display: 'flex', width: '100%', gap: '30px', justifyContent: 'flex-start' }}>
                <CallingBarStatsPanel title={'Llamados atendidos'} children={<CallingBarStats data={data} />} />
            </div>

        </div>
    );
}

export default Dashboard;
