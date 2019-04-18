var TemaTreCryptoCalculator = artifacts.require("TemaTreCryptoCalculator");
module.exports = function(deployer) {
    deployer.deploy(TemaTreCryptoCalculator)
    // Option 2) Console log the address:
    .then(() => console.log( "Contract adress "+TemaTreCryptoCalculator.address))

    // Option 3) Retrieve the contract instance and get the address from that:
    .then(() => TemaTreCryptoCalculator.deployed())
    .then(_instance => console.log("Instance adress: " + _instance.address));;
    // Additional contracts can be deployed here
};