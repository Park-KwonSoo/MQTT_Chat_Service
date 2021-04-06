const client = require('../mqtt');
const chatroom = require('../models/chatroom');
const { TOPIC } = process.env;

const subscribing = () => {
    client.subscribe(TOPIC, () => {
        console.log(TOPIC, 'subscribe complete');
    });
    
    client.on('message', (topic, message, packet) => {
        console.log(message.toString());
        chatroom.push(message.toString());
    });
}

module.exports = subscribing;
