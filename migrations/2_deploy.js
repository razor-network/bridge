var Bridge = artifacts.require('./Bridge.sol')
module.exports = async function (deployer) {
  deployer.then(async () => {
    await deployer.deploy(Bridge)
})
}
