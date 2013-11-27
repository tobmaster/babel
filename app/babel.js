var models = require('./models')
    , jugglingdb = require('jugglingdb');

var Babel = function (config) {
    this.config = config;

    this.db = new jugglingdb.Schema(
        config.schema.adapter,
        config.schema.settings
    );
}

Babel.prototype.init = function () {
    models(this.db);
    this.db.autoupdate();

}

modules.exports = Babel;