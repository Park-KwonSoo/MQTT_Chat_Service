const Router = require('koa-router');
const api = new Router();

const chat = require('./chat');

api.use('/chat', chat.routes());

module.exports = api;