import gulp from 'gulp';

// Import tasks
import './gulp/dev.js';
import './gulp/docs.js';

gulp.task(
  'dev',
  gulp.series(
    'clean:dev',
    gulp.parallel('html:dev', 'sass:dev', 'images:dev', 'fonts:dev', 'files:dev', 'js:dev'),
    gulp.parallel('server:dev', 'watch:dev')
  )
);

gulp.task(
  'build',
  gulp.series(
    'clean:docs',
    gulp.parallel('html:docs', 'sass:docs', 'images:docs', 'fonts:docs', 'files:docs', 'js:docs'),
    'server:docs'
  )
);
