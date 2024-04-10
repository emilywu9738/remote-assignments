const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.static('public'));
app.use(cookieParser());



// app.get('/cookie', (req, res) => {
//     res.cookie('userName', 'Tim', { maxAge: 900000 });
//     console.log(req.cookies);
//     res.send('Check the console for cookies!');
// })

app.get('/data', (req, res) => {
    // const number = Number(req.query.number);
    const { number } = req.query;
    if (number === undefined) {
        res.send('Lack of Parameter');
    } else if (isNaN(number)) {
        res.send('Wrong Parameter!');
    } else {
        let result = 0
        for (let i = 1; i <= number; i++) {
            result += i;
        }
        res.send(`Your result is ${result}`)
    }
})

app.get('/myName', (req, res) => {
    const { userName } = req.cookies;
    if (userName) {
        res.send(`User name: ${userName}`)
    } else {
        res.send(
            `<form action="/trackName" method="GET">
               <label for="UserName"> Enter your name:</label> 
               <input type="text" name="name" id="UserName">
               <button>Submit</button>
            </form>`
        )
    }
})

app.get('/trackName', (req, res) => {
    const { name } = req.query;
    res.cookie('userName', name);
    console.log(req.cookies)
    res.redirect('/myName');
})

app.get('/', (req, res) => {
    res.send('Hello!')
})

app.listen('3000', () => {
    console.log('LISTENING TO PORT 3000');
})