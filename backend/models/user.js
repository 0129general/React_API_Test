const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
    default: "Jacques Cousteau",
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
    default: "Explorer",
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /^(https?):\/\/(www\.)?[\w-@:%+~#=]+[.][.\w/\-?#=&~@:()!$+%]*$/gm.test(
          v
        );
      },
    },
    default: "https://pictures.s3.yandex.net/resources/avatar_1604080799.jpg",
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => validator.isEmail(email),
      message: "Email address not valid ",
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
    // minlength: 8
  },
});

module.exports = mongoose.model('user', userSchema);