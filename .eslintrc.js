module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parser: "babel-eslint",
  extends: [
    "eslint:recommended", // * use from `eslint`
    "plugin:react/recommended", // * by install `eslint-plugin-react` -> React rules for Eslint
    "prettier", // * by install `eslint-plugin-prettier` -> turn off Eslint rules if conflict with Prettier
    // 'prettier/react', // * install `eslint-config-prettier` -> turn on/off conflict with Prettier
  ],
  parserOptions: {
    ecmaVersion: "2017",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["babel", "react", "import", "prettier"],
  rules: {
    "import/no-duplicates": "error",
    "import/no-unresolved": "error", // file in import not found
    "import/named": "error", // check import function/var from modules
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto", // auto have , end of line -> will not trigger errors
      },
    ], // check by Prettier on Eslint
    "react/no-typos": "error", // React common errors such as componentWillMount...
    "react/no-unused-state": "error", // prevent unused state fields
    "react/jsx-no-bind": "error", // no .bind() or arrow functions in JSX props
    "array-callback-return": "error", // check if not return correctly such as return in function
    "consistent-return": "error", // function in JS allow different types of return values -> check that
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }], // removing unused variables
  },
  settings: {
    // * Avoid errors with import normal React component
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    react: {
      pragma: "React",
      version: "15.0",
      flowVersion: "0.63.1",
    },
  },
};
