module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],// если в начале переменой стоит _ и она не используется, еслинт не будет ругаться
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
    '@typescript-eslint/ban-ts-comment': 1,
    'jsx-quotes': ['error', 'prefer-single'],
    semi: ['error', 'never'],
    'linebreak-style': ['error', 'unix'], // символ(ы) конца строки
    quotes: ['error', 'single'], // использовать одинарные кавычки
    indent: ['error', 4, { SwitchCase: 1 }], // отступы в коде из 4 пробелов с учетом switch...case
    'arrow-parens': ['error', 'as-needed'], // скобки вокруг единственного параметра стрелочной функции
    'object-curly-spacing': ['error', 'always'], // пробелы между скобками в литералах объектов
    'array-bracket-spacing': ['error', 'never'], // пробелы между скобками в массивах
    'quote-props': ['error', 'as-needed'], // свойства объекта в кавычках или без кавычек
    'no-trailing-spaces': 'error', // не должно быть пробелов в конце строки
    'no-tabs': 'error', // символы табуляции в коде запрещена везде
    'comma-dangle': ['error', { // запятая после последнего элемента массива или объекта
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'never',
      exports: 'never',
      functions: 'never',
    }],
    'brace-style': ['error', '1tbs'], // правила для фигурных скобкок для блоков кода
    'keyword-spacing': 'error', // пробел слева и справа для ключевых слов
    'no-multi-spaces': 'error', // не допускается несколько пробелов подряд
    eqeqeq: 'error', // использовать === и !== вместо == и !=
    'max-len': ['error', 200], // максимальная длина строки
    'no-multiple-empty-lines': 'error', // не больше 2 пустых строк подряд
  },
  ignorePatterns: ['dev-dist', 'dist', 'ssr-dist', 'init.js', 'assets', 'docs'],
}
