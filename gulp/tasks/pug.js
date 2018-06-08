module.exports = function () {
    $.gulp.task('pug', function () {
        return $.gulp.src('dev/pages/*.pug')
            .pipe($.data(function () {
                return JSON.parse($.fs.readFileSync('./dev/utilities/pug/util.json'))
            }))
            .pipe($.pug({
                'pretty': true
            }))
            .on('error', $.notify.onError({
                'message': 'Error <%= error.message %>',
                'title': 'Error running something'
            }))
            .pipe($.gulp.dest('app'))
            .on('end', $.browserSync.reload)
    });

    $.gulp.task('pug:build', function () {
        return $.gulp.src('app/*.html')
            .pipe($.htmlmin({collapseWhitespace: true}))
            .pipe($.gulp.dest('dist'))
    });
}