module.exports = {
  parser: "@babel/eslint-parser",
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    node: true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "no-unused-vars": "warn",
    "react/no-unescaped-entities": "off",
    "react/no-unknown-property": "warn",
  },
}
