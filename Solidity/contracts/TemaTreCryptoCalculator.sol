pragma solidity >=0.5.0;
contract TemaTreCryptoCalculator {
    
    constructor() public {
    }

    function sayHello() public returns(string memory){
        return  ("hello world");
    }

    function sum(int128 a, int128 b) public returns (int128){
        return a + b;
    }
    
    function sub(int128 a, int128 b) public returns (int128){
        return a - b;
    }
    
    function mul(int128 a, int128 b) public returns (int128){
        return a * b;
    }
    
    function div(int128 a, int128 b) public returns (int128){
        return a / b;
    }
}
