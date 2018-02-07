function printEvenOddNumber() {
    document.write("Show Even and Odd number from 20 to 35 is <br><br>");
    for (let i = 20; i <= 35; i++) {
        if (i % 2 == 0) {
            document.write(i + " is even <br>");
        }
        else {
            document.write(i + " is odd <br>");
        }
    }
}
