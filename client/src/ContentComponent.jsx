import React from 'react';
import Dashboard from './Pages/Dashboard';
import Patients from './Pages/Patients';
import Stats from './Pages/Stats';
import PageNotFound from './Pages/404';
import MedicalAlertsPanel from './Pages/MedicalAlertsPanel';
import Users from './Pages/Users';
const ContentComponent = ({ activeElement, token, id_enfermero, nombre_usuario, setActiveElement }) => {
    let content;

    switch (activeElement) {
        case 0:
            content = <Dashboard setActiveElement={setActiveElement} />;
            break;
        case 1:
            content = <Stats />;
            break;
        case 2:
            content = <Patients />;
            break;
        case 3:
            content = <Users />;
            break;
        //  case 4:
        //     content = <AreasPanel />;
        //     break;
        case 5:
            content = <MedicalAlertsPanel />;
            break;
        default:
            content = <PageNotFound />;
    }

    return <>{content}</>;
};

export default ContentComponent;
