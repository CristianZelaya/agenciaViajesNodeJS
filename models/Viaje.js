import Sequelize from "sequelize";
import db from "../config/db.js";

export const Viaje = db.define('viajes', {
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fechaIda: {
        type: Sequelize.DATE
    },
    fechaVuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponible: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    }
});