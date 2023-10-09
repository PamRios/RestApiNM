"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const devConfig = {
  MONGO_URL: 'mongodb://localhost:27017/restapinm-dev',
  JWT_SECRET: 'thisisasecret'
};
const testConfig = {
  MONGO_URL: 'mongodb://localhost:27017/restapinm-test'
};
const prodConfig = {
  MONGO_URL: 'mongodb://localhost:27017/restapinm-prod'
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