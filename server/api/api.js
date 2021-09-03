import TronApi from "../tron/tronApi";

WebApp.connectHandlers.use("/lastBlock", async (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({data: await TronApi.getBlockTxs()}));
});

WebApp.connectHandlers.use("/transactions", async (req, res) => {
    const {number} = req.query;

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({data: await TronApi.getTransaction(number)}));
});

WebApp.connectHandlers.use("/contracts", async (req, res) => {
    const {number, address} = req.query;
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({data: await TronApi.getContract({number, address})}));
});

WebApp.connectHandlers.use("/getBalance", async (req, res) => {
    const {contract, address} = req.query;
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({balance: await TronApi.getBalance({contractAddress: contract, address}), address, contract }));
});