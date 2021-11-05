
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
        html: source_folder + '/*.html',
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
    browsersync = require('browser-sync').create(),
    fileinclude = require('gulp-file-include');

    function browserSync(params) {
        browsersync.init({
            server:{
                baseDir: './' + project_folder + '/'
            },
            port: 3000,
            notify: false
        })
    }

    function html() { // копирование из исходной папки в папку назначения (создается папка dist)
        return src(path.src.html)
            .pipe(fileinclude())
            .pipe(dest(path.build.html))
            .pipe(browsersync.stream()) // чтоб gulp обновил страницу
    }


    let build = gulp.series(html);
    let watch = gulp.parallel(build,browserSync);

    // подружим gulp и функции
    exports.build = build;
    exports.html = html;
    exports.watch = watch;
    exports.default = watch;