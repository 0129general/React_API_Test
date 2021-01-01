const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const BadRequestError = require('../errors/bad-request-err');
const NotFoundError = require('../errors/not-found-err');
const AuthError = require('../errors/auth-err');
const ConflictError = require('../errors/conflict-err');

const User = require('../models/user');

dotenv.config();
const { NODE_ENV, JWT_SECRET } = process.env;

module.exports.getAllUsers = (req, res, next) => {
  User.find({})
    .select('+password')
    .then((users) => res.send({ data: users }))
    .catch(next);
};

module.exports.getUserById = (req, res, next) => {
  User.findById(req.params.id === 'me' ? req.user._id : req.params.id)
    .select('+password')
    .then((user) => {
      if (user) {
        res.send({ data: user });
      } else {
        throw new NotFoundError('User not found.');
      }
    })
    .catch((err) => {
      if (err.name === 'CastError' || err.name === 'TypeError') {
        throw new NotFoundError('User not found.');
      }
      next(err);
    })
    .catch(next);
};

module.exports.updateUser = (req, res, next) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(
    { _id: req.user._id },
    { $set: { name, about } },
    { new: true, runValidators: true }
  )
    .select('+password')
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequestError(
          'Unable to update user. Please try again later.'
        );
      }
      next(err);
    })
    .catch(next);
};

module.exports.updateAvatar = (req, res, next) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(
    { _id: req.user._id },
    { avatar },
    { new: true, runValidators: true }
  )
    .select('+password')
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequestError(
          'Unable to update avatar. Please try again later.'
        );
      }
      next(err);
    })
    .catch(next);
};

module.exports.register = (req, res) => {
  const { email, password } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => User.create({
      email,
      password: hash,
    }))
    .then((user) => {
      res.status(201).send({
        _id: user._id,
        // email: user.email,
      });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// module.exports.createUser = (req, res, next) => {
//   const { name, about, avatar, email, password } = req.body;
//   bcrypt
//     .hash(password, 10)
//     .then((hash) => User.create({ name, about, avatar, email, password: hash }))
//     .then((user) => res.status(201).send({ _id: user._id }))
//     .catch((err) => res.status(400).send(err))
//     .catch(next);
// };

module.exports.createUser = (req, res, next) => {
  const { name, about, avatar, email, password } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => User.create({ name, about, avatar, email, password: hash }))
    .then((user) => res.status(201).send({ _id: user._id }))
    .catch((err) => {
      if (err.name === 'MongoError' && err.statusCode === '11000') {
        throw new ConflictError('User already taken');
      }
      // .catch((err) => {
      //   if (err.name === 'ValidationError' || err.name === 'MongoError') {
      //     throw new BadRequestError(
      //       'Unable to create user. Please try again later.'
      //     );
      //   }
      // .catch((err) => {
      //   if (err.name === 'MongoError' && err.statusCode === '11000') {
      //     res.status(409).json({ message: 'User already taken' });
      //   }
      next(err);
    })
    .catch(next);
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        throw new AuthError('Incorrect email or password.');
      } else {
        req._id = user._id;
        return bcrypt.compare(password, user.password);
      }
    })
    .then((matched) => {
      if (!matched) {
        throw new AuthError('Incorrect email or password.');
      }
      const token = jwt.sign(
        { _id: req._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
        { expiresIn: '7d' }
      );
      res.header('authorization', `Bearer ${token}`);
      res.cookie('token', token, { httpOnly: true });
      res.status(200).send({ token });
    })
    .catch(next);
};