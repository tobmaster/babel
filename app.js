var config = require('./config');

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err + '\n' + err.stack);
});

var babel = new Babel(config);
