import mongoose, { Schema } from 'mongoose';
import validator from 'validator';
import * as bcrypt from 'bcrypt';
import { passwordReg } from './user.validations';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required!'],
    trim: true,
    validate: {
      validator(email) {
        return validator.isEmail(email);
      },
      message: '{VALUE} is not valid email!',
    },
  },
  firstName: {
    type: String,
    required: [true, 'FirstName is required!'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'LastName is required!'],
    trim: true,
  },
  userName: {
    type: String,
    required: [true, 'UserName is required!'],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    requiered: [true, 'Password is required'],
    trim: true,
    minlength: [6, 'Password need to be longer'],
    validate: {
      validator(password) {
        return passwordReg.test(password);
      },
      message: '{VALUE} is not valid password!',
    },
  },
});

// Agregando encriptación de la contraseña
UserSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = this.hashPassword(this.password);
  }
  return next();
});

UserSchema.methods = {
  hashPassword(password) {
    return bcrypt.hashSync(password, 10);
  },
  autenticacionUsuario(password) {
    return bcrypt.compare(password, this.password);
  },
};

export default mongoose.model('User', UserSchema);
