module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    transform: {
      '^.+\\.tsx?$': ['ts-jest', {
        useESM: true,
      }],
    },
    extensionsToTreatAsEsm: ['.ts'],
  };