import http from 'http';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
const httpServer = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'static')));

app.use(routes);

// default catch-all routing.
app.use((req, res, next) => {
	res.sendFile('index.html', {
		root: 'lib/static',
		headers: {
			'Content-Type': 'text/html'
		}
	}, error => {
		if (error) {
			next(error);
		}
	});
});

app.use((err, req, res) => {
	console.error(err.stack);
	res.status(err.status || 500);
	res.json({
		errors: [
			err
		]
	});
});

httpServer.listen(process.env.PORT, () => {
	console.info(`server started and listening on port ${httpServer.address().port}`);
});