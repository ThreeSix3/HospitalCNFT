import '../../CallingStats/filters.css'
import React, { useState } from 'react';
import { XCircleIcon } from '@heroicons/react/24/solid';
import '../PatientsPanel/Patients.css';

export default function AddPatientModal({ close }) {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        dni: '',
        telefono: '',
        fechaIngreso: '',
        grupoSanguineo: '',
        domicilio: '',
        ubicacion: '',
        enfermero: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica para enviar los datos del formulario
        // Por ejemplo, puedes hacer una llamada a una API para guardar los datos en una base de datos
        // Luego, puedes cerrar el modal
        console.log(formData); // Puedes quitar esto, es solo para mostrar los datos en la consola
        close();
    };

    return (
        <div className='filtersAlert'>
            <div className="cardAlert">
                <button className='closeAlert' onClick={close}><XCircleIcon /></button>
                <form onSubmit={handleSubmit} >
                    <div style={{ display: 'flex', }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className="formGroup">
                                <label htmlFor="nombre">Nombre</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formGroup">
                                <label htmlFor="apellido">Apellido</label>
                                <input
                                    type="text"
                                    id="apellido"
                                    name="apellido"
                                    value={formData.apellido}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formGroup">
                                <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
                                <input
                                    type="date"
                                    id="fechaNacimiento"
                                    name="fechaNacimiento"
                                    value={formData.fechaNacimiento}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formGroup">
                                <label htmlFor="dni">DNI</label>
                                <input
                                    type="text"
                                    id="dni"
                                    name="dni"
                                    value={formData.dni}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formGroup">
                                <label htmlFor="telefono">Teléfono</label>
                                <input
                                    type="text"
                                    id="telefono"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className="formGroup">
                                <label htmlFor="fechaIngreso">Fecha de ingreso</label>
                                <input
                                    type="date"
                                    id="fechaIngreso"
                                    name="fechaIngreso"
                                    value={formData.fechaIngreso}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formGroup">
                                <label htmlFor="grupoSanguineo">Grupo sanguíneo</label>
                                <input
                                    type="text"
                                    id="grupoSanguineo"
                                    name="grupoSanguineo"
                                    value={formData.grupoSanguineo}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formGroup">
                                <label htmlFor="domicilio">Domicilio</label>
                                <input
                                    type="text"
                                    id="domicilio"
                                    name="domicilio"
                                    value={formData.domicilio}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formGroup">
                                <label htmlFor="ubicacion">Ubicación</label>
                                <input
                                    type="text"
                                    id="ubicacion"
                                    name="ubicacion"
                                    value={formData.ubicacion}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formGroup">
                                <label htmlFor="enfermero">Enfermero</label>
                                <input
                                    type="text"
                                    id="enfermero"
                                    name="enfermero"
                                    value={formData.enfermero}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <button type="submit">Guardar</button>
                </form>
            </div>
        </div>
    );
}
