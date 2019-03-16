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
            browsers: [
                "Android 2.3",
                "Android >= 4",
                "Chrome >= 20",
                "Firefox >= 24",
                "Explorer >= 8",
                "iOS >= 6",
                "Opera >= 12",
                "Safari >= 6"
            ]
        }
    },
}
