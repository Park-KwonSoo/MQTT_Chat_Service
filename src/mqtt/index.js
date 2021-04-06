const mqtt = require('mqtt');
const { HOST, PORT } = process.env;

const options = {
    host : HOST,
    port : PORT
};

const client = mqtt.connect(options);

module.exports = client;