import react from "eslint-plugin-react";
import babelParser from "@babel/eslint-parser";

export default [
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"], // lint only JS/TS files in src
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      react
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "single"],
      "no-unused-vars": "warn"
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  {
    ignores: ["node_modules/**", "dist/**", ".eslintrc.js"]
  }
];
