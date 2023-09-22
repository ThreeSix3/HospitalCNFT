import '../../CallingStats/filters.css'
import React, { useState, useEffect } from 'react';
import { XCircleIcon } from '@heroicons/react/24/solid';
import '../PatientsPanel/Patients.css';
import Button from '../../Buttons/Button';
import { actualizarPaciente, obtenerEnfermeros, obtenerGruposSanguineos, obtenerUbicaciones } from '../../../Functions/dbFunctions';

export default function AddPatientModal({ close, initialData }) {
    const [gruposSanguineos, setGruposSanguineos] = useState([]);
    const [enfermeros, setEnfermeros] = useState([]);
    const [ubicaciones, setUbicaciones] = useState([]);
    useEffect(() => {
        obtenerGruposSanguineos().then((data) => {
            setGruposSanguineos(data);
        })
        obtenerEnfermeros().then((data) => {
            setEnfermeros(data);
        })
        obtenerUbicaciones().then((data) => (
            setUbicaciones(data)
        ))
    }, [])
    const [editar, setEditar] = useState(false);
    const [nombre, setNombre] = useState('');
    const [apelldio, setApellido] = useState('');
    const [dni, setDni] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fnac, setFnac] = useState(new Date());
    const [domicilio, setDomicilio] = useState('');
    const [fecha_alta, setFecha_Alta] = useState(new Date());
    const [historia_clinica, setHistoria_clinica] = useState('');
    const [grupoSanguineo, setGrupoSanguineo] = useState(null);
    const [enfermero, setEnfermero] = useState(null);
    const [ubicacion, setUbicacion] = useState(null);
    const [formData, setFormData] = useState({
        nombre_paciente: '',
        apellido_paciente: '',
        dni_paciente: '',
        telefono_paciente: '',
        id_grupo_factor_paciente: '',
        fnac_paciente: '',
        falta_paciente: '',
        domicilio_paciente: '',
        historia_clinica_paciente: '',
        id_ubicacion: '',
        id_enfermero: '',

    });
    function formatearFecha(fechaSQL) {
        const fecha = new Date(fechaSQL);

        // Obtener las partes de la fecha (año, mes y día)
        const año = fecha.getUTCFullYear();
        const mes = (fecha.getUTCMonth() + 1).toString().padStart(2, '0'); // Sumar 1 al mes y asegurarse de que tenga 2 dígitos
        const día = fecha.getUTCDate().toString().padStart(2, '0'); // Asegurarse de que tenga 2 dígitos

        // Crear una cadena en el formato deseado "yyyy-MM-dd"
        const fechaFormateada = `${año}-${mes}-${día}`;

        return fechaFormateada;
    }
    function fechaDesformateada(fechaFormateada) {
        const partes = fechaFormateada.split('-');
        const año = partes[0];
        const mes = (parseInt(partes[1]) - 1).toString(); // Restar 1 al mes para que sea compatible con JavaScript
        const día = partes[2];

        // Crear un objeto Date con las partes de la fecha
        const fecha = new Date(año, mes, día);

        // Obtener el timestamp SQL
        const fechaSQL = fecha.toISOString();
    }
    useEffect(() => {
        if (initialData) {
            setEditar(true);
            setFormData(initialData);
            setGrupoSanguineo(initialData.id_grupo_factor)
            setEnfermero(initialData.id_enfermero)
            setUbicacion(initialData.id_ubicacion)
            setNombre(initialData.nombre_paciente);
            setApellido(initialData.apellido_paciente);
            setDni(initialData.dni_paciente);
            setTelefono(initialData.telefono_paciente);
            setDomicilio(initialData.domicilio_paciente);
            setHistoria_clinica(initialData.historia_clinica_paciente);
            setFnac(formatearFecha(initialData.fnac));
            // console.log(initialData)
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
        if (editar) {
            actualizarPaciente(formData.id_paciente, nombre, apelldio, dni, telefono, grupoSanguineo, obtenerFechaHoraActualSQL(), domicilio, historia_clinica, initialData.motivo_ingreso_paciente, ubicacion, enfermero).then((data) => {
                console.log(data);
            })
        }
        close();
    };
    function obtenerFechaHoraActualSQL() {
        const fechaHoraActualUTC = new Date();

        // Calcular el desplazamiento de tiempo para la zona horaria -3 en milisegundos
        const desplazamientoHorario = -3 * 60 * 60 * 1000;

        // Aplicar el desplazamiento para obtener la fecha y hora en la zona horaria deseada
        const fechaHoraEnZonaHoraria = new Date(fechaHoraActualUTC.getTime() + desplazamientoHorario);

        // Formatear la fecha y hora en el formato SQL 'YYYY-MM-DD HH:MM:SS'
        const fechaSQL = fechaHoraEnZonaHoraria.toISOString().slice(0, 19).replace('T', ' ');

        return fechaSQL;
    }
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
                                    defaultValue={formData.nombre_paciente}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formGroup">
                                <label htmlFor="nombre">Apellido</label>
                                <input
                                    type="text"
                                    id="apellido"
                                    name="apellido"
                                    defaultValue={formData.apellido_paciente}
                                    onChange={handleChange}
                                />
                            </div>
                            {!editar && <div className="formGroup">
                                <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
                                <input
                                    type="date"
                                    id="fechaNacimiento"
                                    name="birthdate"
                                    value={formatearFecha(formData.fnac_paciente)}
                                    onChange={(e) => { setFnac(e.target.value) }}
                                />
                            </div>}

                            <div className="formGroup">
                                <label htmlFor="dni">DNI</label>
                                <input
                                    type="text"
                                    id="dni"
                                    name="dni"
                                    value={formData.dni_paciente}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formGroup">
                                <label htmlFor="telefono">Teléfono</label>
                                <input
                                    type="text"
                                    id="telefono"
                                    name="phone"
                                    value={formData.telefono_paciente}
                                    onChange={handleChange}
                                />
                            </div>

                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className="formGroup">
                                <label htmlFor="grupoSanguineo">Grupo sanguíneo</label>
                                <select className='editSelect' value={grupoSanguineo} onChange={(e) => { setGrupoSanguineo(e.target.value) }}>

                                    {
                                        gruposSanguineos.map((grupo) => (
                                            <option key={grupo.id_grupo_factor} value={grupo.id_grupo_factor}>
                                                {grupo.desc_grupo_factor}
                                            </option>
                                        ))
                                    }

                                </select>

                            </div>
                            <div className="formGroup">
                                <label htmlFor="domicilio">Domicilio</label>
                                <input
                                    type="text"
                                    id="domicilio"
                                    name="address"
                                    value={formData.domicilio_paciente}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formGroup">
                                <label htmlFor="ubicacion">Ubicación</label>
                                <select className='editSelect' value={ubicacion} onChange={(e) => { setUbicacion(e.target.value) }}>

                                    {
                                        ubicaciones.map((location) => (
                                            <option key={location.id_location} value={location.id_location}>
                                                {location.nombre_ubicacion + ' ' + location.numero_ubicacion + ' - ' + location.nombre_area}
                                            </option>
                                        ))
                                    }

                                </select>
                            </div>
                            <div className="formGroup">
                                <label htmlFor="enfermero">Enfermero</label>
                                <select className='editSelect' value={enfermero} onChange={(e) => { setEnfermero(e.target.value) }}>

                                    {
                                        enfermeros.map((nurse) => (
                                            <option key={nurse.id_enfermero} value={nurse.id_enfermero}>
                                                {nurse.nombre_enfermero + ' ' + nurse.apellido_enfermero + ' - ' + nurse.dni_enfermero}
                                            </option>
                                        ))
                                    }

                                </select>
                            </div>
                            <div className="formGroup">
                                <label htmlFor="enfermero">Historia Clínica</label>
                                <textarea cols={40} rows={10} defaultValue={historia_clinica} onChange={(e) => { setHistoria_clinica(e.target.value) }}>

                                </textarea>
                            </div>
                        </div>
                    </div>

                    <Button type={'submit'} text="Enviar" onClick={handleSubmit} />
                </form>
            </div>
        </div>
    );
}
