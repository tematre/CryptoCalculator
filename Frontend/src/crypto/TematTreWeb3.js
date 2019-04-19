import Web3 from 'web3';

const web3 =  new Web3(new Web3.providers.HttpProvider(
    "https://ropsten.infura.io/v3/5ef5aab90c7448f1b00ce3dba64723d3"
));

export default web3;