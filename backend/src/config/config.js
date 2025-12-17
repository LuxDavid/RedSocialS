import {config} from "dotenv";
config({path:'.env'});

const PORT=process.env.PORT;
const MONGO_URL=process.env.MONGO_URL;
const MONGO_DBNAME=process.env.MONGO_DBNAME;
const PERSISTENCE=process.env.PERSISTENCE;
const KEY=process.env.KEY;
const ADMINUSER=process.env.ADMINUSER;
const ADMINPASS=process.env.ADMINPASS;
const COLLECTIONU=process.env.COLLECTIONU;
const COLLECTIONC=process.env.COLLECTIONC;
const COLLECTIONP=process.env.COLLECTIONP;
const COLLECTIONM=process.env.COLLECTIONM;
const COLLECTIONT=process.env.COLLECTIONT;

export default {PORT, MONGO_URL, MONGO_DBNAME, PERSISTENCE, KEY, ADMINUSER, ADMINPASS,
    COLLECTIONC, COLLECTIONP, COLLECTIONM, COLLECTIONU, COLLECTIONT
};