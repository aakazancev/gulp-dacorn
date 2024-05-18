import gulp from 'gulp';

const paths = {
    fonts: {
        src: 'src/fonts/**/*',
        dest: 'dist/fonts/',
        docsDest: 'docs/fonts/'
    }
};

function fontsDev() {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest));
}

function fontsDocs() {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.docsDest));
}

gulp.task('fonts:dev', fontsDev);
gulp.task('fonts:docs', fontsDocs);
