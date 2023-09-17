"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signUp = signUp;
var _user = _interopRequireDefault(require("./user.model"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// POST /api/v1/users/signup
async function signUp(req, res) {
  try {
    const user = await _user.default.create(req.body);
    return res.status(201).json(user);
  } catch (e) {
    return res.status(500).json(e);
  }
}