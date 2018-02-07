function IsPalindrome() {
    let inputString;
    inputString = document.getElementById("txt").value;
    let revString = "";
    let result = "";
    let len = inputString.length - 1;
    for (let i = len; i >= 0; i--) {
        revString += inputString[i];
    }
    if (inputString == revString) {
        result = "Given string is Palindrome";
    }
    else {
        result = "Given string is not Palindrome";
    }
    document.getElementById("lblResult").innerText = result;
}
