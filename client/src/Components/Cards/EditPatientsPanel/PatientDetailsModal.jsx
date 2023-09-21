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
                        <span>{data.name}</span>
                    </div>
                    <div className="detailItem">
                        <label>Fecha de Nacimiento:</label>
                        <span>{data.birthdate}</span>
                    </div>
                    <div className="detailItem">
                        <label>DNI:</label>
                        <span>{data.dni}</span>
                    </div>
                    <div className="detailItem">
                        <label>Teléfono:</label>
                        <span>{data.phone}</span>
                    </div>
                    <div className="detailItem">
                        <label>Fecha de Ingreso:</label>
                        <span>{data.admissionDate}</span>
                    </div>
                    <div className="detailItem">
                        <label>Tipo de Sangre:</label>
                        <span>{data.bloodType}</span>
                    </div>
                    <div className="detailItem">
                        <label>Domicilio:</label>
                        <span>{data.address}</span>
                    </div>
                    <div className="detailItem">
                        <label>Ubicación:</label>
                        <span>{data.location}</span>
                    </div>
                    <div className="detailItem">
                        <label>Enfermero:</label>
                        <span>{data.nurse}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
