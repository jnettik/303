import { src, dest } from 'gulp';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import postCss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';

export default function buildStyles(settings, isProd = false) {
  return function () {
    const sass = gulpSass(dartSass);
    const srcOpts = {
      sourcemaps: !isProd,
    };

    return src(settings.src, srcOpts)
      .pipe(sourcemaps.init())
      .pipe(sass)
      // PostCSS configured via postcss.config.js
      .pipe(postCss())
      .pipe(sourcemaps.write())
      .pipe(dest(settings.dest));
  }
};
