"use strict";

var _express = _interopRequireDefault(require("express"));
var _constants = _interopRequireDefault(require("../src/config/constants"));
require("../src/config/database");
var _middleware = _interopRequireDefault(require("../src/config/middleware"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
(0, _middleware.default)(app);
app.listen(_constants.default.PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`Server running on port: ${_constants.default.PORT} Running on ${process.env.NODE_ENV} Make something great!`);
  }
});
// app.listen(PORT, err => {
//     if (err) {
//         throw err;
//     } else {
//         console.log(`Server running on port: $ {
//             PORT
//         }-- - Running on $ {
//             process.env.NODE_ENV
//         }-- - Make something great!`)
//     }
// });