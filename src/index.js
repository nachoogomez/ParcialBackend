import app from './app.js';
import {sequelize} from './database/database.js';
//import './models/productos.model.js';

async function main() {
        try {
            await sequelize.sync({force: false});
            await sequelize.authenticate();
            console.log('Conexión establecida con la base de datos');

            const PORT = 3000; 

            app.listen(PORT, () => {
                console.log(`Server corriendo en ${PORT}`);
            });

        } catch (error) {
            console.log("No se pudo conectar a la base de datos");
}
}

main();