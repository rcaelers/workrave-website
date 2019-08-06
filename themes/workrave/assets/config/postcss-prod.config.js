module.exports = {
    plugins: {
        'postcss-import': { path: [ "assets/css", "themes/workrave/assets/css" ] },
        'postcss-preset-env': {
            stage: 3,
            features: {
                'nesting-rules': true
            }
        },
        'cssnano': { autoprefixer: true },
        'autoprefixer': {
        }
    },
}
