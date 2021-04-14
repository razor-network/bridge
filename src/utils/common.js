import Vue from 'vue'
import Web3 from 'web3'
//var _ = require('lodash/object')

// import BN from 'bignumber.js'
let web3
//let accounts
// let networkid = 4

// let error
// let ethereum
export const EventBus = new Vue()

export const enableEth = async () => {
  if (typeof window.ethereum === 'undefined'
    || typeof window.web3 === 'undefined') {
    alert('Browser does not support ethereum. Consider installing metamask!')
    return false
  } else {
    // In the case the user has MetaMask installed, you can easily
    // ask them to sign in and reveal their accounts:
    await window.ethereum.enable()
    web3 = new Web3(window.web3.currentProvider)
    return true
  }
}
// const _1e18 = new web3.utils.BN('1000000000000000000')
export const getResult = async (jobId) => {
  let bridgeBuild = require('../../build/contracts/Bridge.json')

  let bridge = new web3.eth.Contract(bridgeBuild['abi'], "0xBeB35335472FE13375a653e3eB27853a9Df319c0")

  // const accounts = await web3.eth.getAccounts()
  let result = []

  // console.log(accounts)
  const res = await bridge.methods.getResult(jobId).call()
  let name  = (await bridge.methods.getJob(jobId).call()).name

  result.push(name)
  result.push(res)
  
  return result
}

export const getAddress = async () => {
    let bridgeBuild = require('../../build/contracts/Bridge.json')
    return "0xBeB35335472FE13375a653e3eB27853a9Df319c0"
}
