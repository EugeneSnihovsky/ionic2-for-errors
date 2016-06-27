var gulp = require('gulp'),
    gulpWatch = require('gulp-watch'),
    del = require('del'),
    runSequence = require('run-sequence'),
    argv = process.argv,
    merge = require('gulp-merge-json');

/**
 * Ionic hooks
 * Add ':before' or ':after' to any Ionic project command name to run the specified
 * tasks before or after the command.
 */
gulp.task('serve:before', ['watch']);
gulp.task('emulate:before', ['build']);
gulp.task('deploy:before', ['build']);
gulp.task('build:before', ['build']);

// we want to 'watch' when livereloading
var shouldWatch = argv.indexOf('-l') > -1 || argv.indexOf('--livereload') > -1;
gulp.task('run:before', [shouldWatch ? 'watch' : 'build']);

/**
 * Ionic Gulp tasks, for more information on each see
 * https://github.com/driftyco/ionic-gulp-tasks
 *
 * Using these will allow you to stay up to date if the default Ionic 2 build
 * changes, but you are of course welcome (and encouraged) to customize your
 * build however you see fit.
 */
var buildBrowserify = require('ionic-gulp-browserify-typescript'),
    buildSass = require('ionic-gulp-sass-build'),
    copyHTML = require('ionic-gulp-html-copy'),
    copyFonts = require('ionic-gulp-fonts-copy'),
    copyScripts = require('ionic-gulp-scripts-copy');

var isRelease = argv.indexOf('--release') > -1;

gulp.task('watch', ['clean'], function(done){
    runSequence(
        ['assets', 'sass', 'html', 'fonts', 'scripts'],
        function(){
            gulpWatch('app/**/*.scss', function(){ gulp.start('sass'); });
            gulpWatch('app/**/*.html', function(){ gulp.start('html'); });
            gulpWatch('app/**/*.json', function(){ gulp.start('i18n'); });
            buildBrowserify(
                {
                    src: ['./app/shared/modules/main.module.ts', './typings/index.d.ts'],
                    watch: true
                }
            ).on('end', done);
        }
    );
});

gulp.task('build', ['clean', 'hooks'], function(done){
    runSequence(
        ['assets', 'sass', 'html', 'fonts', 'scripts'],
        function(){
            buildBrowserify({
                src: ['./app/shared/modules/main.module.ts', './typings/index.d.ts'],
                minify: isRelease,
                browserifyOptions: {
                    debug: !isRelease
                },
                uglifyOptions: {
                    mangle: false
                }
            }).on('end', done);
        }
    );
});

gulp.task('sass', function () {
    var sassOptions = {
        src: 'app/assets/scss/core/app.+(ios|md|wp).scss'
    };

    return buildSass(sassOptions);
});
gulp.task('html', copyHTML);
gulp.task('fonts', copyFonts);
gulp.task('scripts', copyScripts);
gulp.task('clean', function(){
    return del('www/build');
});

gulp.task('assets', ['images', 'i18n']);

gulp.task('images', function() {
    return gulp.src([
        'app/assets/img/**/*.*'
    ])
        .pipe(gulp.dest('www/build/assets/img'));
});

//gulp.task('countryList', function() {
//    return gulp.src([
//        'app/assets/country-list/**/*.*'
//    ])
//        .pipe(gulp.dest('www/build/assets/country-list'));
//});

//gulp.task('countryFlagIcons', function() {
//    return gulp.src([
//        'node_modules/flag-icon-css/flags/**/*.*'
//    ])
//        .pipe(gulp.dest('www/build/flags'));
//});

gulp.task('i18n', function() {
    combineJson(['en', 'zh']);
    function combineJson(languages) {
        for (var i = 0; i < languages.length; i++) {
            gulp.src([
                'app/**/' + languages[i] + '.json'
            ])
                .pipe(merge(languages[i] + '.json'))
                .pipe(gulp.dest('www/build/assets/i18n'));
        }
    }
});

gulp.task('hooks', ['ios-orientation']);

gulp.task('ios-orientation', function() {
    require('./hooks/ios_orientation_fix_main.js')();
    return gulp.src([]);
});
