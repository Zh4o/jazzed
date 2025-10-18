import baseConfig from "./base.js";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default tseslint.config(...baseConfig, {
  files: ["**/*.tsx"],
  plugins: {
    react: reactPlugin,
    "react-hooks": reactHooksPlugin,
    "react-refresh": reactRefreshPlugin,
  },
  languageOptions: {
    globals: {
      React: "readonly",
    },
  },
  rules: {
    ...reactPlugin.configs.recommended.rules,
    ...reactHooksPlugin.configs.recommended.rules,
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
});