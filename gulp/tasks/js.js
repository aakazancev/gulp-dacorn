import gulp from 'gulp';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import webpackConfig from '../../webpack.config.js';
import sourcemaps from 'gulp-sourcemaps';

const paths = {
    scripts: {
        src: 'src/js/**/*.js',
        dest: 'dist/js/',
        docsDest: 'docs/js/'
    }
};

function scriptsDev() {
    return gulp.src(paths.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(webpackStream(webpackConfig, webpack))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.scripts.dest));
}

function scriptsDocs() {
    return gulp.src(paths.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(webpackStream(webpackConfig, webpack))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.scripts.docsDest));
}

gulp.task('js:dev', scriptsDev);
gulp.task('js:docs', scriptsDocs);
