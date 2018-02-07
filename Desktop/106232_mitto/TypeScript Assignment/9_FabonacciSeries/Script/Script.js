function Fibonacci(num) {
    if (num == 0 || num == 1) {
        return 1;
    }
    else {
        return Fibonacci(num - 1) + Fibonacci(num - 2);
    }
}
function generateFibonacci() {
    document.getElementById("lblResult").innerHTML = "Fibonacci series : <br>";
    var num = Number(document.getElementById("txtNumber").value);
    var result = document.getElementById("lblResult");
    for (let i = 0; i < num; i++) {
        let fabonacci = Fibonacci(i);
        result.innerHTML += fabonacci + "<br>";
    }
}
