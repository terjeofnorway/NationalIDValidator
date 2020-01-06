module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['tests'],
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
};