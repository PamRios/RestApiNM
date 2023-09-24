

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const _express = require("express");
const _expressValidation = _interopRequireDefault(require("express-validation"));
const userController = _interopRequireWildcard(require("./user.controllers"));
const _user2 = _interopRequireDefault(require("./user.validations"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; const cacheBabelInterop = new WeakMap(); const cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } const cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } const newObj = {}; const hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (const key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { const desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const routes = new _express.Router();

// POST /api/v1/users/signup
routes.post('/signup', (0, _expressValidation.default)(_user2.default.signUp), userController.signUp);
const _default = routes;
exports.default = _default;