const { src, dest} = require("gulp");
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

const img = () => {
	return src('src/img/**/*')
	// оптимизация картинок
        .pipe(imagemin([
			imagemin.gifsicle({interlaced: true}),
			imagemin.mozjpeg({quality: 75, progressive: true}),
			imagemin.optipng({optimizationLevel: 2}),
			imagemin.svgo({
				plugins: [
					{removeViewBox: true},
					{cleanupIDs: false}
				]
			})
		]))
		//копирование картинок в папку dist/img
		.pipe(dest('dist/img/'))
		//слежение за изменением файлов
		.pipe(browserSync.stream());
}

exports.img = img;