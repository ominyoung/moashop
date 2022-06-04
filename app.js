const expressLayouts = require('express-ejs-layouts');
const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();
// 포트 번호
const port = 3000;

// body-parser와 ejs 적용
app.use(bodyparser.urlencoded({extended : true}))
app.set('view engine','ejs');
app.set('views',__dirname + '/views');

//views/index.ejs를 기본 레이아웃으로 정한다.
app.set('layout','index');

app.use(expressLayouts);

app.get('/',(req, res)=>{
    res.render('body/home');
})
app.get('/outfit',(req, res)=>{
    res.render('body/outfit');
})

// 정적 파일
app.use('/css',express.static(path.resolve(__dirname,"static/css")))
app.use('/js',express.static(path.resolve(__dirname,"static/js")))

app.listen(3000,() => {console.log(`Running server on http://localhost:${port}`)})