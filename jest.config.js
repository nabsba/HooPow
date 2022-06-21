// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest()

const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/services/jest/config/setupTests.ts'],
	testEnvironment: 'jest-environment-jsdom',
	moduleDirectories: ['node_modules', '<rootDir>/']

}

// createJestConfig returns an async function that returns a jest config -
// so instead of doing this:
// module.exports = createJestConfig(customJestConfig)

// Take the returned async function...
const asyncConfig = createJestConfig(customJestConfig)

// and wrap it...
module.exports = async () => {
  const config = await asyncConfig()
  config.transformIgnorePatterns = [
    // ...your ignore patterns
  ]
  return config
}