module.exports = {
  "rules": {
    "strict": 0,
    "indent": [
      2,
      2,
      {"VariableDeclarator": { "var": 2, "let": 2, "const": 3}}
    ],
    "quotes": [
      2,
      "single"
    ],
    "linebreak-style": [
      2,
      "unix"
    ],
    "semi": [
      2,
      "always"
    ],
    "comma-dangle": [
      1,
      "always-multiline"
    ],
    "no-cond-assign": [
      2,
      "except-parens"
    ],
    "no-console": 1,
    "block-scoped-var": 2,
    "eqeqeq": 2,
    "no-var": 2,
    "prefer-const": 2,
    "prefer-template": 2,
    "react/prop-types": 0,
    "react/no-danger": 0,
},
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "plugins": [
    "react",
  ],
  "ecmaFeatures": {
    "blockBindings": true,
    "experimentalObjectRestSpread": true,
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true,
    },
  },
};