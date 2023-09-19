import mysql from "mysql2";
import {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
  MYSQL_PORT,
} from "./config.js";
//
const pool = mysql
  .createPool({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    port: MYSQL_PORT,
  })
  .promise();
//
/*./node_modules/.bin/jsdoc -c jsdoc-conf.json -t ./node_modules/better-docs database.js*/
/**
 * @async
 * @function obtenerAreas
 * @category Áreas
 * @subcategory All
 * @desc SELECT - Obtiene todos los registros de la tabla areas
 * @returns {Array} Registros
 * @throws {Error} Error
 */
export async function obtenerAreas() {
  try {
    const [respuesta] = await pool.query("SELECT * FROM areas");
    return respuesta;
  } catch (e) {
    throw new Error(e);
  }
}

/**
 * @async
 * @function crearArea
 * @category Áreas
 * @desc INSERT - Crea un registro en la tabla areas
 * @param {string} nombre_area
 * @returns {number} id del registro ingresado
 * @throws {Error} Error
 */
export async function crearArea({ nombre_area }) {
  try {
    const respuesta = await pool.query(
      "INSERT INTO areas (nombre_area) VALUES (?)",
      [nombre_area]
    );
    return respuesta.insertId;
  } catch (e) {
    throw new Error(e);
  }
}

/**
 * @async
 * @function borrarArea
 * @category Áreas
 * @desc DELETE - Elimina un registro de la tabla de áreas.
 * @param {number} id_area - El ID del área que se va a eliminar.
 * @returns {object} - Un objeto que contiene la respuesta de la base de datos después de la eliminación.
 * @throws {Error} Error - Se lanza una excepción en caso de error durante la eliminación.
 */
export async function borrarArea({ id_area }) {
  try {
    const respuesta = await pool.query("DELETE FROM areas WHERE id_area = ?;", [
      id_area,
    ]);
    return respuesta;
  } catch (e) {
    throw new Error(e);
  }
}

/**
 * @async
 * @function actualizarArea
 * @category Áreas
 * @desc UPDATE - Actualiza un registro en la tabla de áreas.
 * @param {number} id_area - El ID del área que se va a actualizar.
 * @param {string} nombre_area - El nuevo nombre del área.
 * @returns {object} - Un objeto que contiene la respuesta de la base de datos después de la actualización.
 * @throws {Error} Error - Se lanza una excepción en caso de error durante la actualización.
 */
export async function actualizarArea({ id_area, nombre_area }) {
  try {
    const respuesta = await pool.query(
      "UPDATE usuarios SET nombre_area = ? WHERE id_area = ?",
      [nombre_area, id_area]
    );
    return respuesta;
  } catch (e) {
    throw new Error(e);
  }
}
/**
 * @async
 * @function obtenerEnfermeros
 * @category Enfermeros
 * @subcategory Enfermeros
 * @desc SELECT - Obtiene todos los registros de la tabla enfermeros
 * @returns {Array} Registros
 * @throws {Error} Error
 */

export async function obtenerEnfermeros() {
  try {
    const [respuesta] = await pool.query("SELECT * FROM enfermeros");
    return respuesta;
  } catch (e) {
    return e.message;
  }
}

/**
 * @async
 * @function borrarEnfermero
 * @category Enfermeros
 * @desc DELETE - Elimina un registro de la tabla enfermeros.
 * @param {number} id_enfermero - El ID del enfermero que se va a eliminar.
 * @returns {object} - Un objeto que contiene la respuesta de la base de datos después de la eliminación.
 * @throws {Error} Error - Se lanza una excepción en caso de error durante la eliminación.
 */

export async function borrarEnfermero({ id_enfermero }) {
  try {
    const respuesta = await pool.query(
      "DELETE FROM enfermeros WHERE id_enfermero = ?;",
      [id_enfermero]
    );
    return respuesta;
  } catch (e) {
    throw new Error(e);
  }
}

