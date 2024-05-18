import gulp from 'gulp';
import * as sass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';

const sassCompiler = gulpSass(sass);

const paths = {
    styles: {
        src: 'src/scss/**/*.scss',
        dest: 'dist/css/',
        docsDest: 'docs/css/'
    }
};

function sassDev() {
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sassCompiler().on('error', sassCompiler.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.styles.dest));
}

function sassDocs() {
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sassCompiler().on('error', sassCompiler.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.styles.docsDest));
}

gulp.task('sass:dev', sassDev);
gulp.task('sass:docs', sassDocs);
