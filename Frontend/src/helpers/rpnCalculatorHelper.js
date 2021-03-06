
export class RpnCalculatorHelper
{
    isNumeric(that) {
        return !isNaN(parseFloat(that)) && isFinite(that);
    }

    cleanArray(that){
        for(var i = 0; i < that.length; i++) {
            if(that[i] === "") {
                that.splice(i, 1);
            }
        }
        return that;
    }

    async infixToPostfix(infix){
        var outputQueue = "";
        var operatorStack = [];
        var operators = {
            "/": {
                precedence: 3,
                associativity: "Left"
            },
            "*": {
                precedence: 3,
                associativity: "Left"
            },
            "+": {
                precedence: 2,
                associativity: "Left"
            },
            "-": {
                precedence: 2,
                associativity: "Left"
            }
        }
        infix = infix.replace(/\s+/g, "");
        infix = this.cleanArray(infix.split(/([\+\-\*\/\^\(\)])/));
        for(var i = 0; i < infix.length; i++) {
            var token = infix[i];
            if(this.isNumeric(token)) {
                outputQueue += token + " ";
            } else if("^*/+-".indexOf(token) !== -1) {
                var o1 = token;
                var o2 = operatorStack[operatorStack.length - 1];
                while("^*/+-".indexOf(o2) !== -1 && ((operators[o1].associativity === "Left" && operators[o1].precedence <= operators[o2].precedence) || (operators[o1].associativity === "Right" && operators[o1].precedence < operators[o2].precedence))) {
                    outputQueue += operatorStack.pop() + " ";
                    o2 = operatorStack[operatorStack.length - 1];
                }
                operatorStack.push(o1);
            } else if(token === "(") {
                operatorStack.push(token);
            } else if(token === ")") {
                if(operatorStack.length < 1)
                {
                    throw "Error";
                }
                while(operatorStack[operatorStack.length - 1] !== "(") {
                    outputQueue += operatorStack.pop() + " ";
                }
                operatorStack.pop();
            }
        }
        while(operatorStack.length > 0) {
            outputQueue += operatorStack.pop() + " ";
        }
        return outputQueue;
    }
    
    async solvePostfix(postfix, operations) {
        var resultStack = [];
        postfix = postfix.split(" ");
        for(var i = 0; i < postfix.length; i++) {
            if(postfix[i].length == 0)
            {
                continue;
            }
            
            if(this.isNumeric(postfix[i])) {
                resultStack.push(parseFloat(postfix[i]));
            } 
            else {
                
                var b = resultStack.pop();
                var a = resultStack.pop();
                if(postfix[i] === "+") {
                    var operationResult = await operations.sum(a, b);
                    resultStack.push(operationResult);
                } else if(postfix[i] === "-") {
                    var operationResult = await operations.sub(a, b);
                    resultStack.push(operationResult);
                } else if(postfix[i] === "*") {
                    var operationResult = await operations.mul(a, b)
                    resultStack.push(operationResult);
                } else if(postfix[i] === "/") {
                    var operationResult = await operations.div(a, b)
                    resultStack.push(operationResult);
                }
            }
        }
        if(resultStack.length > 1) {
            return "error";
        } else {
            return resultStack.pop();
        }
    }
}
