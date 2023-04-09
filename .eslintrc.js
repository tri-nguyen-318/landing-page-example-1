module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    ],
    'no-unused-vars': [
      'error',
      {
        destructuredArrayIgnorePattern: '^_',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '[iI]gnored',
      },
    ],
    'no-underscore-dangle': 0,
    'react/prop-types': 0,
    'linebreak-style': 0,
    'max-len': ['error', 150],
    'no-await-in-loop': 0,
    'react/jsx-props-no-spreading': 0,
    'default-param-last': 0,
    'no-bitwise': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
  },
};
