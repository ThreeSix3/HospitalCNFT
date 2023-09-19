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

export async function obtenerLlamados(){
  try{
    const llamados = await fetch("https://api-olimpiada-g1.up.railway.app/llamados/noatendidos/codigoazul");
    const data = await llamados.json();
    return data;
  }catch(e){
    return e.message;
  }
}

export async function obtenerLlamadosNoAtendidosPorEnfermero(id_enfermero, filtro_atendido){
  try{
    const llamados = await fetch(`https://api-olimpiada-g1.up.railway.app/llamados/${id_enfermero}/fAtendido/${filtro_atendido}`);
    const data = await llamados.json();
    return data;
  }catch(e){
    return e.message;
  }
}
