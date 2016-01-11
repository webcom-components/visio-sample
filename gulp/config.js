import webpack from 'webpack';

const libName = 'phone';

/**
 * Returns default webpack configuration.
 * Initialize Babel to parse js files and resolve node dependencies
 * @returns {Object}
 */
function getDefaultWebpackConfig() {
	return {
		module: {
			loaders: [
				{
					test:/\.js$/,
					loaders: ['babel'],
					exclude: /(node_modules)|(vendor)/
				},
				{
					test: /\.(woff|woff2)$/,
					loader: 'url-loader?limit=10000&mimetype=application/font-woff'
				},
				{ test: /\.ttf$/,    loader: 'file-loader' },
				{ test: /\.eot$/,    loader: 'file-loader' },
				{ test: /\.svg$/,    loader: 'file-loader' }
			]
		},
		output: {
			library: libName
		},
		plugins: [],
		resolve: {
			alias: {
				'bootstrap.css':  '../../node_modules/bootstrap/dist/css/bootstrap.css',
				'webcom': '../../node_modules/webcom/webcom.js',
				'webcom-reach': '../../node_modules/webcom-reach/dist/reach-debug.js'
			}
		},
		externals: [
		]
	};
}

const config = {
	webpack: (options={
		release:false,
		debug: false,
		devServer: false,
		wsServerUrl: null,
		namespace: ''
	}) => {
		const config = getDefaultWebpackConfig();

		config.output.path = options.devServer ? `${__dirname}/dist` : './dist';
		console.log(config.output.path);

		config.output.filename = 'bundle.js';

		config.plugins.push(new webpack.ProvidePlugin({
			'jQuery': 'jquery',
			'$': 'jquery',
			'webcom': 'webcom',
			'webcom-reach': 'webcom-reach'
		}));

		if (options.wsServerUrl) {
			config.plugins.push(new webpack.DefinePlugin({
				'__WEBCOM_SERVER__': `'${options.wsServerUrl}'`
			}));
		}

		config.plugins.push(new webpack.DefinePlugin({
			'__NAMESPACE__': `'${options.namespace}'`
		}));

		if (options.release) {
			config.entry = './src/js/index.js';

			config.plugins = config.plugins.concat([
				new webpack.optimize.DedupePlugin(),
				new webpack.optimize.UglifyJsPlugin({minimize: true})
			]);

			config.resolve.alias['webcom-reach'] = '../../node_modules/webcom-reach/dist/reach.js';
		}

		if (options.debug) {
			config.entry = [
				'webpack-hot-middleware/client',
				'./src/js/index'
			];
			config.devtool = 'cheap-module-eval-source-map';
			config.plugins.push(new webpack.HotModuleReplacementPlugin());
			config.plugins.push(new webpack.DefinePlugin({
				'__DEVTOOLS__': true,
				'process.env': JSON.stringify('development')
			}));
		}

		return config;
	},
	browserSyncDist: {
		port: '8080',
		ghostMode: {
			clicks: false,
			forms: false,
			scroll: false
		},
		server: {
			// Serve up our test folder
			baseDir: './dist/',
			//directory: true,
			files: ['./dist/**']
		}
	}
};

export default config;