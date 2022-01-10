const { Sequelize } = require('sequelize');

const dotenv = require('dotenv');

dotenv.config({ path: './env'});

const db = new Sequelize({
	dialect: 'postgres',
	host: 'localhost',
	username: 'postgres',
	password: 1234,
	database: 'todos',
	port: 5432,
	logging: false,
});

module.exports = { db };
