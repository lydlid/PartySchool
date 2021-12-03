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

    var login_pwd = req.body.password;
    var login_acc = req.body.username;

    var login = 'select password from accpwd where account = login_acc as pwd'
    con.query(login, (err, result) => {
        if(err){
            console.log('查询失败');
        }
        else{
            if(result[0].pwd == login_pwd){
                res.status(200).send({test : '登陆成功！'});
            }
        }
    })
})

app.post('/register', (req, res) => {
    console.log(req.body.username)
    console.log(req.body.password)

    var regname = req.body.username;
    var regpass = req.body.password;

    var regi = 'insert into accpwd values(regname, regpass, 1)';//accpwd是我在我的mysql里面建的存储账号密码的表，最后的1是权限等级
    con.query(regi, (err, res) => {
        if(err){
            console.log('更新失败');
            throw err;
        }
    })
    res.status(200).send({ test: '注册成功！' });
})

app.listen(8888, () => console.log(`Started server at http://localhost:8888!`))