
function showCharactorCount() {
    
    let usrInput = (document.getElementById("txt") as HTMLInputElement).value;
   
   let uniqueStr:string=getUniqueString(usrInput);

    let result=[];
    for(let j=0;j<uniqueStr.length;j++)
    {
        let count:number=0;
        for(let k=0;k<usrInput.length;k++)
        {
            if(uniqueStr[j]==usrInput[k])
            {
                count++;
            }
        }
       result.push(uniqueStr[j]+":"+count);
    }

    document.getElementById("lblResult").innerText = result.toString();
}
function getUniqueString(usrInput:string):string
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
