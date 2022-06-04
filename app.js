const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();
// 포트 번호
const port = 3000;

// body-parser와 ejs 적용
app.use(bodyparser.urlencoded({extended : true}))
app.set('view engine','ejs')

app.get('/',(req, res)=>{
    res.render('index');
})

// 정적 파일
app.use('/css',express.static(path.resolve(__dirname,"static/css")))
app.use('/js',express.static(path.resolve(__dirname,"static/js")))

app.listen(3000,() => {console.log(`Running server on http://localhost:${port}`)})