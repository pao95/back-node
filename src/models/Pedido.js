import Sequelize from 'sequelize';
import {sequelize} from '../database/database'

const Pedido = sequelize.define('pedido',{

    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
            autoIncrement: true,
            primaryKey: true,
    },

    clienteId: {
        type: Sequelize.INTEGER,
        
    },
 
    total: {
        type: Sequelize.INTEGER,
    },
    productoId:{
        type: Sequelize.INTEGER,
    }

}, {
    timestamps: false
});






export default Pedido;