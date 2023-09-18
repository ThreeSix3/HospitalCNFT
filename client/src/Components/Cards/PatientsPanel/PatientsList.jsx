import React from 'react';
import './Patients.css'
import Button from '../../Buttons/Button';
export default function PatientsList({ patientsData }) {
    return (
        <div>
            <table className="patientsTable">
                <thead style={{ border: '1px solid black' }}>
                    <tr>
                        <th>Nombre</th>
                        <th>DNI</th>
                        <th>ejemplo1</th>
                        <th>ejemplo2</th>
                        <th>Tipo de sangre</th>
                        <th>Enfermero</th>
                    </tr>
                </thead>
                <tbody >
                    {patientsData.map((patient, index) => (
                        <tr key={index}>
                            <td>{patient.name}</td>
                            <td>{patient.dni}</td>
                            <td>{patient.ejemplo1}</td>
                            <td>{patient.ejemplo2}</td>
                            <td>{patient.bloodType}</td>
                            <td>{patient.nurse}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Button text={'Ver todos'} />
        </div>
    );
}
