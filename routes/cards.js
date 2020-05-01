const cardsRouter = require('express').Router(); // Создали роутер, который будет обрабатывать запросы по карточкам.

const cards = require('../data/cards.json'); //JSON с карточками

cardsRouter.get('/cards', (req, res) => {
  res.send(cards);
});

module.exports = cardsRouter;