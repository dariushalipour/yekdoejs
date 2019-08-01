module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true
  },
  extends: [
    'standard',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 3,
    sourceType: "script"
  },
  rules: {
  }
}
