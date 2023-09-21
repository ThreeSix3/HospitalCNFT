import React from 'react';
import Dashboard from './Pages/Dashboard';
import Patients from './Pages/Patients';
import Stats from './Pages/Stats';
import PageNotFound from './Pages/404';

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
            content = <PageNotFound />;
    }

    return <div>{content}</div>;
};

export default ContentComponent;
