import { Router } from "express";
import { iniciarSesion, verificarToken, cerrarSesion,solicitarRecuperacion,cambiarContrasenaConCodigo } from '../../middlewares/authentication.js'
import {
    listarUsuario,
    listar,
    buscarUsuarioporid,
    registrarUsuario,
    actualizarUsuario,
    eliminarUsuario
} from '../../controllers/usuario/controller.usuario.js';

const router = Router();

router.get('/listar',listar);
router.get('/buscar/:dni_usuario_pk', buscarUsuarioporid);
router.post('/registrar', registrarUsuario); 
router.put('/actualizar/:dni_usuario_pk',actualizarUsuario);
router.delete('/eliminar/:dni_usuario_pk',eliminarUsuario);

router.post('/iniciarSesion', iniciarSesion);
router.post('/cerrarSesion', cerrarSesion);

router.post('/recuperar', solicitarRecuperacion); // Solicita el código
router.post('/cambiar-contrasena', cambiarContrasenaConCodigo); // Cambia la contraseña


export default router;