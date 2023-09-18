import './Sidebar.css';
import { useEffect, useState } from 'react';

export default function SidebarElement({ text, icon, isActive }) {
    return (
        <button className={`sidebarElement ${isActive ? 'active' : ''}`}>
            <span className='sidebarElementIcon'>{icon}</span>
            <p className='sidebarElementText'>{text}</p>
        </button>
    );
}
