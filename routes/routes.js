const Router = require('koa-router');
const apis = require('../modules/Apis');
var router = Router();



router.get('/', async function (ctx){
    
    ctx.body = "Hello world!";
    
});

router.get('/api/node/blocks', async function (ctx){
    const res = await apis.LastBlock();
    ctx.body = res;
    
});

router.get('/api/node/blocks/num/:num', async function (ctx){
    //const result =  await accountController.getAccountsCount(ctx);
    ctx.body = "response"+ctx.params.num;
    
});

router.post('/api/node/blocks/hash', async function (ctx){
    //const result =  await accountController.getAccountsCount(ctx);
    ctx.body = "response";
    
});

router.get('/api/node/blocks/{x}/{n}', async function (ctx){
    //const result =  await accountController.getAccountsCount(ctx);
    ctx.body = "response";
    
});

router.get('/api/node/accounts/count/', async function (ctx){
    //const result =  await accountController.getAccountsCount(ctx);
    ctx.body = "response";
    
});

router.get('/api/node/address/transactions/count/:address', async function (ctx){
    //const result =  await accountController.getAccountsCount(ctx);
    ctx.body = "response";
    
});

router.get('/api/node/address/transactions/:address', async function (ctx){
    //const result =  await accountController.getAccountsCount(ctx);
    ctx.body = "response";
    
});

router.get('/api/node/address/balance/:address', async function (ctx){
    //const result =  await accountController.getAccountsCount(ctx);
    ctx.body = "response";
    
});

router.get('/api/node/transactions/:x/:n', async function (ctx){
    //const result =  await accountController.getAccountsCount(ctx);
    ctx.body = "response";
    
});

router.get('/api/node/transactions/count', async function (ctx){
    //const result =  await accountController.getAccountsCount(ctx);
    ctx.body = "response";
    
});

router.get('/api/node/transactions/block', async function (ctx){
    //const result =  await accountController.getAccountsCount(ctx);
    ctx.body = "response";
    
});

router.get('/api/node/transactions/hash', async function (ctx){
    //const result =  await accountController.getAccountsCount(ctx);
    ctx.body = "response";
    
});


module.exports = router;