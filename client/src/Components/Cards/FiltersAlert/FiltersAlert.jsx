
import '../../CallingStats/filters.css'
import React, { useState } from 'react';
import { XCircleIcon } from '@heroicons/react/24/solid';

export default function FiltersAlert({ close }) {
    const [activeLink, setActiveLink] = useState(false);

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    return (
        <div className='filtersAlert'>
            <div className="cardAlert">
                <button className='closeAlert' onClick={close}><XCircleIcon /></button>
                <div>
                    <a className={activeLink === 0 ? 'active' : ''} onClick={() => handleLinkClick(0)}>Por área</a>
                    <a className={activeLink === 1 ? 'active' : ''} onClick={() => handleLinkClick(1)}>Por origen de llamado</a>
                    <div className="inputGroup">
                        <input type="date" className="inputDate" />
                        <input type="date" className="inputDate" />
                    </div>
                    <a className="cleanFilters" onClick={() => handleLinkClick(false)}>Limpiar filtros</a>
                </div>
            </div>
        </div>
    );
}   
