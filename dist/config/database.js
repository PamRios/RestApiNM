"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
var _constants = _interopRequireDefault(require("./constants"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_mongoose.default.Promise = global.Promise;
try {
  _mongoose.default.connect(_constants.default.MONGO_URL);
} catch (err) {
  _mongoose.default.createConnection(_constants.default.MONGO_URL);
}
_mongoose.default.connection.once('open', () => console.log('MongoDB Running')).on('error', e => {
  throw e;
});