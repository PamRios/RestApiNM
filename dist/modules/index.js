

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const _user = _interopRequireDefault(require("./users/user.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const _default = app => {
  app.use('/api/v1/users', _user.default);
};
exports.default = _default;