import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import unusedImports from "eslint-plugin-unused-imports";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser"; // Import the TypeScript parser

export default [
  {
    ignores: [".nuxt/**/*", "types/devextreme-vue.d.ts"],
  },
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser, // Use the imported Vue parser
      parserOptions: {
        parser: tsParser, // Use the imported TypeScript parser
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    plugins: {
      vue,
      "unused-imports": unusedImports,
      "@typescript-eslint": tseslint,
    },
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/block-order": [
        "error",
        {
          order: [["script", "template"], "style"],
        },
      ],
      "vue/block-lang": [
        "error",
        {
          script: { lang: "ts" },
        },
      ],
      "vue/define-props-declaration": ["error", "type-based"],
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/no-explicit-any": "error",
      "no-console": [
        "error",
        {
          allow: ["error"], // Allow console.error
        },
      ],
    },
  },
  {
    files: ["**/*.ts"], // Add support for TypeScript files
    languageOptions: {
      parser: tsParser, // Use the imported TypeScript parser
      parserOptions: {
        ecmaVersion: 2020, // Support modern ECMAScript features
        sourceType: "module", // Enable ES modules
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/no-explicit-any": "error",
      "no-console": [
        "error",
        {
          allow: ["error"], // Allow console.error
        },
      ],
      // Add any additional rules for TypeScript here
    },
  },
];
