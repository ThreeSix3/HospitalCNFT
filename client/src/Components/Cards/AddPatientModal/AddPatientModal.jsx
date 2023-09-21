import '../../CallingStats/filters.css'
import React, { useState, useEffect } from 'react';
import { XCircleIcon } from '@heroicons/react/24/solid';
import '../PatientsPanel/Patients.css';
import Button from '../../Buttons/Button';

export default function AddPatientModal({ close, initialData }) {
    const [formData, setFormData] = useState({
        name: '',
        birthdate: '',
        dni: '',
        phone: '',
        admissionDate: '',
        bloodType: '',
        address: '',
        location: '',
        nurse: '',
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //Enviar datos de form
        console.log(formData);
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
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formGroup">
                                <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
                                <input
                                    type="date"
                                    id="fechaNacimiento"
                                    name="birthdate"
                                    value={formData.birthdate}
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
                                    name="phone"
                                    value={formData.phone}
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
                                    name="admissionDate"
                                    value={formData.admissionDate}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formGroup">
                                <label htmlFor="grupoSanguineo">Grupo sanguíneo</label>
                                <input
                                    type="text"
                                    id="grupoSanguineo"
                                    name="bloodType"
                                    value={formData.bloodType}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formGroup">
                                <label htmlFor="domicilio">Domicilio</label>
                                <input
                                    type="text"
                                    id="domicilio"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formGroup">
                                <label htmlFor="ubicacion">Ubicación</label>
                                <input
                                    type="text"
                                    id="ubicacion"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formGroup">
                                <label htmlFor="enfermero">Enfermero</label>
                                <input
                                    type="text"
                                    id="enfermero"
                                    name="nurse"
                                    value={formData.nurse}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <Button type={'submit'} text="Enviar" onClick={handleSubmit} />
                </form>
            </div>
        </div>
    );
}
