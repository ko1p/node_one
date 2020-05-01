const express = require('express'); // Создаём сервер, для этого подключаю фрейморк 'express', предварительно его скачав.
const path = require('path'); // Для работы с путями нам понадобится path.

const usersRouter = require('./routes/users'); // Импортируем роутер usersRouter
const cardsRouter = require('./routes/cards'); // Импортируем роутер cardsRouter

const { PORT = 3000 } = process.env; // Записываю в const PORT свойство PORT из из process.env, если его нет, то установить 3000 порт.

const app = express(); // Создаю приложение.

app.use(express.static(path.join(__dirname, 'public'))); // Сделали раздачу статических файлов, корневая папка теперь по умолчанию root/public/

app.use('/', cardsRouter); // Запускаем роутер cardsRouter
app.use('/', usersRouter); // Запускаем роутер usersRouter

app.listen(PORT, () => {
  console.log(`Сервер запущен на ${PORT} порту`);
});
// Если сервер запустится, мы увидим в консоли его порт.