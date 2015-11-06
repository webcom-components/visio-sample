import gulp	from 'gulp';
import webpack from 'webpack';
import config from '../config';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import usage from '../util/usage';

const options = require('../util/handleArgs')({
	'string': ['server', 'namespace'],
	'default': {
		server: 'https://webcom.orange.com',
		namespace: 'visiowebrtc'
	}
});

gulp.task('copyAssets', () => {
	return gulp.src([
		'./src/index.html'])
		.pipe(gulp.dest('./dist'));

});

gulp.task('build', (callback) => {
	process.env.NODE_ENV = 'production';

	runSequence('copyAssets', () => {
		webpack(config.webpack({
			output: true,
			release: true,
			wsServerUrl: options.server,
			namespace: options.namespace

		}), (err, stats) => {
			console.log(stats.toString());
			callback();
		});
	});
});

gulp.task('serve', ['build'], (done) => {
	const bs = browserSync.create();
	bs.init(config.browserSyncDist, () => {
		done();
	});
});

gulp.task('default', ['dev']);

usage.add('default', 'launch dev task');

usage.add('build', 'Build visio app', {
	'server': 'webcom server url. Default is https://webcom.orange.com',
	'namespace' : 'namespace for signalisation. Default is visiowebrtc'
});

usage.add('serve', 'Build and serve visio app on port 8080', {
	'server': 'webcom server url. Default is https://webcom.orange.com',
	'namespace' : 'namespace for signalisation. Default is visiowebrtc'
});

