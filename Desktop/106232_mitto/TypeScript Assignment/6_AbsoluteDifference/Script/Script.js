var getAbsoluteDifference = (num) => num > 21 ? (3 * Math.abs(21 - num)) : Math.abs(21 - num);
function showAbsoluteDifference() {
    let num = Number(document.getElementById("txtNumber").value);
    let result = getAbsoluteDifference(num);
    document.getElementById("lblResult").innerText = "Absolute difference between " + num + " and 21 is :" + result;
}
