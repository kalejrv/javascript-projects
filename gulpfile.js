const { watch, parallel, src, dest } = require('gulp');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const terser = require('gulp-terser');
const webp = require('gulp-webp');
const notify = require('gulp-notify');

const srcPaths = {
   scss: './src/scss/**/*.scss',
   js: './src/js/**/*.js',
   images: './src/img/**/*'
};

const destPaths = {
   css: './build/css/',
   js: './build/js/',
   images: './build/img/'
}

function styles(done) {
   src(srcPaths.scss)
      .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(sass())
      .pipe(postcss([autoprefixer(), cssnano()]))
      .pipe(sourcemaps.write('.'))
      .pipe(dest(destPaths.css));

   done();
};

function js(done) {
   src(srcPaths.js)
      .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(terser())
      .pipe(sourcemaps.write('.'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(dest(destPaths.js));

      done();
};

function convertImagesToWebp(done) {
   src(srcPaths.images)
      .pipe(webp())
      .pipe(dest(destPaths.images))
      .pipe(notify('Image converted successfully'));

   done();
};

function watchChangeFiles(done) {
   watch(srcPaths.scss, styles);
   watch(srcPaths.js, js);
   watch(srcPaths.images, convertImagesToWebp);

   done();
};

/* Export every function to use them individually */
exports.styles = styles;
exports.js = js;
exports.convertImagesToWebp = convertImagesToWebp;
exports.watchChangeFiles = watchChangeFiles;

/* Run multiple functions at the same time  */
exports.build = parallel(styles, js, convertImagesToWebp, watchChangeFiles);
