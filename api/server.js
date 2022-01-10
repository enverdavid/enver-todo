// Utils
const { db } = require('./utils/database');
const dotenv = require('dotenv');

// Express app
const { app } = require('./app');

dotenv.config();

db.sync()
	.then(() => {
		console.log('Database connected');
		startServer();
	})
	.catch(err => console.log(err));

const startServer = () => {
	const PORT = process.env.PORT || 4000;

	app.listen(PORT, () => {
		console.log('To Do API running!!!!');
	});
};
