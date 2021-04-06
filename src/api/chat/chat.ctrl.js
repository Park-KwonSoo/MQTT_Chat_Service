const client = require('../../mqtt');
const { TOPIC } = process.env;

const chattingroom = [];

exports.chatting = async (ctx) => {
    const { message } = ctx.request.body;
    
    client.publish(TOPIC, message, () => {
        ctx.body = message;
    })

    //subscribe 데이터들을 채팅방에 넣는다.
    client.on('message', (topic, message) => {
        chattingroom.push(message.toString());
        console.log(message.toString());
    })
}

exports.getChattingRoom = (ctx) => {
    ctx.body = chattingroom;
}