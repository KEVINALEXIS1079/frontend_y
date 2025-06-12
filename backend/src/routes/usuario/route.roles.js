import { Router } from "express";
import { verificarToken } from '../../middlewares/authentication.js'
import {
    listarRol,
    buscarRolporid,
    registrarRol,
    actualizarRol,
    eliminarRol
} from '../../controllers/usuario/controller.roles.js';

const router = Router();

router.get('/listar', listarRol);
router.get('/buscar/:id_rol_pk', buscarRolporid);
router.post('/registrar', registrarRol);
router.put('/actualizar/:id_rol_pk', actualizarRol);
router.delete('/eliminar/:id_rol_pk', eliminarRol);


export default router;