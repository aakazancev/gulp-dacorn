import gulp from 'gulp';
import * as del from 'del';

function cleanDev() {
    return del.deleteAsync(['dist/**', '!dist']);
}

function cleanDocs() {
    return del.deleteAsync(['docs/**', '!docs']);
}

gulp.task('clean:dev', cleanDev);
gulp.task('clean:docs', cleanDocs);
