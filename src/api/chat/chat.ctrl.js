const client = require('../../mqtt');
const chatroom = require('../../models/chatroom');
const { TOPIC } = process.env;

exports.chatting = async (ctx) => {
    const { message } = ctx.request.body;
    
    client.publish(TOPIC, message, () => {
        ctx.body = message;
    })
}

exports.getChattingRoom = (ctx) => {
    ctx.body = chatroom;
}