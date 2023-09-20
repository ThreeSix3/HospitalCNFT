export async function iniciarSesion(usuario, contrasena) {
  try {
    const respuesta = await fetch("https://api-olimpiada-g1.up.railway.app/iniciarSesion", {
      headers: {
        "Content-Type": "application/json",
        cache: "no-cache",
      },
      method: "POST",
      body: JSON.stringify({
        nombre_usuario: usuario,
        contrasena: contrasena,
      }),
    });
    const data = await respuesta.json();
    return data;
  } catch (e) {
    return e.message;
  }
}

export async function obtenerLlamados() {
  try {
    const llamados = await fetch("https://api-olimpiada-g1.up.railway.app/llamados/noatendidos/codigoazul");
    const data = await llamados.json();
    return data;
  } catch (e) {
    return e.message;
  }
}

export async function obtenerLlamadosPorEnfermero(id_enfermero, filtro_atendido) {
  try {
    const llamados = await fetch(`https://api-olimpiada-g1.up.railway.app/llamados/${id_enfermero}/fAtendido/${filtro_atendido}`);
    const data = await llamados.json();
    return data;
  } catch (e) {
    return e.message;
  }
}
function obtenerFechaHoraActualSQL() {
  // Obtener la fecha y hora actual en UTC
  const fechaHoraActualUTC = new Date();

  // Calcular el desplazamiento de tiempo para la zona horaria -3 en milisegundos
  const desplazamientoHorario = -3 * 60 * 60 * 1000;

  // Aplicar el desplazamiento para obtener la fecha y hora en la zona horaria deseada
  const fechaHoraEnZonaHoraria = new Date(fechaHoraActualUTC.getTime() + desplazamientoHorario);

  // Formatear la fecha y hora en el formato SQL 'YYYY-MM-DD HH:MM:SS'
  const fechaSQL = fechaHoraEnZonaHoraria.toISOString().slice(0, 19).replace('T', ' ');

  return fechaSQL;
}


export async function marcarLlamadoComoAtendido(id_llamado) {
  let fechaFormateada = obtenerFechaHoraActualSQL();
  try {
    const llamado = await fetch(`https://api-olimpiada-g1.up.railway.app/llamados/${id_llamado}`, {
      headers: {
        "Content-Type": "application/json",
        cache: "no-cache",
      },
      method: "PUT",
      body: JSON.stringify({
        estado_llamado: 1,
        fhora_atencion_llamado: fechaFormateada,
      }),
    });
    const data = await llamado.json();
    return data;
  } catch (e) {
    console.log(e);
  }
  //console.log(obtenerFechaHoraActualSQL());
}
