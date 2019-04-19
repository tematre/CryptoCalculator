
var Web3js = require('web3')

const ContractAddress = '0x997620d18EfeE78342D7AB681f000cb7Cd1b2773';

const Abi = [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "sayHello",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "a",
          "type": "int128"
        },
        {
          "name": "b",
          "type": "int128"
        }
      ],
      "name": "sum",
      "outputs": [
        {
          "name": "",
          "type": "int128"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "a",
          "type": "int128"
        },
        {
          "name": "b",
          "type": "int128"
        }
      ],
      "name": "sub",
      "outputs": [
        {
          "name": "",
          "type": "int128"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "a",
          "type": "int128"
        },
        {
          "name": "b",
          "type": "int128"
        }
      ],
      "name": "mul",
      "outputs": [
        {
          "name": "",
          "type": "int128"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "a",
          "type": "int128"
        },
        {
          "name": "b",
          "type": "int128"
        }
      ],
      "name": "div",
      "outputs": [
        {
          "name": "",
          "type": "int128"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    }
  ];

var web3 = new Web3js(new Web3js.providers.HttpProvider("https://ropsten.infura.io/v3/5ef5aab90c7448f1b00ce3dba64723d3"));

var contract = new Web3js.eth.Contract(Abi, ContractAddress);

var contractInstance = contract.at(ContractAddress);


var result = contractInstance.methods.sayHello.call().then(x => console.log(x));
console.log(result);


app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))