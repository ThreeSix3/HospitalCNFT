import React from 'react';
import './Patients.css'
import Button from '../../Buttons/Button';
export default function PatientsList({ patientsData }) {
    function formatDate(dateString) {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
        return formattedDate;
    }
    return (
        <div>
            <table className="patientsTable">
                <thead style={{ border: '1px solid black' }}>
                    <tr>
                        <th>Nombre</th>
                        <th>DNI</th>
                        <th>Fecha Nac.</th>
                        <th>Telefono</th>
                        <th>Tipo de sangre</th>
                        <th>Enfermero</th>
                    </tr>
                </thead>
                <tbody >
                    {patientsData.map((patient, index) => (
                        <tr key={patient.id_paciente}>
                            <td>{patient.nombre_paciente}</td>
                            <td>{patient.dni_paciente}</td>
                            <td>{formatDate(patient.fnac_paciente)}</td>
                            <td>{patient.telefono_paciente}</td>
                            <td>{patient.desc_grupo_factor}</td>
                            <td>{patient.id_enfermero}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Button text={'Ver todos'} />
        </div>
    );
}
