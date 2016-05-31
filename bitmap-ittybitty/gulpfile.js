'use strict';

const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');
var paths = ['**/*.js', 'lib/*.js', 'test/*.js'];

gulp.task('mocha', function(){
  return gulp.src(paths)
  .pipe(mocha());
});

gulp.task('eslint', function(){
  return gulp.src(paths)
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('test', function(){
  return gulp.src('test.js', {read: false})
  .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('watch', ()=>{
  gulp.watch('**/*.js', ['eslint']);
  gulp.watch('test/*.js', ['eslint', 'mocha']);

});
gulp.task('default', ['eslint', 'mocha', 'watch', 'test']);
