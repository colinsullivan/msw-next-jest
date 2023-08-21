module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  globals: {
    Request,
    Response,
    Headers,
    FormData,
    Blob,
  },
}
