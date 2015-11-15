var gulp = require("gulp");
var minify = require('gulp-uglify');
var rename = require('gulp-rename');
var gzip = require('gulp-gzip'); 
var concat = require("gulp-concat");
var browserify = require("browserify");
var fs = require("fs")
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');

gulp.task("prod", function() {
	var bundler = browserify("./src/client/client.js");
  	//bundler.external(['react', 'material-ui', 'React', 'react-dom', 'react-tap-event-plugin'])
  	bundler.transform("babelify", {presets: ["es2015", "react", "stage-0"]})
  	bundler.transform("uglifyify")
  	//bundler.transform("browserify-shim")

     bundler.bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename("app.min.js"))
        .pipe(streamify(minify()))
        .pipe(gulp.dest('dist'))
});

gulp.task("default", function() {
	var bundler = browserify("./src/client/client.js");
  	//bundler.external(['react', 'material-ui', 'React', 'react-dom', 'react-tap-event-plugin'])
  	bundler.transform("babelify", {presets: ["es2015", "react", "stage-0"]})
  	bundler.transform("uglifyify")
  	//bundler.transform("browserify-shim")

     bundler.bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename("bundle.min.js"))
        .pipe(streamify(minify()))
        .pipe(gulp.dest('dist'))
});