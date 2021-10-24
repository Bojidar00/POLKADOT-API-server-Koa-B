const Koa = require('koa');
const app = new Koa();
const router = require('./routes/routes')

//app.use(async ctx => {
//  ctx.body = 'Hello World';
//});
app.use(router.routes());
app.listen(3000);