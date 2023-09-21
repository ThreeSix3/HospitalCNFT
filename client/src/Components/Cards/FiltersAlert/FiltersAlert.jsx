
import '../../CallingStats/filters.css'
import React, { useState } from 'react';
import { XCircleIcon } from '@heroicons/react/24/solid';

export default function FiltersAlert({ close, onActiveLinkChange }) {
    const [activeLink, setActiveLink] = useState(false);
    let filterName = 'nombre';

    const handleLinkClick = (index) => {
        setActiveLink(index);
        onActiveLinkChange(index);
    };

    // La idea es que al hacer click en un boton cada caso setee una query diferente para el buscador 
    // tamb pensaba usar los dos date para buscar en ese rango de fechas
    //switch (activeLink) {
    //     case 0:
    //         Query por nombre
    //         filterName='nombre'
    //         break;
    //     case 1:
    //         Query por apellido
    //         filterName = 'apellido'
    //         break;
    //     case 2:
    //         Query por DNI
    //         filterName = 'dni'
    //         break;
    //     default:
    //         Query por nombre
    // }

    return (
        <div className='filtersAlert'>
            <div className="cardAlert">
                <button className='closeAlert' onClick={close}><XCircleIcon /></button>
                <div>
                    <a className={activeLink === 0 ? 'active' : ''} onClick={() => handleLinkClick(0)}>Por nombre</a>
                    <a className={activeLink === 1 ? 'active' : ''} onClick={() => handleLinkClick(1)}>Por apellido</a>
                    <a className={activeLink === 2 ? 'active' : ''} onClick={() => handleLinkClick(2)}>Por DNI</a>
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
