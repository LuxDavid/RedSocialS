import config from '../config/config.js';
import mongoose from "mongoose";

export let Products;
export let Carts;
export let Tickets;
export let Users;

const {MONGO_URL,MONGO_DBNAME,PERSISTENCE} = config;

switch(PERSISTENCE){
    case 'MONGO':

    await mongoose.connect(MONGO_URL, {dbName:MONGO_DBNAME});

    // const {default:ProductsMongo} = await import('./mongoDB/managers/productManager.js');
    // const {default:CartsMongo} = await import('./mongoDB/managers/cartManager.js');
    // const {default:TicketsMongo} = await import('./mongoDB/managers/ticketManager.js');
    const {default:UsersMongo} = await import('./mongoDB/managers/userManager.js');

    // Products= ProductsMongo;
    // Carts=CartsMongo;
    // Tickets=TicketsMongo;
    Users=UsersMongo;

    console.log(`Conectado correctamente a la base de datos de MONGO: ${MONGO_DBNAME}`);
    break;

    default:throw new Error("Persistence not recognized");
}