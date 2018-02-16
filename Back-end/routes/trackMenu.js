module.exports = function (io) {
    var app = require('express');
    var router = app.Router();

    io.on('connection', function (socket) {
        console.log('conected !!!')
        socket.on('msg', function (msg) {
            console.log('msg');
        })
    });

    return router;
}