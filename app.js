const expressLayouts = require('express-ejs-layouts');
const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();
const controller = require('./controller/outfitController');
// 포트 번호
const port = 3000;

// body-parser와 ejs 적용
app.use(bodyparser.urlencoded({extended : true}))
app.set('view engine','ejs');
app.set('views',__dirname + '/views');

//views/index.ejs를 기본 레이아웃으로 정한다.
app.set('layout','index');

app.use(expressLayouts);

//=== 데이터베이스 연결 ===//

// 몽고디비 모듈 사용
var MongoClient = require('mongodb').MongoClient;
// 데이터베이스
var database;

function connectDB(){
    var databaseUrl = 'mongodb://localhost:27017/moashop';

    MongoClient.connect(databaseUrl, function(err, db){
        if(err) throw err;

        console.log('데이터베이스에 연결되었습니다. : '+ databaseUrl);

        database = db;
    })
}



// 메인페이지
app.get('/',(req, res)=>{
    res.render('body/home');
})

// 코디 리스트
app.get('/outfit',(req, res)=>{
    res.render('body/outfit');
})
// 코디 추가
app.get('/outfit/add',(req, res)=>{
    res.render('body/addOutfit');
})
// 코디 수정
app.get('/outfit/update',(req, res)=>{
    res.render('body/updateOutfit');
})

//API
app.post("/api/users",controller.create);
app.get("/api/users",controller.find);
app.put("/api/users/:id",controller.update);
app.delete("/api/users/:id",controller.delete);

// 정적 파일
app.use('/css',express.static(path.resolve(__dirname,"static/css")))
app.use('/js',express.static(path.resolve(__dirname,"static/js")))

app.listen(3000,() => {console.log(`Running server on http://localhost:${port}`)})