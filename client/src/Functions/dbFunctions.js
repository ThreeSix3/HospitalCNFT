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
  export async function obtenerCantidadLlamadosNoAtendidosCodigoAzul() {
    try {
      const respuesta = await fetch("https://api-olimpiada-g1.up.railway.app/llamados/cantidad/codigoazul");
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
  export async function obtenerCantidadLlamadosNoAtendidosNormales() {
    try {
      const respuesta = await fetch("https://api-olimpiada-g1.up.railway.app/llamados/codigoazul");
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

  export async function borrarPaciente(id_paciente){
    try {
        const respuesta = await fetch(`https://web-production-4bc5.up.railway.app/https://api-olimpiada-g1.up.railway.app/pacientes/${id_paciente}`,{
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