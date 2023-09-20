import React from 'react';
import Dashboard from './Pages/Dashboard';
import Patients from './Pages/Patients';
import Stats from './Pages/Stats';

const ContentComponent = ({ activeElement }) => {
    let content;

    switch (activeElement) {
        case 0:
            content = <Dashboard />;
            break;
        case 1:
            content = <Stats />;
            break;
        case 2:
            content = <Patients />;
            break;
        // case 3:
        //     content = <Patients />;
        //     break;
        // case 4:
        //     content = <Patients />;
        //     break;
        default:
            content = <Dashboard />;
    }

    return <div>{content}</div>;
};

export default ContentComponent;
