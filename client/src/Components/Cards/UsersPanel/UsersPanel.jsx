import React, { useState } from 'react';
import '../PatientsPanel/Patients.css';
import DeleteButton from '../../Buttons/DeleteButton';
import EditButton from '../../Buttons/EditButton';
import { actualizarUsuario, borrarUsuario } from '../../../Functions/dbFunctions';

export default function UsersPanel({ usuarios, enfermeros }) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editedUser, setEditedUser] = useState(null);
    const [editedUserRole, setEditedUserRole] = useState('');

    function actualizacionSuper(e, user) {
        actualizarUsuario(user.id_usuario, user.nombre_usuario, user.contrasena_usuario, e.target.value, user.id_enfermero).then((data) => {
            console.log(data);
        });
    }
    function eliminarUsuario(id_usuario) {
        borrarUsuario(id_usuario).then((data) => {
            console.log(data)
        })
    }

    const openEditModal = (user) => {
        setEditedUser(user);
        setEditedUserRole(user.super_usuario.toString()); // Convertir el valor a string
        setIsEditModalOpen(true);
    }

    const closeEditModal = () => {
        setIsEditModalOpen(false);
        setEditedUser(null);
        setEditedUserRole('');
    }

    const handleEditUser = () => {
        // Aquí puedes agregar la lógica para actualizar el usuario con los datos de editedUser y editedUserRole
        // Por ejemplo, podrías llamar a la función actualizacionSuper
        // También puedes cerrar el modal después de la edición llamando a closeEditModal()
    }
    return (
        <div>
            <h2 style={{ marginTop: '0' }}>Usuarios</h2>
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
                                <select value={user.super_usuario} onChange={(e) => { actualizacionSuper(e, user) }} className='userSelect'>
                                    <option value="1">Admin</option>
                                    <option value="0">Usuario</option>
                                </select>
                            </td>
                            <td><EditButton onClick={() => openEditModal(user)} /></td>
                            <td><DeleteButton onClick={() => { eliminarUsuario(user.id_usuario) }} /></td>
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
                <tbody>
                    {enfermeros.map((enfermero, index) => (
                        <tr key={enfermero.id_enfermero}>
                            <td>{enfermero.nombre_enfermero}</td>
                            <td>{enfermero.dni_enfermero}</td>
                            <td>{enfermero.telefono_enfermero}</td>
                            <td><EditButton /* onClick={() => handleEditEnfermero(enfermero) } */ /></td>
                            <td><DeleteButton /* onClick={async () => { await deleteEnfermero(enfermero.id) } } */ /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isEditModalOpen && (
                <div className="userEditionModal">
                    <div className="modalContent">
                        <h3>Editar Usuario</h3>
                        <label htmlFor="editedUserRole">Permisos:</label>
                        <select
                            id="editedUserRole"
                            value={editedUserRole}
                            onChange={(e) => setEditedUserRole(e.target.value)}
                            className='userSelect'
                        >
                            <option value="1">Admin</option>
                            <option value="0">Usuario</option>
                        </select>
                        <button onClick={handleEditUser}>Guardar</button>
                        <button onClick={closeEditModal}>Cancelar</button>
                    </div>
                </div>
            )}
        </div>
    );
}