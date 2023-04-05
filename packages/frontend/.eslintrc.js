/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  parser: "vue-eslint-parser",
  root: true,
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  overrides: [
    {
      files: ["cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
  },
};
