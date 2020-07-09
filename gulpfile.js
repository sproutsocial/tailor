'use strict';

const gulp = require('gulp');
const path = require('path');
const {modulesDev, modulesProd} = require('@sproutsocial/marketing-build-tools/tasks/modules');
const styles = require('@sproutsocial/marketing-build-tools/tasks/styles');

const STYLES = [
    './assets/scss/admin.scss',
    './assets/scss/canvas.scss',
    './assets/scss/frontend.scss',
    './assets/scss/ie.scss',
    './assets/scss/sidebar.scss',
    './assets/scss/tinymce.scss',
];

gulp.task('styles:dev', () => (
    gulp.src(STYLES)
        .pipe(
            styles(
                {
                    cssnano: {
                        preset: ['default', {
                            autoprefixer: false,
                            reduceIdents: false,
                            discardUnused: false,
                            normalizeWhitespace: true,
                            discardComments: false,
                            discardEmpty: false,
                            minifySelectors: false
                        }]
                    },
                    autoprefixer: false
                }
            ))
        .pipe(gulp.dest('./assets/css'))
));

gulp.task('styles', () => (
    gulp.src(STYLES)
        .pipe(styles())
        .pipe(gulp.dest('./assets/css'))
));

const JS_ENTRY = {
    canvas: './assets/js/src/canvas.js',
    sidebar: './assets/js/src/sidebar.js',
    frontend: './assets/js/src/frontend.js',
    admin: './assets/js/src/admin.js',
    tinymce: './assets/js/src/tinymce.js',
};

gulp.task('modules:dev', modulesDev({
    entry: JS_ENTRY,
    output: {
        filename: '[name].js',
        path: path.resolve('./assets/js/dist')
    },
}));

gulp.task('modules', modulesProd({
    entry: JS_ENTRY,
    output: {
        filename: '[name].min.js',
        path: path.resolve('./assets/js/dist')
    },
}));

gulp.task('build', gulp.parallel('styles:dev', 'modules:dev'));
gulp.task('default', gulp.parallel('styles', 'modules'));
