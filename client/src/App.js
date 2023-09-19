import CallingBarStats from './Components/CallingStats/CallingBarStats.jsx';
import CallingBarStatsPanel from './Components/CallingStats/CallingBarStatsPanel.jsx';
import Sidebar from './Components/Sidebar/Sidebar.jsx'
import data from './Components/CallingStats/data..js';
function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar user={'Nahuel'} />
      <div style={{ width: '100%', display: 'flex', gap: '30px', alignItems: 'center', flexDirection: 'column' }}>
        <CallingBarStatsPanel title={'Estadisticas de llamados'} children={<CallingBarStats data={data} />} />
        <CallingBarStatsPanel title={'Tiempo promedio de atención'} children={<CallingBarStats data={data} />} />
      </div>
    </div>
  );
}

export default App;
