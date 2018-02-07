function showUniqueCharactor() {
    
    let usrInput = (document.getElementById("txt") as HTMLInputElement).value;
   
    let uniqueStr = getUniqueCharactor(usrInput);  

    document.getElementById("lblResult").innerText = uniqueStr;
}

function getUniqueCharactor(usrInput:string):string
{
   let uniqueStr:string="";

   for(let i=0; i<usrInput.length;i++)
    {
        if(uniqueStr.indexOf(usrInput.charAt(i))===-1)
        {
            uniqueStr+=usrInput[i];
           
        }
    }
    return uniqueStr;
}