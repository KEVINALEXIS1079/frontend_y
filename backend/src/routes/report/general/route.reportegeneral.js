import Router from 'express';
import {  generarReporteGeneral, generarReporteGeneralExcel} from '../../../controllers/report/general/controller.reporte.general.js'; 
const router = Router();

router.get('/obtener', generarReporteGeneral);
router.get('/obtener/excel', generarReporteGeneralExcel)

export default router;
