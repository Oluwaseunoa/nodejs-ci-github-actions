import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // App / source files
  {
    files: ["**/*.{js,mjs}"],
    languageOptions: {
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: { js },
    extends: ["js/recommended"],
  },

  // CommonJS files
  {
    files: ["**/*.cjs"],
    languageOptions: {
      sourceType: "commonjs",
    },
  },

  // ✅ Jest test files
  {
    files: ["**/*.test.js", "**/*.spec.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
]);
