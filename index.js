const express = require('express')
const path = require('path')
const port = 3000

let app = express();

app.use(express.static(path.join(__dirname, 'app')));
app.use(express.static(path.join(__dirname, 'bower_components')));

app.route('/')
.get(function(req, res, next){
    res.sendFile(__dirname + '/app/views/index.html');
});

app.use(function(req, res, next){
    var e = new Error('Big error');
    e.status = 404
    next(e);
}, function(err, req, res, next){
    if(err.status == 404)
        res.sendFile(__dirname + '/app/views/404.html');
});

app.listen(3000, 'localhost', function(err){
    if(err) throw err;
    console.log("listening at port 3000");
});