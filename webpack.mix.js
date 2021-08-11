let mix = require('laravel-mix');

/* JS */
mix.js('src/js/script.js', 'public/js');

/* SASS */
mix.sass('src/sass/style.scss', 'public/css');

/* Html */
mix.copy('src/index.html', 'public/index.html')

/* Imagens */
// mix.copy('src/img/*', 'public/img/');
