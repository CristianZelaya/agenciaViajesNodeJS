import express from "express";
import { paginaInicio, 
         paginaNosotros, 
         paginaViajes, 
         paginaTertimoniales, 
         paginaDetalleViaje} from "../controllers/paginaController.js";
import { guardarTestimonial } from "../controllers/testimonialController.js";

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTertimoniales);
router.post('/testimoniales', guardarTestimonial);

export default router;