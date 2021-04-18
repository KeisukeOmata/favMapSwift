module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '\\.(css|module.css)$': 'identity-obj-proxy',
    '^pages(.*)$': '<rootDir>/src/pages$1',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^styles(.*)$': '<rootDir>/src/styles$1',
    '^lib(.*)$': '<rootDir>/src/lib$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react-jsx',
      },
    },
  },
}
