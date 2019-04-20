
import web3 from './TematTreWeb3.js';

export const ContractAddress = '0x2c728a9a83e1df1028994020fbd582f6f66e1ec6';
export const ContractText = 'pragma solidity >=0.5.0;\r\ncontract TemaTreCryptoCalculator {\r\n    \r\n    constructor() public {\r\n    }\r\n\r\n    function sayHello() public pure  returns(string memory){\r\n        return  (\"hello world\");\r\n    }\r\n\r\n    function sum(int128 a, int128 b) public pure  returns (int128){\r\n        return a + b;\r\n    }\r\n    \r\n    function sub(int128 a, int128 b) public pure  returns (int128){\r\n        return a - b;\r\n    }\r\n    \r\n    function mul(int128 a, int128 b) public pure returns (int128){\r\n        return a * b;\r\n    }\r\n    \r\n    function div(int128 a, int128 b) public pure returns (int128){\r\n        return a \/ b;\r\n    }\r\n}\r\n';
export const Abi = [
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
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];

  export default new web3.eth.Contract(Abi,ContractAddress);