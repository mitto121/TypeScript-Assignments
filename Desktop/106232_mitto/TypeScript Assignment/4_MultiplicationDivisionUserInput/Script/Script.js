var multiplyTwoNumber = (num1, num2) => num1 * num2;
var divideTwoNumber = (num1, num2) => num1 / num2;
function ShowmultiplyNumbers() {
    let firstNumber = Number(document.getElementById("txtFirst").value);
    let secondNumber = Number(document.getElementById("txtSecond").value);
    let result = multiplyTwoNumber(firstNumber, secondNumber);
    document.getElementById("lblResult").innerText = result.toString();
}
function ShowDividingNumber() {
    let firstNumber = Number(document.getElementById("txtFirst").value);
    let secondNumber = Number(document.getElementById("txtSecond").value);
    let result = divideTwoNumber(firstNumber, secondNumber);
    document.getElementById("lblResult").innerText = result.toString();
}
