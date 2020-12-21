const mtr = require("meterify").meterify;
const Web3 = require("web3");
const meterify = mtr(new Web3(), "http://s01.meter.io:8669");
const fs = require('fs')
const pk = fs.readFileSync(".pk").toString().trim()
let bridgeBuild = require('./build/contracts/Bridge.json')

let abi = bridgeBuild['abi']
let bytecode = bridgeBuild['bytecode']

meterify.eth.accounts.wallet.add(pk)

let addr = meterify.eth.accounts.wallet[0].address
console.log('using address ', addr)

const deploy = async() => {
    
    const result = await new meterify.eth.Contract(
        abi
      )
        .deploy({ data: bytecode })
        .send({ gas: '4700000', from: addr });

        console.log('Contract deployed to', result.options.address);
}
deploy();