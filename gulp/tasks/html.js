import gulp from 'gulp';
import fileInclude from 'gulp-file-include';
import htmlclean from 'gulp-htmlclean';

const paths = {
    html: {
        src: 'src/html/**/*.html',
        dest: 'dist/',
        docsDest: 'docs/'
    }
};

function htmlDev() {
    return gulp.src([paths.html.src, '!src/html/partials/**'])
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(htmlclean())
        .pipe(gulp.dest(paths.html.dest));
}

function htmlDocs() {
    return gulp.src([paths.html.src, '!src/html/partials/**'])
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(paths.html.docsDest));
}

gulp.task('html:dev', htmlDev);
gulp.task('html:docs', htmlDocs);
