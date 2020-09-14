const express = require('express');

const app = express();

const users = [
    {
        name: "Philip Louie"
    },
    {
        name: "William"
    },
    {
        name: "Gem"
    }
];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.post('/api/users', (req, res) => {
    const newUser = {
        name: req.body.name
    }
    users.push(newUser);
    res.redirect('/');
});

const port = 5000;

app.listen(port, () => console.log(`Server Started on Port ${port}`));
