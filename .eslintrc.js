module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "react-app",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/no-use-before-define": ["error", { functions: false }]
  }
};
