const express = require('express')
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "PartySchool",
    password: "password"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.post('/login', (req, res) => {
    console.log(req.body.username)
    console.log(req.body.password)
    res.status(200).send({ test: '登录成功！' });
})

app.post('/register', (req, res) => {
    console.log(req.body.username)
    console.log(req.body.password)
    res.status(200).send({ test: '注册成功！' });
})

app.listen(8888, () => console.log(`Started server at http://localhost:8888!`))