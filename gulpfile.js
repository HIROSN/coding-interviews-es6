'use strict';

const gulp = require('gulp');
const del = require('del');
const jshint = require('gulp-jshint');
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');

const testSrc = [
  'src/test/*.js',
  // TODO: ReferenceError: regeneratorRuntime is not defined
  '!src/test/arrays-to-tree_test.js',
  '!src/test/fibonacci_test.js',
  '!src/test/iterable_test.js',
  '!src/test/my-array_test.js',
  '!src/test/tree-to-array_test.js'
];

gulp.task('lint', () => {
  return gulp.src('src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('clean', () => {
  return del(['test', 'lib']);
});

gulp.task('copy', () => {
  gulp.src('src/README.md')
  .pipe(gulp.dest('./'))
});

gulp.task('lib', ['clean'], () => {
  gulp.src('src/lib/*.js')
  .pipe(babel({
    presets: ['env']
  }))
  .pipe(gulp.dest('lib'))
});

gulp.task('test', ['clean'], () => {
  gulp.src(testSrc)
  .pipe(babel({
    presets: ['env']
  }))
  .pipe(gulp.dest('test'))
});

gulp.task('build', ['lint', 'clean', 'copy', 'lib', 'test']);

gulp.task('default', () => {
  gulp.src('test/*.js', {read: false})
  .pipe(mocha({reporter: 'spec'}))
});
