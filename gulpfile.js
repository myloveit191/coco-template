const {src, dest , watch , series} = require('gulp');

const pug = require('gulp-pug');
const scss = require('gulp-sass');
// const postcss = require('gulp-postcss');
// const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync');


//Sass Task
function scssTask() {
    return src('./src/scss/*.scss')
        .pipe(scss())
        // .pipe(postcss([cssnano()]))
        .pipe(dest('dist/css'));
}

//JS Task
function jsTask() {
    return src('./src/js/*.js')
        .pipe(terser())    
        .pipe(dest('dist/js'))
}

//Pug Task
function pugTask() {
    return src('./src/pug/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(dest('./dist/html'))
}

//Browser Task
function browsersyncServe(callBack) {
    browsersync.init({
        server:{
            baseDir: './dist/'
        }
    });
    callBack();
}
function browsersyncReload(callBack) {
    browsersync.reload();
    callBack();
}


//Watch Task
function watchTask() {
    watch('./dist/html/*.html', browsersyncReload);
    watch(['./src/scss/**/*.scss', './src/js/**/*.js'], series(scssTask,jsTask,browsersyncReload));
    watch('./src/pug/*.pug', series(pugTask));
}

//Default gulp Task
exports.default = series(
    scssTask,
    pugTask,
    jsTask,
    browsersyncServe,
    watchTask
);
