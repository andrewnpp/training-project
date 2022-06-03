module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module"
  },
  plugins: ["eslint-plugin-jsdoc", "@typescript-eslint", "prettier"],
  ignorePatterns: ["package.json", "tsconfig.json", "webpack.config.js"],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/naming-convention": ["error", {
      selector: "default",
      format: ["camelCase"]
    }, {
      selector: "variable",
      format: ["camelCase", "UPPER_CASE"]
    }, {
      selector: "typeLike",
      format: ["PascalCase"]
    }, {
      selector: "classProperty",
      format: ["camelCase", "UPPER_CASE"]
    }, {
      selector: "enumMember",
      format: ["camelCase", "UPPER_CASE", "PascalCase"]
    }, {
      selector: "objectLiteralProperty",
      format: null
    }, {
      selector: "objectLiteralMethod",
      format: ["camelCase", "PascalCase"]
    }, {
      selector: "typeProperty",
      format: ["camelCase", "PascalCase"]
    }],
    "@typescript-eslint/no-redeclare": ["error", {
      ignoreDeclarationMerge: true
    }],
    "capitalized-comments": ["error", "always", {
      ignorePattern: "prettier-ignore"
    }],
    "curly": "error",
    "dot-notation": "error",
    "eqeqeq": ["error", "always", {
      "null": "ignore"
    }],
    "guard-for-in": "error",
    "jsdoc/check-alignment": "error",
    "jsdoc/check-indentation": "error",
    "linebreak-style": ["error", "unix"],
    "max-len": ["error", {
      code: 140,
      ignoreUrls: true
    }],
    "no-bitwise": "error",
    "no-caller": "error",
    "no-console": ["error", {
      allow: ["log", "warn", "error"]
    }],
    "no-debugger": "error",
    "no-empty": "error",
    "no-empty-function": "error",
    "no-eval": "error",
    "no-new-wrappers": "error",
    "no-labels": "error",
    "quotes": ["error", "double", {
      avoidEscape: true
    }],
    "radix": "error",
    "spaced-comment": ["error", "always", {
      markers: ["/"]
    }]
  },
};