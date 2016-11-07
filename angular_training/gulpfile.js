// Various helper modules
var gulp = require("gulp");
var plug = require("gulp-load-plugins")();
var ngAnnotate = require('gulp-ng-annotate');

var source = [
		'app/**/*.js', 
		"vendor/**/*.*"
	];

gulp.task('webserver', function() {
	return gulp
		.src('app')										// root
		.pipe(plug.webserver({
			livereload: true,							// livereload
			directoryListing: true,
			open: "http://localhost:8000/index.html"	// todo_index.html
	}));
});

gulp.task("default", ["webserver"]);


gulp.task('annotate', function () {
	return gulp.src(['app/**/*.js'])
		.pipe(ngAnnotate())
		.pipe(gulp.dest('dist'));
});