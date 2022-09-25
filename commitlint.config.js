module.exports = {
    plugins: ['commitlint-plugin-function-rules'],
    rules: {
      'type-empty': [0],
      'subject-empty': [0],
      'type-enum': [0],
      'function-rules/type-enum': [
        2,
        'always',
        (parsed) => {
          const headerRegex = /[a-zA-Z]+-\d+\/[a-zA-Z ]+: .*/;
          const isHeaderValid = parsed.header.match(headerRegex);
          if (isHeaderValid) {
            return [true];
          }
          return [false, `header must match this regex: ${headerRegex}, e.g. GPFED-123/feat: something text`];
        },
      ],
    },
  };