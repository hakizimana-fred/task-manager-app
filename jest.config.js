export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom', // Ensure this line is present
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
