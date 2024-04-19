const express = require('express');
const app = express();
const path = require('path');

const { createUser, userLogin, checkUser } = require('./database.js');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.get('/home', (req, res) => {
  res.render('home');
});

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const existUser = await checkUser(email, password);
  if (existUser.length > 0) {
    const errorMessage = 'Error!!! User already exists!';
    res.render('home', { errorMessage });
  } else {
    await createUser(email, password);
    res.redirect('/member');
  }
});

app.get('/home', (req, res) => {
  res.render('home');
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const result = await userLogin(email, password);
  if (result.length > 0) {
    res.redirect('/member');
  } else {
    const errorMessage = 'Login Failed! Please try again!';
    res.render('home', { errorMessage });
  }
});

app.get('/member', (req, res) => {
  res.render('member');
});

app.listen(3000, () => console.log('Listening to port 3000!'));