/**
 * @async
 * @function crearEnfermero
 * @category Enfermeros
 * @desc INSERT - Crea un registro en la tabla enfermeros
 * @param {string} nombre_enfermero
 * @param {string} apellido_enfermero
 * @param {string} dni_enfermero
 * @param {string} telefono_enfermero
 * @returns {number} id del registro ingresado
 * @throws {Error} Error
 */

export async function crearEnfermero({
  nombre_enfermero,
  apellido_enfermero,
  dni_enfermero,
  telefono_enfermero,
}) {
  try {
    const respuesta = await pool.query(
      "INSERT INTO enefermeros (nombre_enfermero, apellido_enfermero, dni_enfermero, telefono_enfermero) VALUES (?,?,?,?,?)",
      [
        nombre_enfermero,
        apellido_enfermero,
        dni_enfermero,
        telefono_enfermero,
      ]
    );
    return respuesta.insertId;
  } catch (e) {
    throw new Error(e);
  }
}

/**
 * @async
 * @function actualizarEnfermeros
 * @category Enfermeros
 * @desc Actualiza un registro en la tabla de enfermeros.
 * @param {number} id_enfermero - El ID del enfermero que se va a actualizar.
 * @param {string} nombre_enfermero - El nuevo nombre del enfermero.
 * @param {string} apellido_enfermero - El nuevo apellido del enfermero.
 * @param {string} dni_enfermero - El nuevo DNI (Documento Nacional de Identidad) del enfermero.
 * @param {string} telefono_enfermero - El nuevo número de teléfono del enfermero.
 * @returns {object} - Un objeto que contiene la respuesta de la base de datos después de la actualización.
 * @throws {Error} Error - Se lanza una excepción en caso de error durante la actualización.
 */

export async function actualizarEnfermeros({
  id_enfermero,
  nombre_enfermero,
  apellido_enfermero,
  dni_enfermero,
  telefono_enfermero,
}) {
  try {
    const respuesta = await pool.query(
      "UPDATE usuarios SET nombre_enfermero = ?, apellido_enfermero = ?, dni_enfermero = ?, telefono_enfermero = ? WHERE id_enfermero = ?",
      [
        nombre_enfermero,
        apellido_enfermero,
        dni_enfermero,
        telefono_enfermero,
        id_enfermero,
      ]
    );
    return respuesta;
  } catch (e) {
    throw new Error(e);
  }
}

/**
 * @async
 * @function obtenerGrupoFactor
 * @category Grupo y factor
 * @subcategory All
 * @desc SELECT - Obtiene todos los registros de la tabla grupo_factor
 * @returns {Array} Registros
 * @throws {Error} Error
 */
export async function obtenerGrupoFactor() {
  try {
    const [respuesta] = await pool.query("SELECT * FROM grupo_factor");
    return respuesta;
  } catch (e) {
    return e.message;
  }
}

/**
 * @async
 * @function obtenerLlamados
 * @category Llamados
 * @subcategory All
 * @desc SELECT - Obtiene todos los registros de la tabla llamados
 * @returns {Array} Registros
 * @throws {Error} Error
 */
