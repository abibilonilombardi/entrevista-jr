module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testTimeout: 30000,
    coverageDirectory: './coverage/',
    moduleFileExtensions: ['ts', 'js'],
    testPathIgnorePatterns: ['.js'],
}