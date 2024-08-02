// Require the necessary Gulp plugins
const gulp = require("gulp"); // Gulp core library
const concat = require("gulp-concat"); // Concatenates multiple files into one
const postcss = require("gulp-postcss"); // Processes CSS with PostCSS plugins (autoprefixer and cssnano)
const autoprefixer = require("autoprefixer"); // Adds vendor prefixes to CSS rules
const cssnano = require("cssnano"); // Minifies CSS files
const uglify = require("gulp-uglify"); // Minifies JavaScript files

// Define a Gulp task named 'css' for processing CSS files
gulp.task("css", function () {
  // Define an array of PostCSS plugins to use
  const plugins = [autoprefixer(), cssnano()];
  // Return a stream that:
  return gulp
    .src("src/styles/*.css") // 1. Reads all CSS files from the 'src/styles' directory
    .pipe(concat("main.compiled.css")) // 2. Concatenates them into a single file named 'main.compiled.css'
    .pipe(postcss(plugins)) // 3. Processes the concatenated file using PostCSS plugins (autoprefixer and cssnano)
    .pipe(gulp.dest("dist/styles")); // 4. Saves the resulting file in the 'dist/styles' directory
});

// Define a Gulp task named 'js' for processing JavaScript files
gulp.task("js", function () {
  // Return a stream that:
  return gulp
    .src("src/*.js") // 1. Reads all JavaScript files from the 'src' directory
    .pipe(concat("script.compiled.js")) // 2. Concatenates them into a single file named 'script.compiled.js'
    .pipe(uglify()) // 3. Minifies the concatenated file using Uglify
    .pipe(gulp.dest("dist")); // 4. Saves the resulting file in the 'dist' directory
});

// Define a Gulp task named 'build' to run the 'css' and 'js' tasks in series
gulp.task("build", gulp.series("css", "js"));
