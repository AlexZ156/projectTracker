'use strict';

const gulp = require('gulp');
const path = require('path');
const webpack = require('webpack');
const browserSync = require('browser-sync').create();
const webpackConfig = require('./webpack.config');
const historyApiFallback = require('connect-history-api-fallback');

const reloadPage = (cb) => {
	browserSync.reload();
	cb();
}

const buildScripts = (function() {
	const delay = 100;
	let timer;

	return cb => {
		clearTimeout(timer);
		timer = setTimeout(() => webpack(webpackConfig, cb), delay);
	};
}());

const serve = (cb) => (
	browserSync.init({
		server: {
<<<<<<< HEAD
			baseDir: './frontend/dist',
			index: 'index.html',
			notify: false,
			middleware: [historyApiFallback()]/*,
=======
			baseDir: './frontend/dist/',
			middleware: [historyApiFallback()],
			notify: false/*,
>>>>>>> 367091e862fe2f3c30f1a596e8263d0ea3342cd2
			directory: true*/
		},
		files: [path.resolve(__dirname, 'frontenddist/**/*.*')]
	}, cb)
);

const watch = () => {
	gulp.watch(
		[path.resolve(__dirname, 'frontend/src/**/*.*')],
		buildScripts
	);
	gulp.watch(
		[
			path.resolve(__dirname, 'frontend/dist/**/*.html'),
			path.resolve(__dirname, 'frontend/dist/**/*.js')
		],
		reloadPage
	);
};

gulp.task(
	'default',
	gulp.series(
		buildScripts,
		serve,
		watch
	)
);
