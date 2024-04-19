const express = require('express');
const app = express();
const path = require('path');

const { createUser, userLogin } = require('./database.js');

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

app.get('/login', async (req, res) => {
  res.render('login');
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const result = await userLogin(email, password);
  if (result.length > 0) {
    res.redirect('/home');
  } else {
    const errorMessage = 'Error!!! Please try again!';
    res.render('login', { errorMessage });
  }
});

app.get('/home', (req, res) => {
  res.render('home');
});

app.listen(3000, () => console.log('Listening to port 3000!'));
