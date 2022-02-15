const { src } = require('gulp');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

gulp.task('hello', function(done){
    console.log('привет мир');
    done();
}
);

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});

exports.default = () => (
	gulp.src('src/app.css')
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(gulp.dest('dist'))
);

function buildCSS(done) {
    src('css/**/**.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dist('dest/css/'));
    done();
}

exports.buildCSS = buildCSS;