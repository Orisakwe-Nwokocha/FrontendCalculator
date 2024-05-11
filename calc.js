document.getElementById("calculator").addEventListener("submit", function (event) {
    event.preventDefault();
    const num1 = parseFloat(document.getElementsByName("num1")[0].value);
    const num2 = parseFloat(document.getElementsByName("num2")[0].value);
    const operation = event.submitter.value;
    let result;
    switch (operation) {
        case "Addition":
            result = num1 + num2;
            break;
        case "Subtraction":
            result = num1 - num2;
            break;
        case "Multiplication":
            result = num1 * num2;
            break;
        case "Division":
            result = num1 / num2;
            break;
        default:
            result = "Invalid operation";
    }
    document.getElementById("result").innerText = "Result: " + result;
});