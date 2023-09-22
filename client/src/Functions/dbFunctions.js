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
    const respuesta = await fetch("https://api-olimpiada-g1.up.railway.app/llamados");
    const data = await respuesta.json();
    return data;
  } catch (e) {
    return e.message;
  }
}
export async function obtenerCantidadLlamadosAtendidosCodigoAzul() {
  try {
    const respuesta = await fetch("https://api-olimpiada-g1.up.railway.app/llamados/cantidad/codigoazul/atendidos");
    const data = await respuesta.json();
    return data;
  } catch (e) {
    return e.message;
  }
}
export async function obtenerCantidadLlamadosAtendidosCodigoAzulFiltroArea(filtro_area) {
    try {
      const respuesta = await fetch(`https://api-olimpiada-g1.up.railway.app/llamados/cantidad/codigoazul/atendidos/area/${filtro_area}`);
      const data = await respuesta.json();
      return data;
    } catch (e) {
      return e.message;
    }
  }
  export async function obtenerCantidadLlamadosAtendidosCodigoAzulFiltroUbi(filtro_ubicacion) {
    try {
      const respuesta = await fetch(`https://api-olimpiada-g1.up.railway.app/llamados/cantidad/codigoazul/atendidos/ubicacion/${filtro_ubicacion}`);
      const data = await respuesta.json();
      return data;
    } catch (e) {
      return e.message;
    }
  }



  export async function obtenerCantidadLlamadosNoAtendidosCodigoAzul() {
    try {
      const respuesta = await fetch("https://api-olimpiada-g1.up.railway.app/llamados/cantidad/codigoazul");
      const data = await respuesta.json();
      return data;
    } catch (e) {
      return e.message;
    }
  }
  export async function obtenerCantidadLlamadosNoAtendidosCodigoAzulFiltroArea(filtro_area) {
    try {
      const respuesta = await fetch(`https://api-olimpiada-g1.up.railway.app/llamados/cantidad/codigoazul/area/${filtro_area}`);
      const data = await respuesta.json();
      return data;
    } catch (e) {
      return e.message;
    }
  }
  export async function obtenerCantidadLlamadosNoAtendidosCodigoAzulFiltroUbi(filtro_ubicacion) {
    try {
      const respuesta = await fetch(`https://api-olimpiada-g1.up.railway.app/llamados/cantidad/codigoazul/ubicacion/${filtro_ubicacion}`);
      const data = await respuesta.json();
      return data;
    } catch (e) {
      return e.message;
    }
  }




  export async function obtenerCantidadLlamadosAtendidosNormales() {
    try {
      const respuesta = await fetch("https://api-olimpiada-g1.up.railway.app/llamados/cantidad/atendidos");
      const data = await respuesta.json();
      return data;
    } catch (e) {
      return e.message;
    }
  }
  export async function obtenerCantidadLlamadosAtendidosNormalesFiltroArea(filtro_area) {
    try {
      const respuesta = await fetch(`https://api-olimpiada-g1.up.railway.app/llamados/cantidad/atendidos/area/${filtro_area}`);
      const data = await respuesta.json();
      return data;
    } catch (e) {
      return e.message;
    }
  }
  export async function obtenerCantidadLlamadosAtendidosNormalesFiltroUbi(filtro_ubicacion) {
    try {
      const respuesta = await fetch(`https://api-olimpiada-g1.up.railway.app/llamados/cantidad/atendidos/ubicacion/${filtro_ubicacion}`);
      const data = await respuesta.json();
      return data;
    } catch (e) {
      return e.message;
    }
  }

  

  export async function obtenerCantidadLlamadosNoAtendidosNormales() {
    try {
      const respuesta = await fetch("https://api-olimpiada-g1.up.railway.app/llamados/cantidad/noatendidos");
      const data = await respuesta.json();
      return data;
    } catch (e) {
      return e.message;
    }
  }
  export async function obtenerCantidadLlamadosNoAtendidosNormalesFiltroArea(filtro_area) {
    try {
      const respuesta = await fetch(`https://api-olimpiada-g1.up.railway.app/llamados/cantidad/noatendidos/area/${filtro_area}`);
      const data = await respuesta.json();
      return data;
    } catch (e) {
      return e.message;
    }
  }
  export async function obtenerCantidadLlamadosNoAtendidosNormalesFiltroUbi(filtro_ubicacion) {
    try {
      const respuesta = await fetch(`https://api-olimpiada-g1.up.railway.app/llamados/cantidad/noatendidos/ubicacion/${filtro_ubicacion}`);
      const data = await respuesta.json();
      return data;
    } catch (e) {
      return e.message;
    }
  }



  export async function obtenerPacientes() {
    try {
      const respuesta = await fetch("https://api-olimpiada-g1.up.railway.app/pacientes");
      const data = await respuesta.json();
      return data;
    } catch (e) {
      return e.message;
    }
  }


