import express from "express";
import cors from "cors";
import * as db from "./database.js";
import { PORT } from "./config.js";
import CryptoJS from "crypto-js";
import axios from "axios";
import dotenv from "dotenv";
import cookie from "cookie";
const app = express();
app.use(express.json());
app.use(cors(
  {origin: '*',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']}
));
dotenv.config();
const key = process.env.CRYPTO_KEY;
app.post("/encriptar", async (req, res) => {
  const textoEncriptado = CryptoJS.AES.encrypt(
    req.body.textoAEncriptar.toString(),
    key
  ).toString();
  res.status(200).send({textoEncriptado});
});
async function desencriptar(textoADesencriptar) {
  const bytes = CryptoJS.AES.decrypt(textoADesencriptar.toString(), key);
  const textoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);
  return textoDesencriptado.toString();
}
async function generarTokenAleatorio() {
  let token = "";
  for (let i = 0; i < 64; i++) {
    const caracterAleatorio = String.fromCharCode(
      Math.floor(Math.random() * (125 - 33 + 1)) + 33
    );
    token += caracterAleatorio;
  }
  try {
    let token_encriptado = await axios.post("https://api-olimpiada-g1.up.railway.app/encriptar", {
      textoAEncriptar: token.toString(),
    });
    return token_encriptado.data;
  } catch (e) {
    console.log(e.message);
  }
}

app.post("/iniciarSesion", async (req, res) => {
  const { nombre_usuario, contrasena } = req.body;
  try {
    const usuarioValidadoPorNombre = await axios.get(
      `https://api-olimpiada-g1.up.railway.app/usuarios/${nombre_usuario}`
    );
    if (!usuarioValidadoPorNombre) {
      throw new Error("Usuario no válido");
    }
    const contrasenaUsuarioValidado = await desencriptar(
      usuarioValidadoPorNombre.data.contrasena_usuario
    );
    let token;
    if (contrasenaUsuarioValidado != contrasena) {
      throw new Error("Contraseña incorrecta");
    } else {
      try {
        token = await generarTokenAleatorio();
      } catch (error) {
        throw new Error("Error al generar token");
      }
    }
    res.status(200).send({token: token.textoEncriptado, id_enfermero:usuarioValidadoPorNombre.data.id_enfermero, nombre_usuario:usuarioValidadoPorNombre.data.nombre_usuario});
  } catch (error) {
    res.status(500).send({error: error.message});
  }
});

app.post ('/inicializarCookie', async (req, res) => {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", req.body.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 60 * 60,
        sameSite: "strict",
        path: "/",
      })
    );
    res.status(200).send({success: true});
  });
app.post('/eliminarCookie', async (req, res) => {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        expires: new Date(0),
        sameSite: "strict",
        path: "/",
      })
    );
    res.status(200).send({success: true});
  })
