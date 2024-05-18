import gulp from 'gulp';
import browserSync from 'browser-sync';

const server = browserSync.create();

// Задача для сервера разработки
function serverDev(done) {
  server.init({
    server: {
      baseDir: './dist',
    },
  });
  done();
}

// Задача для сервера документации
function serverDocs(done) {
  server.init({
    server: {
      baseDir: './docs',
    },
    port: 3333 
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
