const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { User } = require("../models/User");
const {auth} = require("../middleware/auth");

// ===================================
//               User
// ===================================


router.post('/auth', auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAuth: true,
        email: req.user.email,
        image: req.user.image
    });
});

router.post("/signup", (req, res) => {
    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.json({success: false, err});
        return res.status(200).json({success: true})
    });
}); 

module.exports = router;