class Calculator {

    constructor(firstNumber, secondNumber, operation){
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.operation = operation;
    }
    
    calculate(){

        let first = parseFloat(this.firstNumber);
        let second = parseFloat(this.secondNumber);
        let result = 0;

        switch(this.operation){
            case "+":
                result =  first + second;
                break;
            case "-":
                result =  first - second;
                break;
            case "*":
                result =  first * second;
                break;
            case "/":
                result =  first / second;
                break;
            default:
        }
        
        return result;

    }

}

const calculator = new Calculator("", "", "");

const screenNumber = document.getElementById("screen-number");
const numbers = document.getElementsByClassName("number");
const c = document.getElementById("c");
const mathOperations = document.getElementsByClassName("operation");
const equal = document.getElementById("equal");

let screen = "", point = false;
for (let i = 0; i < numbers.length; i++) {

    numbers[i].addEventListener("click", function(){
        if(numbers[i].textContent === "." && point === false){
            point = true;
        }else if(numbers[i].textContent === "." && point === true){
            return;
        }
        screen += numbers[i].textContent;
        screenNumber.innerText = screen;
        
    })
    
}

for (let i = 0; i < mathOperations.length; i++) {

        mathOperations[i].addEventListener("click", function(){
            calculator.firstNumber = screenNumber.textContent;
            calculator.operation = mathOperations[i].textContent;
            calculator.secondNumber = "";
            point = false;
            screen = ""; 
        })
}

equal.addEventListener("click", function(){

    if(calculator.secondNumber === ""){
        calculator.secondNumber = screenNumber.textContent;
    }

    getResult();

})

function getResult() {

    let result = calculator.calculate();
    screenNumber.innerText = result;
    calculator.firstNumber = result;
    point = false;
}


c.addEventListener("click", function(){

    screenNumber.innerText = "0";
    calculator.firstNumber = "";
    calculator.secondNumber = "";
    calculator.operation = "";
    calculator.result = 0;
    point = false;
    screen = "";

})

