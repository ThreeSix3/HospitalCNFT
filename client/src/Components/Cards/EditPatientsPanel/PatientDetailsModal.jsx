import React from 'react';
import { XCircleIcon } from '@heroicons/react/24/solid';
import './PatientDetailsModal.css';

export default function PatientDetailsModal({ close, data }) {
    return (
        <div className='patientDetailsModal'>
            <button className='closeAlert' onClick={close}><XCircleIcon /></button>
            <div className="modalContent">
                <h2>Detalles del Paciente</h2>
                <div className="details">
                    <div className="detailItem">
                        <label>Nombre:</label>
                        <span>{data.nombre_paciente}</span>
                    </div>
                    <div className="detailItem">
                        <label>Fecha de Nacimiento:</label>
                        <span>{data.fnac_paciente}</span>
                    </div>
                    <div className="detailItem">
                        <label>DNI:</label>
                        <span>{data.dni_paciente}</span>
                    </div>
                    <div className="detailItem">
                        <label>Teléfono:</label>
                        <span>{data.telefono_paciente}</span>
                    </div>
                    <div className="detailItem">
                        <label>Fecha de Ingreso:</label>
                        <span>{data.fingreso_paciente}</span>
                    </div>
                    <div className="detailItem">
                        <label>Tipo de Sangre:</label>
                        <span>{data.desc_grupo_factor}</span>
                    </div>
                    <div className="detailItem">
                        <label>Domicilio:</label>
                        <span>{data.domicilio_paciente}</span>
                    </div>
                    <div className="detailItem">
                        <label>Ubicación:</label>
                        <span>{data.nombre_ubicacion}</span>
                    </div>
                    <div className="detailItem">
                        <label>Enfermero:</label>
                        <span>{data.id_enfermero}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
