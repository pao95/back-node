import Sequelize from 'sequelize';
import {sequelize} from '../database/database'
import Pedido from './Pedido';
const Producto = sequelize.define('producto',{

    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
            autoIncrement: true,
            primaryKey: true,
    },

    nombre: {
        type: Sequelize.TEXT,
        trim: true,
    },
    precio:{
        type: Sequelize.INTEGER,
        trim: true
    },
    imagen: {
        type: Sequelize.TEXT,
        trim: true,
    },
}, {
    timestamps: false
});



Producto.hasMany(Pedido,{foreingKey:'pedidoId', sourceKey:'id'})
Pedido.belongsTo(Producto,{foreingKey:'pedidoId', sourceKey: 'id'});

export default Producto;