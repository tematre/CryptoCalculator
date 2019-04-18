
import web3 from './TematTreWeb3.js';

export const ContractAddress = '0x53eC78040df36f6758055140C4471A5269B504af';
export const Abi = [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "sayHello",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
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
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
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
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
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
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
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
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

  export default new web3.eth.Contract(Abi,ContractAddress);