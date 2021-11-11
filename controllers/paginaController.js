import { viaje } from "../models/Viaje.js";
const paginaInicio = ( req, res ) => {

    res.render('index', {
        pagina: 'Inicio'
    });

}

const paginaNosotros = ( req, res ) => {

    res.render('nosotros', {
        pagina: 'Nosotros'
    });
    
}

const paginaViajes = async ( req, res ) => {

    // Consultar DB
    const viajes = await viaje.findAll();

    res.render('viajes', {
        pagina: 'Viajes',
        viajes
    });

}

const paginaTertimoniales = ( req, res ) => {

    res.render('testimoniales', {
        pagina: 'Testimoniales'
    });

}

export {
    paginaInicio, 
    paginaNosotros,
    paginaViajes,
    paginaTertimoniales
}