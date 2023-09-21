import Sidebar from './Components/Sidebar/Sidebar.jsx'
import React, { useState } from 'react';
import ContentComponent from './ContentComponent.jsx';
import './App.css';
function App() {
  const [activeElement, setActiveElement] = useState(0);
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar user={'Nahuel'} setActiveElement={setActiveElement} />
      <div className='content'>
        <ContentComponent activeElement={activeElement} />
      </div>
    </div>
  );
}

export default App;
