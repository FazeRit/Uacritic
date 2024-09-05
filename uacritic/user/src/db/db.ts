import {Sequelize} from 'sequelize';

require('dotenv').config();

let {DB_URL} = process.env;

DB_URL = decodeURIComponent(DB_URL!);

const db = new Sequelize(DB_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
    logging: false,
    pool: {
        max: 10,
        min: 0,
        acquire: 600000,
        idle: 10000,
    },
});


export default db;