export async function iniciarSesion(usuario, contrasena) {
  try {
    const respuesta = await fetch("http://192.168.1.111:8080/iniciarSesion", {
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
