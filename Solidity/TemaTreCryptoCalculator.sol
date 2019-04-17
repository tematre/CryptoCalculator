pragma solidity >=0.5.1;
contract TemaTreCryptoCalculator {
    
    constructor() public {
    }

    function sum(fixed a, fixed b) public returns (fixed){
        
        return a + b;
    }
    
    function sub(fixed a, fixed b) public returns (fixed){
        return a - b;
    }
    
    function mul(fixed a, fixed b) public returns (fixed){
        return a * b;
    }
    
    function div(fixed a, fixed b) public returns (fixed){
        return a / b;
    }
}
