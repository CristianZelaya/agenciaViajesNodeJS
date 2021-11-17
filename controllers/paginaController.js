import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimonial.js";

const paginaInicio = async ( req, res ) => {

    const promiseDB = [];

    promiseDB.push(Viaje.findAll({limit: 3}));
    promiseDB.push(Testimonial.findAll());

    // Consultar 3 viajes de db modelo Viaje
    try {

        const resultado = await Promise.all( promiseDB );
        
        res.render('index', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });

    } catch (error) {

        console.log(error);
        
    }

}

const paginaNosotros = ( req, res ) => {

    res.render('nosotros', {
        pagina: 'Nosotros'
    });
    
}

const paginaViajes = async ( req, res ) => {

    // Consultar DB
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    });

}

// Muestra un viaje por su slug
const paginaDetalleViaje = async ( req, res ) => {

    const { slug } = req.params;

    try {

        const viaje = await Viaje.findOne({ where : { slug }});
        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        });
        
    } catch (error) {

        console.log(error);
        
    }

}

const paginaTertimoniales = async ( req, res ) => {

    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales', 
            testimoniales
        });

    } catch (error) {

        console.log(error);
        
    }

}

export {
    paginaInicio, 
    paginaNosotros,
    paginaViajes,
    paginaTertimoniales, 
    paginaDetalleViaje
}