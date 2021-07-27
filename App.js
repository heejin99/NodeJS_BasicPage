const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

// routes
const indexRoute = require('./routes/index');

// View Engine
app.set('views', __dirname+'/views');
app.set('view engine', ejs);
app.use(express.static(__dirname+"/public"));

// use routes
app.use("/", indexRoute);

// listen
app.listen(PORT, function() {
    console.log('Listening ', PORT);
})