import CallingBarStats from '../Components/CallingStats/CallingBarStats.jsx';
import CallingBarStatsPanel from '../Components/CallingStats/CallingBarStatsPanel.jsx';
import Sidebar from '../Components/Sidebar/Sidebar.jsx'
import data from '../Components/CallingStats/data..js';
import dataLine from '../Components/CallingStats/dataLine.js';
import AttentionAverageTimeStats from '../Components/CallingStats/AttentionAverageTimeStats.jsx';

function Stats() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar user={'Nahuel'} />
            <div style={{ width: '100%', display: 'flex', gap: '30px', alignItems: 'center', flexDirection: 'column' }}>
                <h2 style={{ fontSize: '36px', margin: '25px 0px 10px 0px' }}>Informes</h2>
                <CallingBarStatsPanel title={'Estadisticas de llamados'} children={<CallingBarStats data={data} />} />
                <CallingBarStatsPanel title={'Tiempo promedio de atencion'} children={<AttentionAverageTimeStats data={dataLine} />} />
            </div>
        </div>
    );
}

export default App;
