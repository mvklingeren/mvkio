module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "prettier/@typescript-eslint",
    "plugin:react/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "none",
        ignoreRestSiblings: true
      }
    ]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
