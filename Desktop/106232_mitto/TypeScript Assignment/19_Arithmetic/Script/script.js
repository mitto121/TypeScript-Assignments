class Airthmetic {
    constructor() {
        this.add = function (number1, number2) {
            return (number1 + number2);
        };
    }
}
class Adder extends Airthmetic {
    constructor() { super(); }
}
function CalculateValues() {
    let num1 = Number(document.getElementById("txtFirstNum").value);
    let num2 = Number(document.getElementById("txtSecondNum").value);
    document.getElementById("divResult").innerHTML = "";
    let addValue = new Adder();
    document.getElementById("divResult").innerHTML = "Sum of " + num1 + " and " + num2 + " = " + addValue.add(num1, num2).toString();
}