export async function borrarPaciente(id_paciente) {
  try {
    const respuesta = await fetch(`https://web-production-4bc5.up.railway.app/https://api-olimpiada-g1.up.railway.app/pacientes/${id_paciente}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        cache: "no-cache",
      },
    });
    const data = await respuesta.json();
    return data;
  } catch (e) {
    return e.message;
  }
}

export async function borrarUsuario(id_usuario) {
    try {
      const respuesta = await fetch(`https://web-production-4bc5.up.railway.app/https://api-olimpiada-g1.up.railway.app/usuarios/${id_usuario}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          cache: "no-cache",
        },
      });
      const data = await respuesta.json();
      return data;
    } catch (e) {
      return e.message;
    }
  }
export async function obtenerUsuarios() {
  try {
    const respuesta = await fetch("https://api-olimpiada-g1.up.railway.app/usuarios");
    const data = await respuesta.json();
    return data;
  } catch (e) {
    return e.message;
  }
}

export async function actualizarUsuario(id_usuario, nombre_usuario, contrasena_usuario, super_usuario, id_enfermero){
    try{
        const respuesta = await fetch(`https://web-production-4bc5.up.railway.app/https://api-olimpiada-g1.up.railway.app/usuarios/${id_usuario}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        cache: "no-cache",
      },
      body:JSON.stringify({
        nombre_usuario : nombre_usuario,
      contrasena_usuario: contrasena_usuario,
      super_usuario : super_usuario,
      id_enfermero : id_enfermero
      })
    });
    const data = await respuesta.json();
    return data;
    }catch(e){

    }
}

export async function actualizarPaciente(id_paciente, nombre_paciente,
  apellido_paciente,
  dni_paciente,
  telefono_paciente,
  id_grupo_factor_paciente,
  falta_paciente,
  domicilio_paciente,
  historia_clinica_paciente,
  motivo_ingreso_paciente,
  id_ubicacion,
  id_enfermero){
  try{
      const respuesta = await fetch(`https://web-production-4bc5.up.railway.app/https://api-olimpiada-g1.up.railway.app/pacientes/${id_paciente}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
      cache: "no-cache",
    },
    body:JSON.stringify({
      nombre_paciente :nombre_paciente,
  apellido_paciente : apellido_paciente,
  dni_paciente : dni_paciente,
  telefono_paciente : telefono_paciente,
  id_grupo_factor_paciente : id_grupo_factor_paciente,
  falta_paciente : falta_paciente,
  domicilio_paciente : domicilio_paciente,
  historia_clinica_paciente : historia_clinica_paciente,
  motivo_ingreso_paciente : motivo_ingreso_paciente,
  id_ubicacion : id_ubicacion,
  id_enfermero : id_enfermero
    })
  });
  const data = await respuesta.json();
  return data;
  }catch(e){

  }
}

export async function obtenerEnfermeros() {
  try {
    const respuesta = await fetch("https://api-olimpiada-g1.up.railway.app/enfermeros");
    const data = await respuesta.json();
    return data;
  } catch (e) {
    return e.message;
  }
}

  export async function obtenerAreas(){
    try{
        const respuesta = await fetch("https://api-olimpiada-g1.up.railway.app/areas");
      const data = await respuesta.json();
      return data;
    }catch(e){
        return e.message
    }
  }
  export async function obtenerUbicaciones(){
    try{
        const respuesta = await fetch("https://api-olimpiada-g1.up.railway.app/ubicaciones");
      const data = await respuesta.json();
      return data;
    }catch(e){
        return e.message
    }
  }


  export async function obtenerGruposSanguineos(){
    try{
      const respuesta = await fetch("https://api-olimpiada-g1.up.railway.app/grupoYFactor");
    const data = await respuesta.json();
    return data;
  }catch(e){
      return e.message
  }
  }