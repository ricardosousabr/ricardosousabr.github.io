/** @type {import('jest').Config} */
const config = {
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: -10,
    },
  },
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
};

module.exports = config;