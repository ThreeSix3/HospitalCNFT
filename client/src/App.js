import Sidebar from './Components/Sidebar/Sidebar.jsx'
import React, { useState } from 'react';
import ContentComponent from './ContentComponent.jsx';
function App() {
  const [activeElement, setActiveElement] = useState(0);
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar user={'Nahuel'} setActiveElement={setActiveElement} />
      <div style={{ width: '100%', display: 'flex', gap: '30px', alignItems: 'center', flexDirection: 'column' }}>
        <ContentComponent activeElement={activeElement} />
      </div>
    </div>
  );
}

export default App;
