const calculator = document.forms["calculator"];

calculator.addEventListener("submit", (event) => {
    event.preventDefault();

    let result;
    const firstNumber = parseFloat(document.getElementsByName("firstNumber")[0].value);
    const secondNumber = parseFloat(document.getElementsByName("secondNumber")[0].value);
    const operation = event.submitter.value;

    switch (operation) {
        case "Addition (+)":
            result = firstNumber + secondNumber;
            break;
        case "Subtraction (-)":
            result = firstNumber - secondNumber;
            break;
        case "Multiplication (*)":
            result = firstNumber * secondNumber;
            break;
        case "Division (/)":
            result = firstNumber / secondNumber;
            break;
        default:
            result = "Invalid operation";
    }
    document.getElementById("result").innerText = "Result: " + result;
});