//PARA QUE VUELVA A BUILDEAR
export async function obtenerLlamados(atendidos) {
  let filtroAtentido_valor = atendidos !== null? `WHERE estado_llamado = ${atendidos}` : ''
  try {
    const respuesta = await pool.query(`
    SELECT 
        id_llamado,
        desc_tipo_llamado, 
        estado_llamado,
        fhora_llamado, 
        fhora_atencion_llamado, 
        nombre_ubicacion, 
        numero_ubicacion, 
        desc_origen_llamado,
        llamados.id_paciente,
        id_enfermero
    FROM llamados
    INNER JOIN tipos_llamados ON llamados.id_tipo_llamado = tipos_llamados.id_tipo_llamado
    INNER JOIN ubicaciones ON llamados.id_ubicacion = ubicaciones.id_ubicacion
    LEFT JOIN origen_llamados ON llamados.id_origen_llamado = origen_llamados.id_origen_llamado
    LEFT JOIN pacientes ON llamados.id_paciente = pacientes.id_paciente
    ${filtroAtentido_valor}
;`);
    return respuesta[0];
  } catch (e) {
    return e.message;
  }
}
export async function obtenerLlamadosCodigoAzul(atendidos) {
  let filtroAtentido_valor = atendidos !== null? `AND estado_llamado = ${atendidos}` : ''
  try {
    const respuesta = await pool.query(`
    SELECT 
        id_llamado,
        desc_tipo_llamado, 
        estado_llamado,
        fhora_llamado, 
        nombre_area,
        nombre_ubicacion, 
        numero_ubicacion
    FROM llamados
    INNER JOIN tipos_llamados ON llamados.id_tipo_llamado = tipos_llamados.id_tipo_llamado
    INNER JOIN ubicaciones ON llamados.id_ubicacion = ubicaciones.id_ubicacion
    INNER JOIN areas ON ubicaciones.id_area = areas.id_area
    WHERE id_paciente IS NULL ${filtroAtentido_valor} 
    ORDER BY fhora_llamado DESC
;`);
    return respuesta[0];
  } catch (e) {
    return e.message;
  }
}
export async function obtenerLlamadoPorId(id_llamado) {
 
  try {
    const respuesta = await pool.query(`
    SELECT 
       *
    FROM llamados
    WHERE id_llamado = ?
;`,[id_llamado]);
    return respuesta[0];
  } catch (e) {
    return e.message;
  }
}
/**
 * @async
 * @function obtenerLlamadosDeUnEnfermero
 * @category Llamados
 * @desc SELECT - Obtiene los llamados atendidos por un enfermero específico con filtros opcionales.
 * @param {number} id_enfermero - El ID del enfermero cuyos llamados se desean obtener.
 * @param {number|null} filtroAtendido - Filtro opcional para el estado de los llamados (null si no se aplica).
 * @param {number|null} filtroPorPaciente - Filtro opcional para el ID del paciente (null si no se aplica).
 * @returns {Array} Un array de objetos con información de los llamados atendidos por el enfermero, filtrados según los parámetros opcionales.
 * @throws {Error} Error en caso de fallo.
 */
export async function obtenerLlamadosDeUnEnfermero(id_enfermero, filtroAtendido, filtroPorPaciente) {

  let filtroAtentido_valor = filtroAtendido !== null? `AND estado_llamado = ${filtroAtendido}` : '', filtroPorPaciente_valor = filtroPorPaciente !== null? `AND llamados.id_paciente = ${filtroPorPaciente}` : '';
  try {
    const respuesta = await pool.query(`
    SELECT 
        id_llamado,
        estado_llamado,
        desc_tipo_llamado, 
        fhora_llamado, 
        fhora_atencion_llamado, 
        nombre_ubicacion, 
        numero_ubicacion, 
        desc_origen_llamado,
        llamados.id_paciente
    FROM llamados
    INNER JOIN tipos_llamados ON llamados.id_tipo_llamado = tipos_llamados.id_tipo_llamado
    INNER JOIN ubicaciones ON llamados.id_ubicacion = ubicaciones.id_ubicacion
    LEFT JOIN origen_llamados ON llamados.id_origen_llamado = origen_llamados.id_origen_llamado
    LEFT JOIN pacientes ON llamados.id_paciente = pacientes.id_paciente
    WHERE id_enfermero = ? ${filtroAtentido_valor} ${filtroPorPaciente_valor}
    ;`, [id_enfermero]);
    return respuesta[0];
  } catch (e) {
    return e.message;
  }
}

/**
 * @async
 * @function obtenerTiempoPromedioDeAtencionDeLLamados
 * @category Llamados
 * @desc SELECT - Obtiene el tiempo promedio de atención de los llamados atendidos generales o por un enfermero específico.
 * @param {number|undefined} id_enfermero - El ID del enfermero para el cual se calculará el tiempo promedio de atención (opcional).
 * @returns {string} Tiempo promedio de atención en formato hh:mm:ss.
 * @throws {Error} Error en caso de fallo.
 */

