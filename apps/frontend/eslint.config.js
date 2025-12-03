import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist", "node_modules"]),

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ["**/*.{ts,tsx,js,jsx}"],

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      prettier,
      "react-refresh": reactRefresh,
    },

    settings: {
      react: { version: "detect" },
    },

    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.flat.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...reactRefresh.configs.vite.rules,
      ...prettier.configs.recommended.rules,

      "react/react-in-jsx-scope": "off",
    },
  },
]);
