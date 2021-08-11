let mix = require('laravel-mix');

mix.js('src/js/script.js', 'public/js');
mix.sass('src/sass/style.scss', 'public/css');

mix.copy('src/index.html', 'public/index.html').copy('src/img/*', 'public/img/');
