const config = {
  displayName: 'ts-to-zod-recursive',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      useESM: true,
    },
  },
  coverageDirectory: '../../coverage/packages/ts-to-zod-recursive',
}

export default config
