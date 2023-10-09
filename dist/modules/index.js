"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _user = _interopRequireDefault(require("./users/user.routes"));
var _auth = require("../services/auth.services");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = app => {
  app.use('/api/v1/users', _user.default);
  app.get('/hello', _auth.authJwt, (req, res) => {
    res.send('This is a private route!!! 🐱‍👤');
  });
};
exports.default = _default;