export async function obtenerTiempoPromedioDeAtencionDeLLamados(id_enfermero){
    let filtro = id_enfermero !== undefined ? `AND id_enfermero = ${id_enfermero}` : ''; 
    console.log(filtro);
    try{
        const [respuesta] = await pool.query(`
        SELECT 
            CONCAT(
                LPAD(FLOOR(AVG(total_segundos) / 3600), 2, '0'),
                ':',
                LPAD(FLOOR((AVG(total_segundos) % 3600) / 60), 2, '0'),
                ':',
                LPAD(AVG(total_segundos) % 60, 2, '0')
            ) AS tiempo_en_formato_hh_mm_ss
        FROM (
            SELECT 
                TIME_TO_SEC(TIMEDIFF(fhora_atencion_llamado, fhora_llamado)) AS total_segundos
            FROM llamados
            INNER JOIN pacientes ON llamados.id_paciente = pacientes.id_paciente
            WHERE fhora_atencion_llamado IS NOT NULL ${filtro}
        ) AS subquery;`)
        return respuesta[0].tiempo_en_formato_hh_mm_ss;
    }catch(e){
        return e.message;
    }
}
/**
 * @async
 * @function crearLlamado
 * @category Llamados
 * @desc INSERT - Crea un registro en la tabla de llamados.
 * @param {number} id_tipo_llamado - El ID del tipo de llamado.
 * @param {number} id_ubicacion - El ID de la ubicación del llamado.
 * @param {number} id_origen_llamado (Opcional) - El ID del origen del llamado (opcional).
 * @param {number} id_paciente (Opcional) - El ID del paciente relacionado con el llamado (opcional).
 * @returns {number} - El ID del registro ingresado.
 * @throws {Error} Error - Se lanza una excepción en caso de error durante la inserción.
 */

export async function crearLlamado({
  id_tipo_llamado,
  id_ubicacion,
  id_origen_llamado,
  id_paciente,
}) {
  try {
    if (id_origen_llamado && id_paciente) {
      // Si se proporcionan id_origen_llamado y id_paciente, ejecuta una consulta SQL con esos valores.
      const respuesta = await pool.query(
        "INSERT INTO llamados (id_tipo_llamado, id_ubicacion, id_origen_llamado, id_paciente) VALUES (?,?,?,?)",
        [id_tipo_llamado, id_ubicacion, id_origen_llamado, id_paciente]
      );
      return respuesta.insertId;
    } else {
      // Si no se proporcionan id_origen_llamado y id_paciente, ejecuta una consulta SQL sin esos valores.
      const respuesta = await pool.query(
        "INSERT INTO llamados (id_tipo_llamado, id_ubicacion) VALUES (?,?)",
        [id_tipo_llamado, id_ubicacion]
      );
      return respuesta.insertId;
    }
  } catch (e) {
    throw new Error(e);
  }
}

/**
 * @async
 * @function actualizarLlamado
 * @category Llamados
 * @desc UPDATE - Actualiza un registro en la tabla de llamados.
 * @param {number} id_llamado - El ID del llamado que se va a actualizar.
 * @param {string} estado_llamado - El nuevo estado del llamado.
 * @param {date} fhora_atencion_llamado - La nueva fecha y hora de atención del llamado.
 * @returns {object} - Un objeto que contiene la respuesta de la base de datos después de la actualización.
 * @throws {Error} Error - Se lanza una excepción en caso de error durante la actualización.
 */
export async function actualizarLlamado({
  id_llamado,
  estado_llamado,
  fhora_atencion_llamado,
}) {
  try {
    const respuesta = await pool.query(
      "UPDATE llamados SET estado_llamado = ?, fhora_atencion_llamado = ? WHERE id_llamado = ?",
      [estado_llamado, fhora_atencion_llamado, id_llamado]
    );
    return respuesta;
  } catch (e) {
    throw new Error(e);
  }
}

/**
 * @async
 * @function borrarLlamado
 * @category Llamados
 * @desc DELETE - Elimina un registro de la tabla de llamados.
 * @param {number} id_llamado - El ID del llamado que se va a eliminar.
 * @returns {object} - Un objeto que contiene la respuesta de la base de datos después de la eliminación.
 * @throws {Error} Error - Se lanza una excepción en caso de error durante la eliminación.
 */
