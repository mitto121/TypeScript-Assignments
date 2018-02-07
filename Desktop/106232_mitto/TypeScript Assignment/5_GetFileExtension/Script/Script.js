function getFileExtension() {
    var fileNameWithExtension = document.getElementById("txtFileName").value;
    var validExtension = /^[a-z]{3,}\.(?:pdf|doc|txt|html)$/i.test(fileNameWithExtension);
    if (validExtension) {
        var ind = fileNameWithExtension.indexOf('.') + 1;
        var extName = fileNameWithExtension.substring(ind);
        document.getElementById("lblResult").innerText = extName;
    }
    else {
        alert("Please Enter valid File Name");
    }
}
