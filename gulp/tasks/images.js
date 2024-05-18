import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import newer from 'gulp-newer';
import webp from 'gulp-webp';

const paths = {
    images: {
        src: 'src/images/**/*',
        dest: 'dist/images/',
        docsDest: 'docs/images/'
    }
};

function imagesDev() {
    return gulp.src(paths.images.src)
        .pipe(newer(paths.images.dest))
        .pipe(imagemin())
        .pipe(webp())
        .pipe(gulp.dest(paths.images.dest));
}

function imagesDocs() {
    return gulp.src(paths.images.src)
        .pipe(newer(paths.images.docsDest))
        .pipe(imagemin())
        .pipe(webp())
        .pipe(gulp.dest(paths.images.docsDest));
}

gulp.task('images:dev', imagesDev);
gulp.task('images:docs', imagesDocs);
