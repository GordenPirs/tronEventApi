## Meteor Tron Event API v.0.1

# lastBlock
```
get http://localhost/lastBlock

res {
    data: Nmber
}
```

# get transactions trx 

```
http://localhost/transactions
get params: {
    number: BlockNumber
}

res {
    data: [
         {
            "txid": "68baef32025eb66862ad5020faf7748127c3c77f08449d487a8d60442f1497ed",
            "from": "TKyPCR9Yyz4P3GGQPsRQRqVayW9Mt6MBZF",
            "to": "TPCQMhbURGgHoM3NL9TCHSPpandt6MBwWg",
            "value": "198591803906"
         }
]
}
```

# get transactions contract

```
http://localhost/contracts
get params: {
    number: BlockNumber,
    address: ContractAddress,ContractAddress
}

res {
    data: [
         {
            "contract": "TBT6Asn7eZ8GD5s7T3r579s6XxKSe9m12E",
            "txid": "68baef32025eb66862ad5020faf7748127c3c77f08449d487a8d60442f1497ed",
            "from": "TKyPCR9Yyz4P3GGQPsRQRqVayW9Mt6MBZF",
            "to": "TPCQMhbURGgHoM3NL9TCHSPpandt6MBwWg",
            "value": "198591803906"
         }
    ]
}
```