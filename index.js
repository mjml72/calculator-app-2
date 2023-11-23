class Calculator {

    constructor(screenNumber1, screenNumber2) {
        this.screenNumber1 = screenNumber1;
        this.screenNumber2 = screenNumber2;
        this.operator = "";
        this.number1 = 0;
        this.number2 = 0;
    }

    calculate() {
        this.number1 = parseFloat(this.number1);
        this.number2 = parseFloat(this.number2);

        switch (this.operator) {
            case "+":
                this.number1 = this.number1 + this.number2;
                break;
            case "-":
                this.number1 = this.number1 - this.number2;
                break;
            case "*":
                this.number1 = this.number1 * this.number2;
                break;
            case "/":
                this.number1 = this.number1 / this.number2;
                break;
            default:
        }

       
        this.operator = "";
        this.number2 = 0;
        this.updateUI();
    }

    appendNumber(number) {
        if (number === "." && this.number2.toString().includes(".")) { return; }
        this.number2 = this.number2 === 0 && number !== "." ? number :
            this.number2.toString() + number;
        this.updateUI();
    }

    updateUI() {
        this.screenNumber1.innerText = this.number1.toString() + this.operator;
        this.screenNumber2.innerText = this.number2.toString();
    }

    clear() {
        this.number1 = 0;
        this.number2 = 0;
        this.operator = "";
        this.updateUI();
    }

    getOperator(operator) {
        if (this.operator) {
            this.calculate();
        }
        this.operator = operator;
        this.number1 = this.number2 === 0 ? this.number1 : this.number2;
        this.number2 = 0;
        this.updateUI();

    }

    delete() {
        if (this.number2 === 0) { return; }
        this.number2 = this.number2.toString().slice(0, -1);
        if (this.number2.toString().length === 0) { this.number2 = 0; }
        this.updateUI();
    }
}


const screenNumber1 = document.getElementById("screen-number1");
const screenNumber2 = document.getElementById("screen-number2");
const numbers = document.getElementsByClassName("number");
const clearButton = document.getElementById("c");
const mathOperations = document.getElementsByClassName("operator");
const equalButton = document.getElementById("equal");
const deleteButton = document.getElementById("delete");

const calculator = new Calculator(screenNumber1, screenNumber2);

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", () => {
        calculator.appendNumber(numbers[i].innerText);
    });

}

for (let i = 0; i < mathOperations.length; i++) {
    mathOperations[i].addEventListener("click", () => {
        calculator.getOperator(mathOperations[i].innerText);
    });
}

equalButton.addEventListener("click", function () {
    calculator.calculate();
})

deleteButton.addEventListener("click", () => {
    calculator.delete();
});

clearButton.addEventListener("click", () => {
    calculator.clear();
})

