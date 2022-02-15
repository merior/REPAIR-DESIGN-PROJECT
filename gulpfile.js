const { src, dest, series } = require('gulp');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');

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
        .pipe(dest('dist/css/'));
    done();
};
function buildJS(done) {
    src(['js/**.js', '!js/**.min.js'])
        .pipe(minify({
            ext:{
                min:'.js'
            }
        }))
        .pipe(dest('dist/js/'));
    
    src('js/**.min.js')
        .pipe(dest('dist/js/'));
    done();
};

function html(done){
    src('**.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('dist/'))
    done()
}

exports.build = series(buildCSS, buildJS, html);