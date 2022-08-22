const config = {
  displayName: 'xast-xsd-to-ts',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      useESM: true,
    },
  },
  coverageDirectory: '../../coverage/packages/xast-xsd-to-ts',
}

export default config
