var TemaTreCryptoCalculator = artifacts.require("TemaTreCryptoCalculator");
module.exports = function(deployer) {
    deployer.deploy(TemaTreCryptoCalculator);
    // Additional contracts can be deployed here
};