export async function borrarLlamado({ id_llamado }) {
  try {
    const respuesta = await pool.query(
      "DELETE FROM llamados WHERE id_llamado = ?;",
      [id_llamado]
    );
    return respuesta;
  } catch (e) {
    throw new Error(e);
  }
}

/**
 * @async
 * @function obtenerOrigenLlamados
 * @category Origen llamados
 * @subcategory All
 * @desc SELECT - Obtiene todos los registros de la tabla origen_llamados
 * @returns {Array} Registros
 * @throws {Error} Error
 */
export async function obtenerOrigenLlamados() {
  try {
    const [respuesta] = await pool.query("SELECT * FROM llamados");
    return respuesta;
  } catch (e) {
    return e.message;
  }
}

/**
 * @async
 * @function obtenerTiposLLamados
 * @category Tipos llamados
 * @subcategory All
 * @desc SELECT - Obtiene todos los registros de la tabla tipos_llamados
 * @returns {Array} Registros
 * @throws {Error} Error
 */
export async function obtenerTiposLLamados() {
  try {
    const [respuesta] = await pool.query("SELECT * FROM tipos_llamados");
    return respuesta;
  } catch (e) {
    return e.message;
  }
}
/**
 * @async
 * @function obtenerPacientes
 * @category Pacientes
 * @subcategory All
 * @desc SELECT - Obtiene todos los registros de la tabla pacientes
 * @returns {Array} Registros
 * @throws {Error} Error
 */
export async function obtenerPacientes() {
  try {
    const [respuesta] = await pool.query(`
    SELECT 
        id_paciente,
        nombre_paciente,
        apellido_paciente,
        dni_paciente,
        telefono_paciente,
        desc_grupo_factor,
        fnac_paciente,
        domicilio_paciente,
        historia_clinica_paciente,
        motivo_ingreso_paciente,
        nombre_ubicacion, 
        numero_ubicacion, 
        id_enfermero
    FROM pacientes
    INNER JOIN grupo_factor ON pacientes.id_grupo_factor_paciente = grupo_factor.id_grupo_factor
    INNER JOIN ubicaciones ON pacientes.id_ubicacion = ubicaciones.id_ubicacion 
    `);
    return respuesta;
  } catch (e) {
    return e.message;
  }
}

/**
 * @async
 * @function crearPaciente
 * @category Pacientes
 * @desc INSERT - Crea un registro en la tabla de pacientes.
 * @param {string} nombre_paciente - El nombre del paciente.
 * @param {string} apellido_paciente - El apellido del paciente.
 * @param {string} dni_paciente - El DNI (Documento Nacional de Identidad) del paciente.
 * @param {string} telefono_paciente - El número de teléfono del paciente.
 * @param {number} id_grupo_factor_paciente - El ID del grupo de factor del paciente.
 * @param {date} fnac_paciente - La fecha de nacimiento del paciente.
 * @param {string} domicilio_paciente - El domicilio del paciente.
 * @param {string} historia_clinica_paciente - La historia clínica del paciente.
 * @param {string} motivo_ingreso_paciente - El motivo de ingreso del paciente.
 * @param {number} id_ubicacion - El ID de la ubicación del paciente.
 * @param {number} id_enfermero - El ID del enfermero asociado al paciente.
 * @returns {number} - El ID del registro ingresado.
 * @throws {Error} Error - Se lanza una excepción en caso de error durante la inserción.
 */

export async function crearPaciente({
  nombre_paciente,
  apellido_paciente,
  dni_paciente,
  telefono_paciente,
  id_grupo_factor_paciente,
  fnac_paciente,
  domicilio_paciente,
  historia_clinica_paciente,
  motivo_ingreso_paciente,
  id_ubicacion,
  id_enfermero,
}) {
  try {
    const respuesta = await pool.query(
      "INSERT INTO pacientes (nombre_paciente, apellido_paciente, dni_paciente, telefono_paciente, id_grupo_factor_paciente, fnac_paciente, domicilio_paciente, historia_clinica_paciente, motivo_ingreso_paciente, id_ubicacion, id_enfermero) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        nombre_paciente,
        apellido_paciente,
        dni_paciente,
        telefono_paciente,
        id_grupo_factor_paciente,
        fnac_paciente,
        domicilio_paciente,
        historia_clinica_paciente,
        motivo_ingreso_paciente,
        id_ubicacion,
        id_enfermero,
      ]
    );
    return respuesta.insertId;
  } catch (e) {
    throw new Error(e);
  }
}

