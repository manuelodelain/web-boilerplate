var gulp = require('gulp');
var options = require('../options');
var target = require('../config').targets[options.target];
var watch = require('gulp-watch');
 
gulp.task('build', ['clean', 'styles', 'scripts', 'images'], function(){
  if (options.watch){
    watch(target.sass.src, function(){
      gulp.start('styles');
    });

    watch(target.images.src, function(){
      gulp.start('images');
    });

    // watch(target.sprite.src, function(){
    //   gulp.start('sprite');
    // });

    gulp.start('sync');
  }
});