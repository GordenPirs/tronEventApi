import {Mongo} from "meteor/mongo";

const Block = new Mongo.Collection('block');
const Contractevent = new Mongo.Collection('contractevent');
const Transaction = new Mongo.Collection('transaction')


const TronWeb = require('tronweb');

const tronWeb = new TronWeb({
    fullNode: 'http://5.45.78.116:8090',
    solidityNode: 'http://5.45.78.116:8091',
    eventServer: 'https://api.trongrid.io',
    privateKey: 'F0A8AF0B5A486B9EC76A199E767FD7157240D95D60620FDC8A9C4D2672B2B2F4'
});


class TronApi {



    static async getBlockTxs() {
        return Transaction.findOne({}, {sort: {blockNumber: -1}}).blockNumber;
    }

    static async getTransaction(number = 33191399) {
        return Transaction.find({assetName : "trx", blockNumber: Number(number), fromAddress: {$ne:null}}, {fields: {'_id': 0}}).map(tx=> {
            return {
                txid: tx.transactionId,
                from: tx.fromAddress,
                to: tx.toAddress,
                value: tx.assetAmount
            }
        });
    }

    static async getContract({number, address}) {
        return Contractevent.find({blockNumber: Number(number), contractAddress: {$in: address}}, {fields: {'_id': 0}}).map(tx=> {
            return {
                contract: tx.contractAddress,
                txid: tx.transactionId,
                from: tx.topicMap.from,
                to: tx.topicMap.to,
                value: tx.dataMap.value
            }
        });
    }

    static async getBalance({contractAddress, address}) {
        console.log(contractAddress, address);
        const { abi } = await tronWeb.trx.getContract(contractAddress);

        const contract = tronWeb.contract(abi.entrys, contractAddress);
        const balance = await contract.methods.balanceOf(address).call();
        return tronWeb.toBigNumber(balance).toNumber();
    }
}

export default TronApi;