/**
 * @async
 * @function borrarPaciente
 * @category Pacientes
 * @desc DELETE - Elimina un registro de la tabla de pacientes.
 * @param {number} id_paciente - El ID del paciente que se va a eliminar.
 * @returns {object} - Un objeto que contiene la respuesta de la base de datos después de la eliminación.
 * @throws {Error} Error - Se lanza una excepción en caso de error durante la eliminación.
 */

export async function borrarPaciente({ id_paciente }) {
  try {
    const respuesta = await pool.query(
      "DELETE FROM pacientes WHERE id_paciente = ?;",
      [id_paciente]
    );
    return respuesta;
  } catch (e) {
    throw new Error(e);
  }
}

/**
 * @async
 * @function actualizarPaciente
 * @category Pacientes
 * @desc UPDATE - Actualiza un registro en la tabla de pacientes.
 * @param {number} id_paciente - El ID del paciente que se va a actualizar.
 * @param {string} nombre_paciente - El nuevo nombre del paciente.
 * @param {string} apellido_paciente - El nuevo apellido del paciente.
 * @param {string} dni_paciente - El nuevo DNI del paciente.
 * @param {string} telefono_paciente - El nuevo número de teléfono del paciente.
 * @param {number} id_grupo_factor_paciente - El nuevo ID del grupo de factor del paciente.
 * @param {string} fnac_paciente - La nueva fecha de nacimiento del paciente.
 * @param {string} falta_paciente - La nueva fecha de alta del paciente.
 * @param {string} domicilio_paciente - El nuevo domicilio del paciente.
 * @param {string} historia_clinica_paciente - La nueva historia clínica del paciente.
 * @param {string} motivo_ingreso_paciente - El nuevo motivo de ingreso del paciente.
 * @param {number} id_ubicacion - El nuevo ID de la ubicación del paciente.
 * @param {number} id_enfermero - El nuevo ID del enfermero asociado al paciente.
 * @returns {object} - Un objeto que contiene la respuesta de la base de datos después de la actualización.
 * @throws {Error} Error - Se lanza una excepción en caso de error durante la actualización.
 */
export async function actualizarPaciente({
  id_paciente,
  nombre_paciente,
  apellido_paciente,
  dni_paciente,
  telefono_paciente,
  id_grupo_factor_paciente,
  fnac_paciente,
  falta_paciente,
  domicilio_paciente,
  historia_clinica_paciente,
  motivo_ingreso_paciente,
  id_ubicacion,
  id_enfermero,
}) {
  try {
    const respuesta = await pool.query(
      "UPDATE pacientes SET nombre_paciente =?, apellido_paciente=?, dni_paciente=?, telefono_paciente=?, id_grupo_factor_paciente=?, fnac_paciente=?, falta_paciente=?, domicilio_paciente=?, historia_clinica_paciente=?, motivo_ingreso_paciente=?, id_ubicacion=?, id_enfermero=? WHERE id_paciente = ?",
      [
        nombre_paciente,
        apellido_paciente,
        dni_paciente,
        telefono_paciente,
        id_grupo_factor_paciente,
        fnac_paciente,
        falta_paciente,
        domicilio_paciente,
        historia_clinica_paciente,
        motivo_ingreso_paciente,
        id_ubicacion,
        id_enfermero,
        id_paciente,
      ]
    );
    return respuesta;
  } catch (e) {
    throw new Error(e);
  }
}

