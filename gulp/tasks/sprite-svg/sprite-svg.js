// module.exports = function () {
//     const errorMessage = 'Error: <%= error.message %>';
//
//     $.gulp.task('sprite:svg', function () {
//         return $.gulp
//             .src('./app/img/icons/*.svg')
//             .pipe($.plumber({errorHandler: $.notify.onError(errorMessage)}))
//             .pipe($.svgmin({
//                 js2svg: {
//                     pretty: true
//                 },
//                 plugins: [{
//                     removeDesc: true
//                 }, {
//                     cleanupIDs: true
//                 }, {
//                     mergePaths: false
//                 }]
//             }))
//             .pipe($.rename({prefix: 'ico-'}))
//             .pipe($.svgStore({inlineSvg: false}))
//             .pipe($.through2.obj(function (file, encoding, cb) {
//                 const data = $('svg > symbol').map(function () {
//                     const $ = $.cheerio.load(file.contents.toString(), {xmlMode: true});
//                     const $this = $(this);
//                     const size = $this.attr('viewBox').split(' ').splice(2);
//                     const name = $this.attr('id');
//                     const ratio = size[0] / size[1]; // symbol width / symbol height
//                     const fill = $this.find('[fill]:not([fill="currentColor"])').attr('fill');
//                     const stroke = $this.find('[stroke]').attr('stroke');
//                     return {
//                         name: name,
//                         ratio: +ratio.toFixed(2),
//                         fill: fill || 'initial',
//                         stroke: stroke || 'initial'
//                     };
//                 }).get();
//                 this.push(file);
//                 $.gulp.src(__dirname + '/_sprite-svg.styl')
//                     .pipe($.consolidate('lodash', {
//                         symbols: data
//                     }))
//                     .pipe($.gulp.dest('./dev/stylus/generated'));
//                 cb();
//             }))
//             .pipe($.gCheerio({
//                 run: function ($, file) {
//                     $('[fill]:not([fill="currentColor"])').removeAttr('fill');
//                     $('[stroke]').removeAttr('stroke');
//                     $('[style]').removeAttr('style');
//                     $('[opacity]').removeAttr('opacity');
//                     $('[fill-opacity]').removeAttr('fill-opacity');
//                 },
//                 parserOptions: {xmlMode: true}
//             }))
//             .pipe($.rename({basename: 'sprite'}))
//             .pipe($.gulp.dest('./src/img/'));
//     });
// }
//
