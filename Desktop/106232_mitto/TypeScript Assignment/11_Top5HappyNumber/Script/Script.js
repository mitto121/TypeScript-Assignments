function IsHappyNumber(num) {
    let sum;
    try {
        while (sum != 1 && sum != 4) {
            sum = 0;
            while (num > 0) {
                let d = num % 10;
                sum += d * d;
                num = Math.floor(num / 10);
            }
            num = sum;
        }
    }
    catch (xnr) {
        console.log(xnr);
    }
    return sum == 1;
}
var count = 0;
document.write("Top 5 Happy Number are :<br>");
for (let i = 1; i < 100; i++) {
    if (IsHappyNumber(i)) {
        document.write(i.toString() + "<br>");
        count++;
        if (count == 5)
            break;
    }
}
