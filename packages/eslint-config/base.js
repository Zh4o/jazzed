import tseslint from "typescript-eslint";
import turboPlugin from "eslint-plugin-turbo";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default tseslint.config(
  {
    ignores: ["node_modules/", "dist/", ".turbo/"],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      ...turboPlugin.configs.recommended.rules,
    },
  },
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  }
);