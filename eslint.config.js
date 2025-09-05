import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import babelParser from "@babel/eslint-parser";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],   // ✅ handle .js and .jsx
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,            // ✅ enable JSX
        },
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"], // ✅ tell Babel it’s React
        },
      },
      globals: {
        ...js.environments.browser.globals,  // ✅ adds document, window, etc.
      },
    },
    plugins: {
      react: reactPlugin,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // React 17+
      "react/prop-types": "off",        // if not using PropTypes
      "no-unused-vars": "warn",  // change from error to warning
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
