const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  "parser": "@typescript-eslint/parser",
  extends: [
    'react-app',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ["@typescript-eslint", 'react', 'import', 'jsx-a11y'],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    "max-len": [
      "error",
      100,
      2,
      {
        "ignoreUrls": true,
        "ignoreComments": true,
        "ignoreRegExpLiterals": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ]
  },
  settings: {
    'import/extensions': [".js",".jsx",".ts",".tsx"],
    'import/parsers': {
      '@typescript-eslint/parser': [".ts",".tsx"]
    },
    'import/resolver': {
      'node': {
        'extensions': [".js",".jsx",".ts",".tsx"],
        'moduleDirectory': ['node_modules', 'src/'],
      },
      'typescript': {},
    }
  }
};
