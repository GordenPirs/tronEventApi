import TronApi from "../tron/tronApi";

WebApp.connectHandlers.use("/lastBlock", async (req, res) => {
    // if(req.query.hash && checkKey(req.query.key)) {
    //     const game = new Games_manager()
    //     console.log('----------------------------');
    //     console.log(req.query.hash);
    //     game.get_hash(req.query.hash)
    // }
    // res.writeHead(200, {'Content-Type': 'application/json'});
    // res.end('ok');

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({data: await TronApi.getBlockTxs()}));
});

WebApp.connectHandlers.use("/transactions", async (req, res) => {
    // if(req.query.hash && checkKey(req.query.key)) {
    //     const game = new Games_manager()
    //     console.log('----------------------------');
    //     console.log(req.query.hash);
    //     game.get_hash(req.query.hash)
    // }
    // res.writeHead(200, {'Content-Type': 'application/json'});
    // res.end('ok');
    const {number} = req.query;

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({data: await TronApi.getTransaction(number)}));
});

WebApp.connectHandlers.use("/contracts", async (req, res) => {
    // if(req.query.hash && checkKey(req.query.key)) {
    //     const game = new Games_manager()
    //     console.log('----------------------------');
    //     console.log(req.query.hash);
    //     game.get_hash(req.query.hash)
    // }
    // res.writeHead(200, {'Content-Type': 'application/json'});
    // res.end('ok');

    const {number, address} = req.query;

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({data: await TronApi.getContract({number, address})}));
});