app.get("/areas", async (req, res) => {
  let respuesta;
  try {
    respuesta = await db.obtenerAreas();
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});
app.post("/areas", async (req, res) => {
  let { nombre_area } = req.body;
  let respuesta;
  try {
    respuesta = await db.crearArea(nombre_area);
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});
app.delete("/areas/:id", async (req, res) => {
  let respuesta;
  try {
    respuesta = await db.borrarArea(req.params.id);
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});
app.put("/areas/:id", async (req, res) => {
  let { nombre_area } = req.body;
  let respuesta;
  try {
    respuesta = await db.actualizarArea(req.params.id, nombre_area);
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});

app.get("/enfermeros", async (req, res) => {
  let respuesta;
  try {
    respuesta = await db.obtenerEnfermeros();
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});
app.delete("/enfermeros/:id", async (req, res) => {
  let respuesta;
  try {
    respuesta = await db.borrarEnfermero(req.params.id);
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});
app.post("/enfermeros", async (req, res) => {
  let {
    nombre_enfermero,
    apellido_enfermero,
    dni_enfermero,
    telefono_enfermero,
  } = req.body;
  let respuesta;
  try {
    respuesta = await db.crearEnfermero(
      nombre_enfermero,
      apellido_enfermero,
      dni_enfermero,
      telefono_enfermero
    );
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});
app.put("/enfermeros/:id", async (req, res) => {
  let {

    nombre_enfermero,
    apellido_enfermero,
    dni_enfermero,
    telefono_enfermero,
  } = req.body;
  let respuesta;
  try {
    respuesta = await db.actualizarEnfermeros(
      req.params.id,

      nombre_enfermero,
      apellido_enfermero,
      dni_enfermero,
      telefono_enfermero
    );
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});

app.get("/grupoYFactor", async (req, res) => {
  let respuesta;
  try {
    respuesta = await db.obtenerGrupoFactor();
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});

app.get("/llamados", async (req, res) => {
  let respuesta;
  try {
    respuesta = await db.obtenerLlamados(null);
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});
function formatearCantidad(cantidad){
  console.log(cantidad.length());
}
app.get("/llamados/cantidad/codigoAzul", async(req, res)=>{
  
  try {
    let respuesta = await db.cantidadCodigoAzulNoAtendido();

    res.status(200).send(respuesta);
  } catch (e) {
    throw new Error(e);
  }  
})
app.get("/llamados/noAtendidos", async (req, res) => {
  let respuesta;
  try {
    respuesta = await db.obtenerLlamados(0);
  }catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});
app.get("/llamados/noAtendidos/codigoAzul", async (req, res) => {
  let respuesta;
  try {
    respuesta = await db.obtenerLlamadosCodigoAzul(0);
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});
app.get("/llamados/llamado/:id", async (req, res) => {
    let respuesta;
    try {
      respuesta = await db.obtenerLlamadoPorId(req.params.id);
    } catch (e) {
      throw new Error(e);
    }
    res.status(200).send(respuesta);
  });
app.get("/llamados/:id", async (req, res) => {
    let respuesta;
    try {
      respuesta = await db.obtenerLlamadosDeUnEnfermero(req.params.id, null, null);
    } catch (e) {
      throw new Error(e);
    }
    res.status(200).send(respuesta);
  });

app.get("/llamados/:id/fAtendido/:filtroAtendido", async (req, res) => {
    let respuesta;
    try {
      respuesta = await db.obtenerLlamadosDeUnEnfermero(req.params.id, req.params.filtroAtendido, null);
    } catch (e) {
      throw new Error(e);
    }
    res.status(200).send(respuesta);
  });
  app.get("/llamados/:id/fPaciente/:filtroPaciente", async (req, res) => {
    let respuesta;
    try {
      respuesta = await db.obtenerLlamadosDeUnEnfermero(req.params.id, null, req.params.filtroPaciente);
    } catch (e) {
      throw new Error(e);
    }
    res.status(200).send(respuesta);
  });
app.get("/llamados/:id/:filtroAtendido/:filtroPaciente", async (req, res) => {
    let respuesta;
    try {
      respuesta = await db.obtenerLlamadosDeUnEnfermero(req.params.id, req.params.filtroAtendido, req.params.filtroPaciente);
    } catch (e) {
      throw new Error(e);
    }
    res.status(200).send(respuesta);
  });
  app.get("/tiempoPromedio/llamados", async (req, res) => {
    let respuesta;
    try {
      respuesta = await db.obtenerTiempoPromedioDeAtencionDeLLamados();
      
    } catch (e) {
      console.log(e.message);
    }
    res.status(200).send(respuesta);
  });
  app.get("/tiempoPromedio/llamados/:id_enfermero", async (req, res) => {
    let respuesta;
    try {
      respuesta = await db.obtenerTiempoPromedioDeAtencionDeLLamados(req.params.id_enfermero);
      
    } catch (e) {
      console.log(e.message);
    }
    res.status(200).send(respuesta);
  });
/*app.get("/llamados/tPromedio", async (req, res) => {
  let respuesta;
  try {
    respuesta = await db.obtenerTiempoPromedioDeAtencionDeLLamados();
    
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});
/*app.get("/llamados/enfermero/tPromedio/:id/", async (req, res) => {
  let respuesta;
  try {
    respuesta = await db.obtenerTiempoPromedioDeAtencionDeLlamadosDeEnfermero(
      req.params.id
    );
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});*/

app.post("/llamados", async (req, res) => {
  let { id_tipo_llamado, id_ubicacion, id_origen_llamado, id_paciente } =
    req.body;
  let respuesta;
  try {
    respuesta = await db.crearLlamado(
      id_tipo_llamado,
      id_ubicacion,
      id_origen_llamado,
      id_paciente
    );
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});

app.put("/llamados/:id", async (req, res) => {
  let { estado_llamado, fhora_atencion_llamado } = req.body;
  let respuesta;
  try {
    respuesta = await db.actualizarLlamado(
      req.params.id,
      estado_llamado,
      fhora_atencion_llamado
    );
    console.log(fhora_atencion_llamado)
  } catch (e) {
    console.log(e.message);
  }
  res.status(200).send(respuesta);
});
app.delete("/llamados/:id", async (req, res) => {
  let respuesta;
  try {
    respuesta = await db.borrarLlamado(req.params.id);
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});

app.get("/origenLlamados", async (req, res) => {
  let respuesta;
  try {
    respuesta = await db.obtenerOrigenLlamados();
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});

app.get("/tiposLlamados", async (req, res) => {
  let respuesta;
  try {
    respuesta = await db.obtenerTiposLLamados();
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});

app.get("/pacientes", async (req, res) => {
  let respuesta;
  try {
    respuesta = await db.obtenerPacientes();
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});

app.delete("/pacientes/:id", async (req, res) => {
  let respuesta;
  try {
    respuesta = await db.borrarPaciente(req.params.id);
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});

app.post("/pacientes", async (req, res) => {
  let {
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
  } = req.body;

  let respuesta;
  try {
    respuesta = await db.crearPaciente(
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
      id_enfermero
    );
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});

app.put("/pacientes/:id", async (req, res) => {
  let {
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
  } = req.body;
  let respuesta;
  try {
    respuesta = await db.actualizarPaciente(
      req.params.id,
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
      id_enfermero
    );
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});
app.put("/pacientes/altaEHistoriaClinica/:id", async (req, res) => {
  let { falta_paciente, historia_clinica_paciente } = req.body;

  let respuesta;

  try {
    respuesta = await db.actualizarAltaEHistoriaClinicaPaciente(
      req.params.id,
      falta_paciente,
      historia_clinica_paciente
    );
  } catch (e) {
    throw new Error(e);
  }
});

app.get("/ubicaciones", async (req, res) => {
  let respuesta;
  try {
    respuesta = await db.obtenerUbicaciones();
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});

app.delete("/ubicaciones/:id", async (req, res) => {
  let respuesta;
  try {
    respuesta = await db.borrarUbicacion(req.params.id);
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});

app.post("/ubicaciones", async (req, res) => {
  let { id_area, nombre_ubicacion, numero_ubicacion } = req.body;
  let respuesta;
  try {
    respuesta = await db.crearUbicacion(
      id_area,
      nombre_ubicacion,
      numero_ubicacion
    );
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});

app.put("/ubicaciones/:id", async (req, res) => {
  let { id_area, nombre_ubicacion, numero_ubicacion } = req.body;
  let respuesta;
  try {
    respuesta = await db.actualizarUbicacion(
      req.params.id,
      id_area,
      nombre_ubicacion,
      numero_ubicacion
    );
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});

app.get("/usuarios", async (req, res) => {
  let respuesta;
  try {
    respuesta = await db.obtenerUsuarios();
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});

app.get("/usuarios/:nombre_usuario", async (req, res) => {
  let respuesta;
  try {
    respuesta = await db.obtenerUsuarioPorNombre(req.params.nombre_usuario);
  } catch (e) {
    throw new Error(e.message);
  }
  res.status(200).send(respuesta);
});

app.post("/usuarios", async (req, res) => {
  let { nombre_usuario, contrasena_usuario, super_usuario, id_enfermero } = req.body;
  let respuesta;
  try {
    respuesta = await db.crearUsuario(
      nombre_usuario,
      contrasena_usuario,
      super_usuario,
      id_enfermero
    );
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});

app.delete("/usuarios/:id", async (req, res) => {
  let respuesta;
  try {
    respuesta = await db.borrarUsuario(req.params.id);
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});

app.put("/usuarios/:id", async (req, res) => {
  let { nombre_usuario, contrasena_usuario, super_usuario, id_enfermero } = req.body;
  let respuesta;
  try {
    respuesta = await db.actualizarUsuario(
      req.params.id,
      nombre_usuario,
      contrasena_usuario,
      super_usuario,
      id_enfermero
    );
  } catch (e) {
    throw new Error(e);
  }
  res.status(200).send(respuesta);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
