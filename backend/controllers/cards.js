const Card = require('../models/card');

const BadRequestError = require('../errors/bad-request-err');
const ServerError = require('../errors/server-err');
const NotFoundError = require('../errors/not-found-err');
const AuthError = require('../errors/auth-err');

module.exports.getAllCards = (req, res, next) => {
  Card.find({})
    .then((card) => res.send({ data: card }))
    .catch(() => {
      throw new ServerError('An error has occured on the server');
    })
    .catch(next);
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequestError(
          'Unable to create card. Please try again later.'
        );
      }
    })
    .catch(next);
};

module.exports.deleteCard = (req, res, next) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (card && req.user._id.toString() === card.owner.toString()) {
        Card.deleteOne(card).then((deletedCard) => {
          res.send(deletedCard);
        });
      } else if (!card) {
        throw new NotFoundError('Card not found.');
      } else {
        throw new AuthError(
          'You need to be the owner of this card to delete it.'
        );
      }
    })
    .catch((err) => {
      if (err.name === 'CastError' || err.statusCode === 404) {
        throw new NotFoundError('Card not found.');
      }
      next(err);
    })
    .catch(next);
};

module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  )
    .then((card) => {
      if (card) {
          res.send(card);
      } else if (!card) {
        throw new NotFoundError('Card not found.');
      }
    })
    .catch((err) => {
      if (err.name === 'CastError' || err.statusCode === 404) {
        throw new NotFoundError('Card not found.');
      }
    })
    .catch(next);
};

module.exports.dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .then((card) => {
      if (card) {
          res.send(card);
      } else if (!card) {
        throw new NotFoundError('Card not found.');
      }
    })
    .catch((err) => {
      if (err.name === 'CastError' || err.statusCode === 404) {
        throw new NotFoundError('Card not found.');
      }
    })
    .catch(next);
};
