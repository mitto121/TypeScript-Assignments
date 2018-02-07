function showUniqueCharactor() {
    let usrInput = document.getElementById("txt").value;
    let uniqueStr = getUniqueCharactor(usrInput);
    document.getElementById("lblResult").innerText = uniqueStr;
}
function getUniqueCharactor(usrInput) {
    let uniqueStr = "";
    for (let i = 0; i < usrInput.length; i++) {
        if (uniqueStr.indexOf(usrInput.charAt(i)) === -1) {
            uniqueStr += usrInput[i];
        }
    }
    return uniqueStr;
}
