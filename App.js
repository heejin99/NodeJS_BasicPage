
const express = require("express");
const app = express();
const mongoose = require("mongoose");


const config = require("./config/key");

// PORT 번호 기본값 3000으로 설정
const PORT = process.env.PORT || 3000;

// db connection
const connect = mongoose.connect(config.mongoURI,
    {
      useNewUrlParser: true, useUnifiedTopology: true,
      useCreateIndex: true, useFindAndModify: false
    })
    .then(() => console.log('MongoDB Connected...', config.mongoURI))
    .catch(err => console.log(err));

// to get the data in req.body
app.use(express.json({ extended: false}));
app.use('/api/signup', require('./routes/users'));

// get요청시 "API Running" 을 response 해주기
app.get("/", (req, res) => {
  res.send("API Running");
});

// 첫번째 인자로 PORT 번호
// 두번째 인자로 callback 함수를 통해 server 구축 성공시 console log
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));