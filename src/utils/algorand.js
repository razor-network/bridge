import Vue from 'vue'
import Web3 from 'web3'

const algosdk = require('algosdk');
const baseServer = "https://testnet-algorand.api.purestake.io/ps2";
const port = "";

const token = {
    'X-API-key' : 'Phj6ripefW9ExTzrTYGy6hmuk4fZTZq11BE9VYqb',
}



async function readGlobalState(client, account, index){
    let accountInfoResponse = await client.accountInformation(account.addr).do();
    let state = {};
    for (let i = 0; i < accountInfoResponse['created-apps'].length; i++) {
        if (accountInfoResponse['created-apps'][i].id == index) {
            console.log("Application's global state:");
            for (let n = 0; n < accountInfoResponse['created-apps'][i]['params']['global-state'].length; n++) {
              console.log(atob(accountInfoResponse['created-apps'][i]['params']['global-state'][n].key));
              let key = atob(accountInfoResponse['created-apps'][i]['params']['global-state'][n].key)
              let value = atob(accountInfoResponse['created-apps'][i]['params']['global-state'][n].value.bytes);
              state[key] = value;
            }
        }
    }
    console.log(state);
    return state;
}

export const getResult = async () => {
  let algodClient = new algosdk.Algodv2(token, baseServer, port);

  let params = await algodClient.getTransactionParams().do();
  var mnemonic = "sustain deputy gospel hen arrange lazy erosion health sentence loan upset gate use shed feature similar seminar produce champion praise approve stage space absent broken";
  let userAddress = "POCE5GIBW74DEDEARWR6NHRTQ67F45CLG5SRGQQDKH37ALEASLDAZFQNME"
  let appIndex = 13312779
  var recoveredAccount = algosdk.mnemonicToSecretKey(mnemonic)

  let result = await readGlobalState(algodClient, recoveredAccount, appIndex)
  console.log(result);
  return result
}

export const getAddress = async () => {
  return '13312779'
}
