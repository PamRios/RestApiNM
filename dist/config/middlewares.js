Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
const _morgan = _interopRequireDefault(require('morgan'));
const _bodyParser = _interopRequireDefault(require('body-parser'));
const _compression = _interopRequireDefault(require('compression'));
const _helmet = _interopRequireDefault(require('helmet'));
const _util = require('util');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';
const _default = (app) => {
  if (isProd) {
    app.use((0, _compression.default)());
    app.use((0, _helmet.default)());
  }
  app.use(_bodyParser.default.json());
  app.use(
    _bodyParser.default.urlencoded({
      extended: true,
    }),
  );
  if (isDev) {
    app.use((0, _morgan.default)('dev'));
  }
};
exports.default = _default;
