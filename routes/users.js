const db = require('../config/config')
const db = require('../config/config')

const bcrypt = require('bcrypt')
const saltRounds = 10 // 10자리 salt를 이용해 비밀번호를 암호화합니다.

router.post('/register', (req, res, next) => {
	const param = [req.body.id, req.body.pw]
    
    bcrypt.hash(param[1], saltRounds, (error, hash) => {
        param[1] = hash
        db.query('INSERT INTO user(`id`, `pw`) VALUES (?, ?)', param, (err, doc) => {
            if (err) console.log(err)
    })
        
    })
    res.send()
})