import DefaultCard from "./Components/Cards/DefaultCard";
import Sidebar from "./Components/Sidebar/Sidebar";
import SystemConfigurationPanel from "./Components/Cards/SystemConfigurationPanel/SystemConfigurationPanel";
import PatientsPanel from "./Components/Cards/PatientsPanel/PatientsPanel";
import CallingBarStats from "./Components/CallingStats/CallingBarStats";

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <CallingBarStats />
      {/* <Sidebar user={'Nahuel Martinez'} />
      <div style={{ display: 'flex', width: '80%', height: '15%', flexDirection: 'column' }}>
        <div style={{ display: 'flex', width: '100%', gap: '30px', justifyContent: 'center' }}>
          <PatientsPanel />
          <SystemConfigurationPanel />
        </div>
      </div> */}
    </div >
  );
}

export default App;
