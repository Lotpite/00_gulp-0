
let project_folder = 'dist'; // папка для вывода результата
let source_folder = 'src'; // папка с исходниками

let path = { //папка с обьектом который содержит различные пути к папкам и файлам
    build:{
        html: project_folder + '/',
        css: project_folder + '/css/',
        js: project_folder + '/js/',
        img: project_folder + '/img/',
        fonts: project_folder + '/fonts/',
    },
    src: {
        html: source_folder + '/',
        css: source_folder + '/scss/style.scss',
        js: source_folder + '/js/script.js',
        img: source_folder + '/img/**/*.{jpg,svg,gif,ico,webp}',
        fonts: source_folder + '/fonts/*.ttf',
    },
    watch: {
        html: source_folder + '/**/*.html',
        css: source_folder + '/scss/**/*.scss',
        js: source_folder + '/js/**/*.js',
        img: source_folder + '/img/**/*.{jpg,svg,gif,ico,webp}',
        fonts: source_folder + '/fonts/*.ttf',
    },
    clean: './' + project_folder + '/'
}

let {src, dest} = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync').create();

    function browserSync(params) {
        browsersync.init({
            server:{
                baseDir: './' + project_folder + '/'
            },
            port: 3000,
            notify: false
        })
    }

    let watch = gulp.parallel(browserSync);

    exports.watch = watch;
    exports.default = watch;