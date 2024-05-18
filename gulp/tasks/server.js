import gulp from 'gulp';
import browserSync from 'browser-sync';

const server = browserSync.create();

function serverDev(done) {
    server.init({
        server: {
            baseDir: './dist',
        },
    });
    done();
}

function serverDocs(done) {
    server.init({
        server: {
            baseDir: './docs',
        },
    });
    done();
}

function reload(done) {
    server.reload();
    done();
}

gulp.task('server:dev', serverDev);
gulp.task('server:docs', serverDocs);
gulp.task('reload', reload);
