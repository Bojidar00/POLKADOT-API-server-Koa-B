const Koa = require('koa');
const app = new Koa();
const router = require('./routes/routes')
var bodyParser = require('koa-bodyparser');
app.use(bodyParser());
app.use(router.routes());
require('./modules/websocket');
app.listen(8080);