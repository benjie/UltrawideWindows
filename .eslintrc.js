module.exports = {
  env: {
    commonjs: true,
    es2020: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: ["@typescript-eslint"],
  globals: {
    KWin: false,
    registerShortcut: false,
    workspace: false,
  },
  rules: {},
};
