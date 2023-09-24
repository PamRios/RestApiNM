

const _mongoose = _interopRequireDefault(require("mongoose"));
const _constants = _interopRequireDefault(require("./constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* eslint-disable no-console */

_mongoose.default.Promise = global.Promise;
try {
  _mongoose.default.connect(_constants.default.MONGO_URL);
} catch (err) {
  _mongoose.default.createConnection(_constants.default.MONGO_URL);
}
_mongoose.default.connection.once('open', () => console.log('MongoDB Running')).on('error', e => {
  throw e;
});