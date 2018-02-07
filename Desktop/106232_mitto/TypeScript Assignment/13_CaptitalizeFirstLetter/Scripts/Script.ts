function applyCapitalisation()
{
    let inputStr=(document.getElementById("txtInput") as HTMLInputElement).value;

    document.getElementById("lblOrignalInput").innerHTML=inputStr;
    if(inputStr.length>0)
    {
     let result=inputStr[0].toUpperCase()+ inputStr.substr(1,inputStr.length-1);

     document.getElementById("lblResult").innerHTML=result;
    }

}