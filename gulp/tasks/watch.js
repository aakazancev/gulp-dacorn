import gulp from 'gulp';

const paths = {
    styles: 'src/scss/**/*.scss',
    scripts: 'src/js/**/*.js',
    images: 'src/images/**/*',
    fonts: 'src/fonts/**/*',
    files: 'src/files/**/*',
    html: 'src/html/**/*.html'
};

function watchDev() {
    gulp.watch(paths.styles, gulp.series('sass:dev', 'reload'));
    gulp.watch(paths.scripts, gulp.series('js:dev', 'reload'));
    gulp.watch(paths.images, gulp.series('images:dev', 'reload'));
    gulp.watch(paths.fonts, gulp.series('fonts:dev', 'reload'));
    gulp.watch(paths.files, gulp.series('files:dev', 'reload'));
    gulp.watch(paths.html, gulp.series('html:dev', 'reload'));
}

gulp.task('watch:dev', watchDev);
