import DeleteButton from '../../Buttons/DeleteButton';
import '../PatientsPanel/Patients.css';
import Button from '../../Buttons/Button'
import EditButton from '../../Buttons/EditButton';
import FiltersAlert from '../FiltersAlert/FiltersAlert';
import { useState, useEffect } from 'react';
import DefaultCard from '../DefaultCard';

export default function EditPatientsPanel({ patientsData }) {
    const [inputContent, setInputContent] = useState(null);
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    const [isAddPatientAlertVisible, setIsAddPatientAlertVisible] = useState(false);

    useEffect(() => {
        console.log(inputContent);
    }, [inputContent]);

    const handleInputChange = (event) => {
        setInputContent(event.target.value);
    };

    const alertVisible = () => {
        setIsFiltersVisible(true);
    };

    const closeAlert = () => {
        setIsFiltersVisible(false);
    };


    return (
        <div style={{ padding: '20px 40px' }}>
            <div className="patientsControls">
                <input type='text' className='patientsBrowser' placeholder='Busca por nombre o DNI a tus pacientes' value={inputContent} onChange={handleInputChange} />
                <Button text={'Filtrar busqueda'} onClick={alertVisible} />
                <Button text={'Agregar paciente'} />
            </div>
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
                            <th>Eliminar</th>
                            <th>Editar</th>
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
                                <td><DeleteButton /></td>
                                <td><EditButton /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isFiltersVisible ? <FiltersAlert close={closeAlert} /> : ''}
        </div>
    );
}
