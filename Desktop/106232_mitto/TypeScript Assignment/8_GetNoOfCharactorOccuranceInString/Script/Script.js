function showCharactorCount() {
    let usrInput = document.getElementById("txt").value;
    let uniqueStr = getUniqueString(usrInput);
    let result = [];
    for (let j = 0; j < uniqueStr.length; j++) {
        let count = 0;
        for (let k = 0; k < usrInput.length; k++) {
            if (uniqueStr[j] == usrInput[k]) {
                count++;
            }
        }
        result.push(uniqueStr[j] + ":" + count);
    }
    document.getElementById("lblResult").innerText = result.toString();
}
function getUniqueString(usrInput) {
    let uniqueStr = "";
    for (let i = 0; i < usrInput.length; i++) {
        if (uniqueStr.indexOf(usrInput.charAt(i)) === -1) {
            uniqueStr += usrInput[i];
        }
    }
    return uniqueStr;
}
