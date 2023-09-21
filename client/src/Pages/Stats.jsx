import CallingBarStats from '../Components/CallingStats/CallingBarStats.jsx';
import StatsPanel from '../Components/CallingStats/StatsPanel.jsx';
import Sidebar from '../Components/Sidebar/Sidebar.jsx'
import data from '../Components/CallingStats/data..js';
import dataLine from '../Components/CallingStats/dataLine.js';
import AttentionAverageTimeStats from '../Components/CallingStats/AttentionAverageTimeStats.jsx';

export default function Stats() {
    return (

        <div style={{ width: '100%', display: 'flex', gap: '30px', alignItems: 'center', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '36px', margin: '25px 0px 10px 0px' }}>Informes</h2>
            <StatsPanel title={'Estadisticas de llamados'} children={<CallingBarStats data={data} />} />
            <StatsPanel title={'Tiempo promedio de atencion'} children={<AttentionAverageTimeStats data={dataLine} />} />
        </div>

    );
}

