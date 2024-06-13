import { DataTypes  } from "sequelize";
import {sequelize} from '../database/database.js';

export const producto = sequelize.define('producto', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    precio:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cantidad:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    categoria:{
        type: DataTypes.STRING,
        allowNull: false,
    }
});


   