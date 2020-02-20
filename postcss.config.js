const IS_PROD = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-nested'),
    require('autoprefixer'),
    IS_PROD &&
      require('@fullhuman/postcss-purgecss')({
        content: ['./src/components/**/*.{js,jsx,css,pcss}'],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      }),
  ],
};
