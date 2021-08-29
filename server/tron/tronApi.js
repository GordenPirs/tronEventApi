import {Mongo} from "meteor/mongo";

const Block = new Mongo.Collection('block');
const Contractevent = new Mongo.Collection('contractevent');
const Transaction = new Mongo.Collection('transaction')

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
}

export default TronApi;