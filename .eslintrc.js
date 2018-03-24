// todo
module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "semi": 2,
    "no-console": 0,
    "no-var": 2,
    "no-void": 2,
    "no-with": 2,
    "prefer-const": 2
  },
  "env": {
   "browser": true,
    "node": true
  }
}

// "rules":
//   "indent": [2, 2, {"SwitchCase": 1}]
//   "max-len": 0
//   "no-magic-numbers": 0
//   "react/prefer-es6-class": 0
//   "react/no-multi-comp": 0
// "env":
//   "browser": true,
//   "node": true
// "globals":
//   "afterEach": true,
//   "describe": true,
//   "expect": true,
//   "it": true,
//   "jest": true,
//   "test": true
