import data from '../Components/Cards/PatientsPanel/data.js';
import Sidebar from '../Components/Sidebar/Sidebar.jsx'
import EditPatientsPanel from '../Components/Cards/EditPatientsPanel/EditPatientsPanel.jsx';
import DefaultCard from '../Components/Cards/DefaultCard.jsx'


export default function Patients() {
    return (
        <div style={{ width: '100%', display: 'flex', gap: '30px', alignItems: 'center', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '36px', margin: '25px 0px 10px 0px' }}>Pacientes</h2>
            <div>
                <DefaultCard children={<EditPatientsPanel patientsData={data} />} />
            </div>
        </div>
    );
}


