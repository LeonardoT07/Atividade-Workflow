// Require's
var gulp = require('gulp');
var sass = require("gulp-sass");
var htmlmin = require('gulp-htmlmin');

 
/* Compilar e Minificar OS(*) arquivos da pasta 'scss/'
 * e enviar para a pasta 'dist/css/'
 */
gulp.task('minify-scss', function () {
  return gulp.src('./source/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'));
});

// Minificar o HTML da pasta 'source/' e enviar para 'dist/'
gulp.task('minify-html', function() {
  return gulp.src('./source/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/'));
});


// Watch para monitorar alterações
gulp.task('vigia', function(){
	gulp.watch('./source/scss/*.scss', ['minify-scss']);
	gulp.watch('./source/*.html', ['minify-html']);
});