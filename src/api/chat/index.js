const Router = require('koa-router');
const chat = new Router();
const chatCtrl = require('./chat.ctrl');

chat.post('/chatting', chatCtrl.chatting);
chat.get('/chatroom', chatCtrl.getChattingRoom);

module.exports = chat;