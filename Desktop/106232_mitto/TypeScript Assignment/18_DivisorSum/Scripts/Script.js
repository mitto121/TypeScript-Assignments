class MyCalulator {
    divisor_sum(num) {
        let sum = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i == 0) {
                sum += i;
            }
        }
        return sum;
    }
}
function showDivisorSum() {
    let calObj = new MyCalulator();
    let num = Number(document.getElementById("txtNum").value);
    let divisorSum = calObj.divisor_sum(num);
    document.getElementById("lblResult").innerText = "Sum of divisor number " + num + " is " + divisorSum;
}
