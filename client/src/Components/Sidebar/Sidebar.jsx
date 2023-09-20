
import { useState } from 'react';
import './Sidebar.css';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import SidebarElement from './SidebarElement';
import DocsPanel from '../Cards/DocsPanel/DocsPanel';

export default function Sidebar({ user, setActiveElement }) {
    const [isActive, setIsActive] = useState(true);
    const [activeElementState, setActiveElementState] = useState(0);

    function setStateOfActiveElement(index) {
        setActiveElementState(index);
        setActiveElement(index);
    }

    return (
        <div style={{ display: 'flex' }}>
            <aside className={`sidebar ${isActive ? '' : 'inactive'}`}>
                {/*Titulo y flecha*/}
                <div className='sidebarInfo'>
                    <span>
                        <h3>Alerta Azul</h3>
                    </span>
                </div>
                {/*Resto de informacion con flex-direction column*/}
                <div className='sidebarInteractionMenu'>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ fontWeight: '600', color: 'white', fontSize: '14px' }}>Iniciaste sesión como:</p>
                        <h3 style={{ fontSize: '16px', backgroundColor: 'white', borderRadius: '20px', padding: '5px' }}>
                            {user}
                        </h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="234" height="2" viewBox="0 0 234 2" fill="none">
                            <path d="M0 1H233.25" stroke="url(#paint0_linear_14_1186)" />
                            <defs>
                                <linearGradient id="paint0_linear_14_1186" x1="0" y1="1" x2="231" y2="1" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#E0E0E2" stop-opacity="0" />
                                    <stop offset="0.5" stop-color="#E0E1E2" />
                                    <stop offset="1" stop-color="#E0E1E2" stop-opacity="0.15625" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <a onClick={() => setStateOfActiveElement(0)}>
                            <SidebarElement text={'Panel de control'} icon={<ChevronLeftIcon />} isActive={activeElementState === 0} />
                        </a>
                        <a onClick={() => setStateOfActiveElement(1)}>
                            <SidebarElement text={'Informes'} icon={<ChevronLeftIcon />} isActive={activeElementState === 1} />
                        </a>
                        <a onClick={() => setStateOfActiveElement(2)}>
                            <SidebarElement text={'Pacientes'} icon={<ChevronLeftIcon />} isActive={activeElementState === 2} />
                        </a>
                        <a onClick={() => setStateOfActiveElement(3)}>
                            <SidebarElement text={'Usuarios'} icon={<ChevronLeftIcon />} isActive={activeElementState === 3} />
                        </a>
                        <a onClick={() => setStateOfActiveElement(4)}>
                            <SidebarElement text={'Gestion de áreas'} icon={<ChevronLeftIcon />} isActive={activeElementState === 4} />
                        </a>
                        <DocsPanel />
                    </div>
                </div>

            </aside>

        </div>

    );
}
