"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const devConfig = {
  MONGO_URL: "mongodb+srv://admin:admin123@cluster0.itxniev.mongodb.net/?retryWrites=true&w=majority"
};
const testConfig = {
  MONGO_URL: "mongodb://localhost/restapinm-test"
};
const prodConfig = {
  MONGO_URL: "mongodb://localhost/restapinm-prod"
};
const defaultConfig = {
  PORT: process.env.PORT || 3000
};
function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}
var _default = {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV)
};
exports.default = _default;