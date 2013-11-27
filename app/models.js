module.exports = function (schema) {
    schema.define('User', {
        username: { type: String },
        password: { type: String }
    });

    schema.define('Connection', {
        user_id: { type: String },
        label: { type: String },
        hostname: { type: String },
        port: { type: Number },
        nick: { type: String },
        away: { type: String },
        ssl: { type: Boolean },
        self_signed: { type: Boolean },
        encoding: { type: String },
        server_password: { type: String },
        nickserv_password: { type: String },
        nickserv_enabled: { type: Boolean },
        sasl_enabled: { type: Boolean },
        real_name: { type: String },
        disabled: { type: Boolean },
        keep_alive: { type: Boolean },
        creation: { type: Date, default: function () {
            return new Date;
        }}
    });

    schema.define('Message', {
        connection_id: { type: Number },
        by: { type: String },
        chan: { type: String },
        at: { type: Date, default: function () {
            return new Date;
        } },
        msg: { type: String }
    });

    schema.define('Channel', {
        connection_id: { type: Number },
        name: { type: String },
        chanserv_enabled: { type: Boolean },
        chanserv_password: { type: String }
    });

};