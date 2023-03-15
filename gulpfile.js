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

/* Paths */
const mainPaths = {
   src: {
      scss: './src/scss/**/*.scss',
      js: './src/js/**/*.js',
      img: './src/img/**/*',
   },
   dest: {
      css: './build/css/',
      js: './build/js/',
      img: './build/img/',
   },
};
const projectPaths = {
   src: {
      hmtl: './projects/**/*.html',
      css: './projects/**/*.css',
      js: './projects/**/js/*.js',
      img: './projects/**/img/*',
   },
   dest: {
      html: './build/projects/',
      css: './build/projects/',
      js: './build/projects/',
      img: './build/projects/',
   },
};

/* HTML pages */
function projectHTMLPages(done) {
   src(projectPaths.src.hmtl).pipe(dest(projectPaths.dest.html));

   done();
};

/* CSS styles */
function mainStyles(done) {
   src(mainPaths.src.scss)
      .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(sass())
      .pipe(postcss([autoprefixer(), cssnano()]))
      .pipe(sourcemaps.write('.'))
      .pipe(dest(mainPaths.dest.css));

   done();
};
function projectStyles(done) {
   src(projectPaths.src.css)
      .pipe(plumber())
      .pipe(postcss([autoprefixer(), cssnano()]))
      .pipe(dest(projectPaths.dest.css));

   done();
};

/* JS code */
function mainJs(done) {
   src(mainPaths.src.js)
      .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(terser())
      .pipe(sourcemaps.write('.'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(dest(mainPaths.dest.js));

   done();
};
function projectJs(done) {
   src(projectPaths.src.js)
      .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(terser())
      .pipe(sourcemaps.write('.'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(dest(projectPaths.dest.js));

   done();
};

/* Convert images */
function mainImagesConvertToWebp(done) {
   src(mainPaths.src.img)
      .pipe(webp())
      .pipe(dest(mainPaths.dest.img))
      .pipe(notify('Image converted successfully'));

   done();
};
function projectImagesConvertToWebp(done) {
   src(projectPaths.src.img)
      .pipe(webp())
      .pipe(dest(projectPaths.dest.img))
      .pipe(notify('Image converted successfully'));

   done();
};

/* Watcher */
function watchChangeFiles(done) {
   watch(projectPaths.src.hmtl, projectHTMLPages);
   watch(mainPaths.src.scss, mainStyles);
   watch(projectPaths.src.css, projectStyles);
   watch(mainPaths.src.js, mainJs);
   watch(projectPaths.src.js, projectJs);
   watch(mainPaths.src.img, mainImagesConvertToWebp);
   watch(projectPaths.src.img, projectImagesConvertToWebp);

   done();
};

/* Export every function to use them individually */
exports.projectHTMLPages = projectHTMLPages;
exports.mainStyles = mainStyles;
exports.projectStyles = projectStyles;
exports.mainJs = mainJs;
exports.projectJs = projectJs;
exports.mainImagesConvertToWebp = mainImagesConvertToWebp;
exports.projectImagesConvertToWebp = projectImagesConvertToWebp;
exports.watchChangeFiles = watchChangeFiles;

/* Run multiple functions at the same time  */
exports.build = parallel(projectHTMLPages, mainStyles, projectStyles, mainJs, projectJs, mainImagesConvertToWebp, projectImagesConvertToWebp, watchChangeFiles);
