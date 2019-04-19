
import web3 from './TematTreWeb3.js';

export const ContractAddress = '0x2c728a9a83e1df1028994020fbd582f6f66e1ec6';
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