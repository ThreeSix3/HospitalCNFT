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
import { borrarPaciente } from '../../../Functions/dbFunctions.js'

export default function EditPatientsPanel({ patientsData }) {
    const [inputContent, setInputContent] = useState(null);
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    const [isAddPatientAlertVisible, setIsAddPatientAlertVisible] = useState(false);
    const [editingPatient, setEditingPatient] = useState(null);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(null);
    const [placeholder, setPlaceholder] = useState('');

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

    const handleActiveLinkChange = (newActiveLink) => {
        setActiveLink(newActiveLink);
    };

    const handleChangePlaceholder = (index) => {
        switch (index) {
            case 0:
                setPlaceholder('Haz una busqueda por nombre');
                break;
            case 1:
                setPlaceholder('Haz una busqueda por apellido');
                break;
            case 2:
                setPlaceholder('Haz una busqueda por DNI');
                break;
            default:
                setPlaceholder('Haz una busqueda por nombre');
                break;
        }
    }
    function formatDate(dateString) {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
        return formattedDate;
    }
    
    return (
        <div style={{ padding: '20px' }}>
            <div className="patientsControls" style={{ marginBottom: 30 }}>
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
                                <td>{patient.nombre_paciente} {patient.apellido_paciente}</td>
                                <td>{patient.dni_paciente}</td>
                                <td>{formatDate(patient.fnac_paciente)}</td>
                                <td>{patient.telefono_paciente}</td>
                                <td>{patient.desc_grupo_factor}</td>
                                <td>{patient.id_enfermero}</td>
                                <td><DeleteButton onClick={async () => { await borrarPaciente(patient.id_paciente) }} /></td>
                                <td><EditButton onClick={() => handleEditPatient(patient)} /></td>
                                <td><DetailsButton onClick={() => handleViewDetails(patient)} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isAddPatientAlertVisible ? <AddPatientModal close={closeAddPatientAlert} initialData={editingPatient} /> : ''}
            {isDetailsModalOpen ? <PatientDetailsModal close={() => setIsDetailsModalOpen(false)} data={editingPatient} /> : ''}
        </div>
    );
}
