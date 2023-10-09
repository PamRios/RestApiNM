"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
exports.signup = signup;
var _user = _interopRequireDefault(require("./user.model"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// POST /api/v1/users/signup
async function signup(req, res) {
  try {
    const user = await _user.default.create(req.body);
    return res.status(201).json(user);
  } catch (e) {
    console.log('error 500');
    return res.status(500).json(e);
  }
}
function login(req, res, next) {
  res.status(200).json(req.user);
  return next();
}