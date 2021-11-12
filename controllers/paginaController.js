import { Viaje } from "../models/Viaje.js";
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

const paginaTertimoniales = ( req, res ) => {

    res.render('testimoniales', {
        pagina: 'Testimoniales'
    });

}

export {
    paginaInicio, 
    paginaNosotros,
    paginaViajes,
    paginaTertimoniales, 
    paginaDetalleViaje
}