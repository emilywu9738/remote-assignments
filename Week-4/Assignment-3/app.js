const express = require('express');
const app = express();
const path = require('path');

const createUser = require('./database.js');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  await createUser(email, password);
});

app.listen(3000, () => console.log('Listening to port 3000!'));
