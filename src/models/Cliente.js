import Sequelize from 'sequelize';
import {sequelize} from '../database/database'
import Pedido from './Pedido'
const Cliente = sequelize.define('cliente',{

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
    apellido:{
        type: Sequelize.TEXT,
        trim: true
    },
    empresa: {
        type: Sequelize.TEXT,
        trim: true,
    },
    email:{
        type: Sequelize.TEXT,
        lowercase: true,
        trim: true,
        unique:true,
    },
    telefono:{
        type: Sequelize.TEXT,
        trim: true,
    }
}, {
    timestamps: false
});

Cliente.hasMany(Pedido,{foreingKey:'pedidoId', sourceKey: 'id'});
Pedido.belongsTo(Cliente,{foreingKey:'pedidoId', sourceKey: 'id'});

export default Cliente;