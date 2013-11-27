var config = {
    schema: {
        adapter: 'sqlite3',

        // Schema settings depend on the used jugglingdb schema
        settings: {
            database: 'babel.db'
        }
    },

    port: process.env.BABEL_PORT || 3000,

    debug: true
};

module.exports = config;