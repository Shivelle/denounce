var gulp = require('gulp'), 
	plugins = require('gulp-load-plugins')(),
	browserSync = require('browser-sync').create(), 
    sass = require('gulp-ruby-sass'), 
    notify = require("gulp-notify"), 
	port = process.env.PORT || 8000,
    imagemin = require('gulp-imagemin');



// compile sass to css
gulp.task ('css', function() {
	// compile sass
	// output file to  a dist/
	return gulp.src(['./src/sass/main.scss'
		//,'./src/sass/alt.scss'
	])
	.pipe(plugins.sourcemaps.init())
	.pipe(plugins.sass().on('error', plugins.sass.logError))
	.pipe(plugins.cssmin())
	.pipe(plugins.autoprefixer())
	.pipe(plugins.sourcemaps.write())
	.pipe(gulp.dest('./dist/css')) 
	.pipe(browserSync.stream());
});

// javascript task
gulp.task ('js', function() {
	return gulp.src([
		'./node_modules/jquery/dist/jquery.min.js', 
		'./src/js/main.js', 
		'./src/js/alt.js',
	])
	.pipe(plugins.babel({
		presets: ['es2015']
	}))
	.pipe(plugins.concat('all.js'))
	.pipe(plugins.uglify())
	.pipe(gulp.dest('./dist/js'))
	.pipe(browserSync.stream()); 
}); 


// watch for file changes and run tasks
gulp.task('watch', function () {
	gulp.watch(['./src/sass/*.scss'], ['css']); 
	gulp.watch(['./src/js/*.js'], ['js']); 
}); 

// browse our app through browsersync
gulp.task('serve', function() {
	browserSync.init({
		open:false,
		server: {
			//baseDir: './'
		}, 
		socket: {
    		//domain: "localhost:3000"
    		//domain: "shivelle.com"
		}
	});

	gulp.watch('*.html').on('change', browserSync.reload);  
}); 

// run imagemin
gulp.task('img', () =>
	gulp.src('src/mg/*')
		.pipe(imagemin([
			imagemin.gifsicle({interlaced: true}),
			imagemin.jpegtran({progressive: true}),
			imagemin.optipng({optimizationLevel: 5}),
			imagemin.svgo({plugins: [{removeViewBox: true}]})
		]))
		.pipe(gulp.dest('dist/images'))
);

server.listen(port, function() {
    console.log("App is running on port " + port);
});


// build

gulp.task('build', ['css', 'js']); 
// autorun
gulp.task('default', ['css', 'js' /*, 'img', 'watch', 'serve'*/]); 