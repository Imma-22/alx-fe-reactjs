module.exports = {
    testEnvironment: 'jsdom', // Use jsdom for simulating a browser
    transform: {
      '^.+\\.[t|j]sx?$': 'babel-jest', // Use babel-jest for JSX/ES6 syntax
    },
    moduleNameMapper: {
      '\\.(css|scss|svg|png|jpg)$': '<rootDir>/__mocks__/fileMock.js', // Mock assets
    },
    
  };