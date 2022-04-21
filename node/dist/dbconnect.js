"use strict";
const { Client } = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'vue-notice',
    password: '1234',
    port: 5432,
});
client.connect((error) => {
    if (error) {
        console.log(error);
        client.end();
        return;
    }
    else
        console.log("접속완료");
});
module.exports = client;
