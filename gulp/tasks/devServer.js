import gulp	from 'gulp';
import webpack from 'webpack';
import config from '../config';
import express from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import path from 'path';
import usage from '../util/usage';


const options = require('../util/handleArgs')({
	'string': ['server', 'namespace'],
	'default': {
		server: 'https://webcom.orange.com',
		namespace: 'visiowebrtc'
	}
});

gulp.task('dev', () => {
	const compiler = webpack(config.webpack({
		output: true,
		debug: true,
		devServer: true,
		wsServerUrl: options.server,
		namespace: options.namespace
	}));

	const app = express();
	app.use(webpackDevMiddleware(compiler, {
		noInfo: false,
		stats: {
			colors: true
		}
	}));
	app.use(webpackHotMiddleware(compiler));

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '../../src/index.html'));
	});

	app.listen(8080, (err) => {
		if (err) {
			console.log(err);
			return;
		}

		console.log('Listening at http://localhost:8080');
	});
});

usage.add('dev', 'Build and launch dev server on port 8080', {
	'server': 'webcom server url. Default is https://webcom.orange.com',
	'namespace' : 'namespace for signalisation. Default is visiowebrtc'
});
