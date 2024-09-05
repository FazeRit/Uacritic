"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
require('dotenv').config();
let { DB_URL } = process.env;
DB_URL = decodeURIComponent(DB_URL);
const db = new sequelize_1.Sequelize(DB_URL, {
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
exports.default = db;
