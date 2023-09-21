import DeleteButton from '../../Buttons/DeleteButton';
import '../PatientsPanel/Patients.css';
import Button from '../../Buttons/Button'
import EditButton from '../../Buttons/EditButton';
import FiltersAlert from '../FiltersAlert/FiltersAlert';
import { useState, useEffect } from 'react';
import DetailsButton from '../../Buttons/DetailsButton';
import AddPatientModal from '../AddPatientModal/AddPatientModal';
import data from '../PatientsPanel/data';
import PatientDetailsModal from './PatientDetailsModal';

export default function EditPatientsPanel({ patientsData }) {
    const [inputContent, setInputContent] = useState(null);
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    const [isAddPatientAlertVisible, setIsAddPatientAlertVisible] = useState(false);
    const [editingPatient, setEditingPatient] = useState(null);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

    //!!!!
    //!!!!
    //Seguramente tengas que cambiar los nombres de las propiedades del mapeo.
    //Para eso tambien hay que editarlas en PatientDetailsModal, en AddPatientModal y PatientsList
    //!!!!
    //!!!!

    //Funcion futuro buscador
    useEffect(() => {
        console.log(inputContent);
    }, [inputContent]);

    const handleInputChange = (event) => {
        setInputContent(event.target.value);
    };

    //Abrir y cerrar filtros
    const alertVisible = () => {
        setIsFiltersVisible(true);
    };

    const closeAlert = () => {
        setIsFiltersVisible(false);
    };

    //Abrir y cerrar modal de edición
    const addPatientAlertVisible = () => {
        setIsAddPatientAlertVisible(true);
    };

    const closeAddPatientAlert = () => {
        setIsAddPatientAlertVisible(false);
    };

    //Setea datos y abre modal de edicion
    const handleEditPatient = (patient) => {
        setEditingPatient(patient);
        addPatientAlertVisible();
    };


    // Setea los datos del paciente en el modal y abre modal de detalle
    const handleViewDetails = (patient) => {
        setEditingPatient(patient);
        setIsDetailsModalOpen(true);
    };
    return (
        <div style={{ padding: '20px' }}>
            <div className="patientsControls">
                <input type='text' className='patientsBrowser' placeholder='Busca por nombre o DNI a tus pacientes' value={inputContent} onChange={handleInputChange} />
                <Button text={'Filtrar busqueda'} onClick={alertVisible} />
                <Button text={'Agregar paciente'} onClick={addPatientAlertVisible} />
            </div>
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
                            <th>Eliminar</th>
                            <th>Editar</th>
                            <th>Ver detalle</th>
                        </tr>
                    </thead>
                    <tbody >
                        {patientsData.map((patient, index) => (
                            <tr key={index}>
                                <td>{patient.name}</td>
                                <td>{patient.dni}</td>
                                <td>{patient.birthdate}</td>
                                <td>{patient.phone}</td>
                                <td>{patient.bloodType}</td>
                                <td>{patient.nurse}</td>
                                <td><DeleteButton /*onClick={funcion que borre}*/ /></td>
                                <td><EditButton onClick={() => handleEditPatient(patient)} /></td>
                                <td><DetailsButton onClick={() => handleViewDetails(patient)} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isFiltersVisible ? <FiltersAlert close={closeAlert} /> : ''}
            {isAddPatientAlertVisible ? <AddPatientModal close={closeAddPatientAlert} initialData={editingPatient} /> : ''}
            {isDetailsModalOpen ? <PatientDetailsModal close={() => setIsDetailsModalOpen(false)} data={editingPatient} /> : ''}
        </div>
    );
}
