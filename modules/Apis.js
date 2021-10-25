const apiConnection = require('./nodeConnection')
const dbConnection = require('./dbConnection')


const connectApi = apiConnection.getNodeConnection().then((api) => {
    return api;
  });
  const connectDb = dbConnection.getDbConnection().then((db) => {
    db.connect().then(console.log("Connected to PostgreSQL from Server"));
    return db;
});  
       exports.LastBlock= async () => {
           
               
               return await connectApi.then(api => api.rpc.chain.getBlock());
          
        }

        

        exports.getBlockHashByNumber = async (ctx) => {
            const number = ctx.params.number;
            return await connectApi.then(api => api.rpc.chain.getBlockHash(number));
        }
        
        exports.getBlockByHash = async (ctx) => {
           
            const hash = ctx.request.body.hash;
            return await connectApi.then(api => api.rpc.chain.getBlock(hash));
        }
        
        exports.getXBlocksAfterN = async (ctx) => {
            const x = ctx.params.x;
            const n = ctx.params.n;
        
            return connectApi.then( async api => {
                let i = 1;
                let blocks = [];
                
                while (i <= x)  {
                    let tempBlock = await api.rpc.chain.getBlockHash(n-i);
                    blocks.push(tempBlock);
                    i++;
                }
        
                return blocks;
            })
        
        }
    
        exports.getAccountsCount = async (ctx) => {
           

            const result = await connectDb.query(`SELECT COUNT(DISTINCT recipient)+COUNT(DISTINCT sender) AS count FROM transactions`);
            return result?.rows;
        }
        
        exports.getAccountTransactionsCount = async (ctx) => {
            const address = ctx.params.address;

            
            const result = await connectDb.query(`SELECT COUNT(*) AS count FROM transactions WHERE sender='${address}' OR recipient='${address}'`);
            return result?.rows;
            
        }
        
        exports.getAccountTransactions = async (ctx) => {
            const address = ctx.params.address;

            
            const result = await connectDb.query(`SELECT * FROM transactions WHERE recipient='${address}' OR sender='${address}'`);
            return result?.rows;
        }
        
        exports.getAccountBalance = async (ctx) => {
            const address = ctx.params.address;

            
            return connectApi.then(api => api.query.system.account(address));
        }
        exports.getTransactionsCount = async (ctx) => {
          
            result = await connectDb.query(`SELECT COUNT(*) AS count FROM transactions`);
            return  result?.rows;
        }
        
        exports.getTransactionsFromBlock = async (ctx) => {
            const hash = ctx.request.body.hash;

            
            const result = await connectDb.query(`SELECT * FROM transactions WHERE block_hash='${hash}'`);
            return result?.rows;
        }
        
        exports.getTransactionByHash = async (ctx) => {
            const hash = ctx.request.body.hash;
          
            const result = await connectDb.query(`SELECT * FROM transactions WHERE hash='${hash}'`);
            return result?.rows;
        }
        
        exports.getXTransactionsAfterNth = async (ctx) => {
            const x = ctx.params?.x;
            const n = ctx.params?.n;
            
            const result = await connectDb.query(`SELECT * FROM transactions WHERE id < ${n} AND id > ${n} - ${x} LIMIT ${x}`);
            return result?.rows;
        }