import gulp from 'gulp';

const paths = {
    files: {
        src: 'src/files/**/*',
        dest: 'dist/files/',
        docsDest: 'docs/files/'
    }
};

function filesDev() {
    return gulp.src(paths.files.src)
        .pipe(gulp.dest(paths.files.dest));
}

function filesDocs() {
    return gulp.src(paths.files.src)
        .pipe(gulp.dest(paths.files.docsDest));
}

gulp.task('files:dev', filesDev);
gulp.task('files:docs', filesDocs);
