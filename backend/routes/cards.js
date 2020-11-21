const router = require('express').Router();
const cards = require('../controllers/cards');

router.get('/', (req, res) => {
  cards.getAllCards(req, res);
});

router.post('/', (req, res) => {
  cards.createCard(req, res);
});

router.delete('/:id', (req, res) => {
  cards.deleteCard(req, res);
});

router.put('/:cardId/likes', (req, res) => {
  cards.likeCard(req, res);
});

router.delete('/:cardId/likes', (req, res) => {
  cards.dislikeCard(req, res);
});

module.exports = router;
