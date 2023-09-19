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
    console.log(data);
    return data;
  } catch (e) {
    return e.message;
  }
}
