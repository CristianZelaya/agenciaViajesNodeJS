import { Testimonial } from "../models/Testimonial.js";

const guardarTestimonial = async ( req, res ) => {

    // Validar formulario
    const { nombre, correo, mensaje } = req.body;
    const errores = [];

    if( nombre.trim() === '' ) {

        errores.push({mensaje: 'El nombre no debe de ir vacío'});

    }

    if ( correo.trim() === '' ) {

        errores.push({mensaje: 'El correo no debe de ir vacío'});
        
    }

    if( mensaje.trim() === '' ) {

        errores.push({mensaje: 'El mensaje no debe de ir vacío'});

    }

    const re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    if(!re.exec( correo )) {

        errores.push({mensaje: 'El correo no es válido'});

    }

    if( errores.length > 0 ) {

        // Consultar testimoniales
        const testimoniales = await Testimonial.findAll();

        // Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    } else {

        // Guardar en la base de datos

        try {

            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('/testimoniales');
            
        } catch (error) {

            console.log(error);
            
        }

    }

}

export {
    guardarTestimonial
}