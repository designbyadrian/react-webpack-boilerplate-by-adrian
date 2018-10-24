module.exports = {
  collectCoverageFrom: [
    'app/**/*.{js,jsx}',
    '!app/**/*.test.{js,jsx}',
    '!app/index.js',
  ],
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98,
    },
  },
  moduleDirectories: [
    'node_modules',
    'app',
  ],
  moduleNameMapper: {
    'components(.*)$': '<rootDir>/app/components/$1',
    'constants(.*)$': '<rootDir>/app/constants/$1',
    'containers(.*)$': '<rootDir>/app/containers/$1',
    'utils(.*)$': '<rootDir>/app/utils/$1',
    'styles(.*)$': '<rootDir>/app/stylesheets/$1',
    '\\.module\\.(c|le|sc|sa)ss$': 'identity-obj-proxy',
    '\\.(c|le|sc|sa)ss$': require.resolve('./tests/style.mock.js'),
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': require.resolve('./tests/file.mock.js'), // eslint-disable-line max-len
  },
  setupTestFrameworkScriptFile: require.resolve('./tests/setup.js'),
};