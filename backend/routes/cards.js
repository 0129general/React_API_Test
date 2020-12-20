const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  getAllCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

router.get('/', getAllCards);

router.post(
  '/',
  celebrate({
    headers: Joi.object()
      .keys({
        authorization: Joi.string()
          .regex(
            /^(Bearer )[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_.+/=]*$/,
          )
          .required(),
      })
      .options({ allowUnknown: true }),
    body: Joi.object().keys({
      name: Joi.string().required().min(2).max(30),
      link: Joi.string()
        .required()
        .uri({ scheme: ['http', 'https'] }),
      likes: Joi.array().items(Joi.string()),
    }),
  }),
  createCard
);

router.delete(
  '/:cardId',
  celebrate({
    headers: Joi.object()
      .keys({
        authorization: Joi.string()
          .regex(
            /^(Bearer )[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_.+/=]*$/,
          )
          .required(),
      })
      .options({ allowUnknown: true }),
    params: Joi.object().keys({
      cardId: Joi.string().alphanum().required(),
    }),
  }),
  deleteCard,
);

router.put(
  '/likes/:cardId',
  celebrate({
    headers: Joi.object()
      .keys({
        authorization: Joi.string()
          .regex(
            /^(Bearer )[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_.+/=]*$/,
          )
          .required(),
      })
      .options({ allowUnknown: true }),
    params: Joi.object().keys({
      cardId: Joi.string().required().alphanum(),
    }),
  }),
  likeCard,
);

router.delete(
  '/likes/:cardId',
  celebrate({
    headers: Joi.object()
      .keys({
        authorization: Joi.string()
          .regex(
            /^(Bearer )[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_.+/=]*$/,
          )
          .required(),
      })
      .options({ allowUnknown: true }),
    params: Joi.object().keys({
      cardId: Joi.string().required().alphanum(),
    }),
  }),
  dislikeCard,
);

module.exports = router;
