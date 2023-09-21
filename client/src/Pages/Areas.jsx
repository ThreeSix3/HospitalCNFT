import data from '../Components/Cards/PatientsPanel/data.js';
import EditPatientsPanel from '../Components/Cards/EditPatientsPanel/EditPatientsPanel.jsx';
import DefaultCard from '../Components/Cards/DefaultCard.jsx'

import DefaultCard from '../Components/Cards/DefaultCard.jsx';
import AreasPanel from '../Components/Cards/AreasPanel/AreasPanel.jsx';
import data from '../Components/Cards/AreasPanel/data.js';
export default function Areas() {
    return (
        <div style={{ width: '100%', display: 'flex', gap: '30px', alignItems: 'center', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '36px', margin: '25px 0px 10px 0px' }}>Gestión de areas</h2>
            <div>
                <DefaultCard children={<AreasPanel data={data} />} patientsData={data} />
            </div>
        </div>
    );
}


