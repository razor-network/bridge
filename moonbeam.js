const Web3 = require("web3");
let provider = 'https://rpc.testnet.moonbeam.network'
const web3 = new Web3(new Web3.providers.HttpProvider(provider))
const fs = require('fs')
const pk = fs.readFileSync(".pk").toString().trim()
let bridgeBuild = require('./build/contracts/Bridge.json')

let abi = bridgeBuild['abi']
let bytecode = bridgeBuild['bytecode']

web3.eth.accounts.wallet.add(pk)

let addr = web3.eth.accounts.wallet[0].address
console.log('using address ', addr)

const deploy = async() => {
    
    const result = await new web3.eth.Contract(
        abi
      )
        .deploy({ data: bytecode })
        .send({ gas: '4700000', from: addr });

        console.log('Contract deployed to', result.options.address);
}
deploy();