/**
 * @async
 * @function actualizarAltaEHistoriaClinicaPaciente
 * @category Pacientes
 * @desc UPDATE - Actualiza la fecha de alta y la historia clínica de un paciente en la tabla de pacientes.
 * @param {number} id_paciente - El ID del paciente cuya alta y historia clínica se van a actualizar.
 * @param {date} falta_paciente - La nueva fecha de alta del paciente.
 * @param {string} historia_clinica_paciente - La nueva historia clínica del paciente.
 * @returns {object} - Un objeto que contiene la respuesta de la base de datos después de la actualización.
 * @throws {Error} Error - Se lanza una excepción en caso de error durante la actualización.
 */

export async function actualizarAltaEHistoriaClinicaPaciente({
  id_paciente,
  falta_paciente,
  historia_clinica_paciente,
}) {
  try {
    const respuesta = await pool.query(
      "UPDATE pacientes SET falta_paciente=?, historia_clinica_paciente=? WHERE id_paciente = ?",
      [falta_paciente, historia_clinica_paciente, id_paciente]
    );
    return respuesta;
  } catch (e) {
    throw new Error(e);
  }
}
/**
 * @async
 * @function obtenerUbicaciones
 * @category Ubicaciones
 * @subcategory All
 * @desc SELECT - Obtiene todos los registros de la tabla ubicaciones
 * @returns {Array} Registros
 * @throws {Error} Error
 */
export async function obtenerUbicaciones() {
  try {
    const [respuesta] = await pool.query("SELECT id_ubicacion, ubicaciones.id_area, nombre_area, nombre_ubicacion, numero_ubicacion FROM ubicaciones INNER JOIN areas ON ubicaciones.id_area = areas.id_area");
    return respuesta;
  } catch (e) {
    return e.message;
  }
}

/**
 * @async
 * @function borrarUbicacion
 * @category Ubicaciones
 * @desc DELETE - Elimina un registro en la tabla de ubicaciones.
 * @param {number} id_ubicacion - El ID de la ubicación que se va a eliminar.
 * @returns {object} - Un objeto que contiene la respuesta de la base de datos después de la eliminación.
 * @throws {Error} Error - Se lanza una excepción en caso de error durante la eliminación.
 */

export async function borrarUbicacion({ id_ubicacion }) {
  try {
    const respuesta = await pool.query(
      "DELETE FROM ubicaciones WHERE id_ubicacion = ?;",
      [id_ubicacion]
    );
    return respuesta;
  } catch (e) {
    throw new Error(e);
  }
}

/**
 * @async
 * @function crearUbicacion
 * @category Ubicaciones
 * @desc INSERT - Crea un registro en la tabla de ubicaciones.
 * @param {number} id_area - El ID del área a la que pertenece la ubicación.
 * @param {string} nombre_ubicacion - El nombre de la ubicación.
 * @param {number} numero_ubicacion - El número de la ubicación.
 * @returns {number} - El ID del registro ingresado.
 * @throws {Error} Error - Se lanza una excepción en caso de error durante la inserción.
 */
export async function crearUbicacion({
  id_area,
  nombre_ubicacion,
  numero_ubicacion,
}) {
  try {
    const respuesta = await pool.query(
      "INSERT INTO ubicaciones (id_area, nombre_ubicacion, numero_ubicacion) VALUES (?,?,?)",
      [id_area, nombre_ubicacion, numero_ubicacion]
    );
    return respuesta.insertId;
  } catch (e) {
    throw new Error(e);
  }
}

/**
 * @async
 * @function actualizarUbicacion
 * @category Ubicaciones
 * @desc UPDATE - Actualiza un registro en la tabla de ubicaciones.
 * @param {number} id_ubicacion - El ID de la ubicación que se va a actualizar.
 * @param {number} id_area - El nuevo ID del área al que pertenece la ubicación.
 * @param {string} nombre_ubicacion - El nuevo nombre de la ubicación.
 * @param {number} numero_ubicacion - El nuevo número de la ubicación.
 * @returns {object} - Un objeto que contiene la respuesta de la base de datos después de la actualización.
 * @throws {Error} Error - Se lanza una excepción en caso de error durante la actualización.
 */

