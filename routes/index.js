import express from "express";
import { paginaInicio, 
         paginaNosotros, 
         paginaViajes, 
         paginaTertimoniales, 
         paginaDetalleViaje} from "../controllers/paginaController.js";

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTertimoniales);

export default router;