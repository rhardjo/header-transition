const tailwindcss = require('tailwindcss');
const nestedcss = require('postcss-nested');

const IS_DEV = process.env.NODE_ENV === 'development';

const plugins = [tailwindcss, nestedcss];

if (!IS_DEV) {
  const purgecss = require('@fullhuman/postcss-purgecss');

  class TailwindExtractor {
    static extract(content) {
      return content.match(/[A-z0-9-:\/]+/g) || [];
    }
  }

  plugins.push(
    purgecss({
      content: ['src/*.html'],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['html'],
        },
      ],
    })
  );
}

module.exports = {
  plugins: plugins,
};
