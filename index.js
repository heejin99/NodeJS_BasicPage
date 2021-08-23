const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const port = process.env.PORT || 3350

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());


// view 경로
app.set('views', __dirname + '/views');
// 화면 engine - html
app.set('view engine', 'ejs');

// 기본 path
app.use(express.static(__dirname + '/public'))

// use routes
app.use("/api", require('./routes/main'))
app.use("/api/signup", require('./routes/signup'))
app.use("/api/login", require('./routes/login'))

app.listen(port, () => {
    console.log(`Server Listening on ${port}`)
});

// // access control allow origin - origin: 도메인 모두 허용
// // - credentials: 접근 통제 허용
// app.use(cors({
//     origin: true,
//     credentials: true
// }))

// // cookie
// app.use(cookieParser)

// app.use(session({
//     key: "loginData", // 저장될 키 값
//     secret: "teamSecret", // 서명에 필요한 값
//     resave: false, // 수정이 되지 않아도 재저장 여부
//     saveUninitialized: false, 
//     cookie: { // 쿠키 지속
//         expires: 60*60*24,
//     },
// }))