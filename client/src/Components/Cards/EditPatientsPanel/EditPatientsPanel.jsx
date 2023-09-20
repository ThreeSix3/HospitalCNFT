import DeleteButton from '../../Buttons/DeleteButton';
import '../PatientsPanel/Patients.css';
import Button from '../../Buttons/Button'

export default function EditPatientsPanel({ patientsData }) {
    return (
        <div>
            <div className="patientsControls">
                <input type='text' className='patientsBrowser' placeholder='Busca por nombre o DNI a tus pacientes' />
                <Button text={'Filtrar busqueda'} />
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