export async function actualizarUbicacion({
  id_ubicacion,
  id_area,
  nombre_ubicacion,
  numero_ubicacion,
}) {
  try {
    const respuesta = await pool.query(
      "UPDATE ubicaciones SET id_area=?, nombre_ubicacion=?, numero_ubicacion=? WHERE id_ubicacion = ?",
      [id_area, nombre_ubicacion, numero_ubicacion, id_ubicacion]
    );
    return respuesta;
  } catch (e) {
    throw new Error(e);
  }
}

/**
 * @async
 * @function obtenerUsuarios
 * @category Usuarios
 * @subcategory All
 * @desc SELECT - Obtiene todos los registros de la tabla usuarios
 * @returns {Array} Registros
 * @throws {Error} Error
 */
export async function obtenerUsuarios() {
  try {
    const [respuesta] = await pool.query("SELECT * FROM usuarios");
    return respuesta;
  } catch (e) {
    return e.message;
  }
}

export async function obtenerUsuarioPorNombre(nombre_usuario) {
  try {
    const [respuesta] = await pool.query("SELECT * FROM usuarios WHERE nombre_usuario = ?",[nombre_usuario]);
    return respuesta[0];
  } catch (e) {
    return 'Error al obtener usuario por nombre '+ e.message;
  }
}

/**
 * @async
 * @function crearUsuario
 * @category Usuarios
 * @desc INSERT - Crea un registro en la tabla de usuarios.
 * @param {string} nombre_usuario - El nombre de usuario.
 * @param {string} contrasena_usuario - La contraseña del usuario.
 * @param {boolean} super_usuario - Indica si el usuario es un superusuario (verdadero o falso).
 * @returns {number} - El ID del registro ingresado.
 * @throws {Error} Error - Se lanza una excepción en caso de error durante la inserción.
 */
export async function crearUsuario({
  nombre_usuario,
  contrasena_usuario,
  super_usuario,
  id_enfermero
}) {
  try {
    const respuesta = await pool.query(
      "INSERT INTO usuarios (nombre_usuario, contrasena_usuario, super_usuario, id_enfermero) VALUES (?,?,?,?)",
      [nombre_usuario, contrasena_usuario, super_usuario,id_enfermero]
    );
    return respuesta.insertId;
  } catch (e) {
    throw new Error(e);
  }
}

/**
 * @async
 * @function borrarUsuario
 * @category Usuarios
 * @desc DELETE - Elimina un registro de la tabla de usuarios.
 * @param {number} id_usuario - El ID del usuario que se va a eliminar.
 * @returns {object} - Un objeto que contiene la respuesta de la base de datos después de la eliminación.
 * @throws {Error} Error - Se lanza una excepción en caso de error durante la eliminación.
 */
export async function borrarUsuario({ id_usuario }) {
  try {
    const respuesta = await pool.query(
      "DELETE FROM usuarios WHERE id_usuario = ?;",
      [id_usuario]
    );
    return respuesta;
  } catch (e) {
    throw new Error(e);
  }
}

/**
 * @async
 * @function actualizarUsuario
 * @category Usuarios
 * @desc UPDATE - Actualiza un registro en la tabla de usuarios.
 * @param {number} id_usuario - El ID del usuario que se va a actualizar.
 * @param {string} nombre_usuario - El nuevo nombre de usuario.
 * @param {string} contrasena_usuario - La nueva contraseña del usuario.
 * @param {boolean} super_usuario - Indica si el usuario es un superusuario (verdadero o falso).
 * @returns {object} - Un objeto que contiene la respuesta de la base de datos después de la actualización.
 * @throws {Error} Error - Se lanza una excepción en caso de error durante la actualización.
 */
export async function actualizarUsuario({
  id_usuario,
  nombre_usuario,
  contrasena_usuario,
  super_usuario,
  id_enfermero
}) {
  try {
    const respuesta = await pool.query(
      "UPDATE usuarios SET nombre_usuario = ?, contrasena_usuario = ?, super_usuario =?, id_enfermero=? WHERE id_usuario = ?",
      [nombre_usuario, contrasena_usuario, super_usuario,id_enfermero, id_usuario]
    );
    return respuesta;
  } catch (e) {
    throw new Error(e);
  }
}
