import { Sequelize } from "sequelize";

 export const sequelize = new Sequelize ('productos', 'root', '',{
    host: 'localhost',
    dialect: 'mysql' 
});

