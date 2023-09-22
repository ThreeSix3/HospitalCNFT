import './MedicalAlert.css';
import React, { useState, useEffect } from 'react';

export default function MedicalAlert({ alertData }) {

    return (
        <>
            {alertData.map((data, index) => (
                <div
                    key={index}
                    className={data.desc_tipo_llamado === 'EMERGENCIA' ? 'cardMedicalAlert' : 'secondaryCardMedicalAlert'}
                >
                    <h4 className='subtitle'>{data.nombre_ubicacion}</h4>
                    <h4 className='subtitle'>{data.fhora_llamado}</h4>
                    <h3 className='title'>{data.desc_tipo_llamado}</h3>
                    <h4 className='subtitle'>{data.nombre_area}</h4>
                    <button className='medicalAlertBtn'>Aceptar</button>
                </div>
            ))}
        </>
    );
}
