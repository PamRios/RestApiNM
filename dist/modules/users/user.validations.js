Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.passwordReg = exports.default = void 0;
const _joi = _interopRequireDefault(require('joi'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6, }/;
exports.passwordReg = passwordReg;
const _default = {
  signUp: {
    body: _joi.default.object({
      email: _joi.default.string().email().required().messages({
        'any.required': 'Debe proporcionarse un email valido',
      }),
      password: _joi.default.string().regex(passwordReg).required(),
      firstName: _joi.default.string().required(),
      lastName: _joi.default.string().required(),
      userName: _joi.default.string().required(),
    }),
  },
}; // Verificar versiones de las dependencias
exports.default = _default;
