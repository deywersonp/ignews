module.exports = {
  testIgnorePatterns: ["/node_modules/", "/.next/", "/.vscode/", "/customtypes/", "/.slicemachine/"],
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTests.ts"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
  },
  testEnvironment: "jsdom"
}