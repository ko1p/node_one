const usersRouter = require('express').Router(); // Создали роутер, который будет обрабатывать запросы по юзерам.

const users = require('../data/users.json'); //JSON с пользователями

usersRouter.get('/users', (req, res) => {
  res.send(users);
});

usersRouter.get('/users/:id', (req, res) => {
  const { id } = req.params; // Вытаскиваем значение id в req.params (это объект с информацией запроса от пользователя) и записываем в константу id

  users.forEach((user) => { // Перебираем массив с user'ами, если в графе _id есть совпадение с присланым пользователем id, то ...
    if (user._id === id) {
      res.send(user); // ... высылаем этого user'a обратно
    }
  });

  res.status(404).send({ "message": "Нет пользователя с таким id" }); // в противном случае, ставим статус 404 - не найдено и шлём сообщение

});

usersRouter.get('*', (req, res) => {
  res.status(404).send({ "message": "Запрашиваемый ресурс не найден" });
});

module.exports = usersRouter;