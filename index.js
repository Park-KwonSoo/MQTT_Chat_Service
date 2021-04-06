const Koa = require('koa');
const Router = require('koa-router');
const bodyparser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

require('dotenv').config();

const client = require('./src/mqtt');
const { TOPIC } = process.env;

const api = require('./src/api');

app.use(bodyparser());
router.use('/api', api.routes());
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    client.subscribe(TOPIC, () => {
        console.log(TOPIC, 'subscribe complete');
    })
    console.log("Connect to Port 4000");
})