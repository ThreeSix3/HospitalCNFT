import React, { useState } from 'react';
import '../PatientsPanel/Patients.css';
import Button from '../../Buttons/Button';
import DeleteButton from '../../Buttons/DeleteButton';
import EditButton from '../../Buttons/EditButton';

export default function UsersPanel({ usuarios }) {
    const [permissionState, setPermissionState] = useState(usuarios.superusuario);

    const handlePermissionChange = (event) => {
        setPermissionState(event.target.value);
    };

    return (
        <div>
            <h2>Usuarios</h2>
            <table className="patientsTable">
                <thead style={{ border: '1px solid black' }}>
                    <tr>
                        <th>Nombre</th>
                        <th>Permisos</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((user, index) => (
                        <tr key={user.id_usuario}>
                            <td>{user.nombre_usuario}</td>
                            <td>
                                <select value={permissionState} onChange={handlePermissionChange}>
                                    <option value="admin">Admin</option>
                                    <option value="usuario">Usuario</option>
                                </select>
                            </td>
                            <td><EditButton /* onClick={() => handleEditUser(user) } */ /></td>
                            <td><DeleteButton /* onClick={async () => { await deleteUser(user.id) } } */ /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>Enfermeros</h2>
            <table className="patientsTable">
                <thead style={{ border: '1px solid black' }}>
                    <tr>
                        <th>Nombre</th>
                        <th>DNI</th>
                        <th>Telefono</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>

            </table>
        </div>
    );
}
