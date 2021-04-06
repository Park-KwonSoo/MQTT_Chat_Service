const Koa = require('koa');
const Router = require('koa-router');
const bodyparser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

require('dotenv').config();

const api = require('./src/api');
const subscribing = require('./src/util/subscribing');

app.use(bodyparser());
router.use('/api', api.routes());
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    subscribing();
    console.log("Connect to Port 4000");
})