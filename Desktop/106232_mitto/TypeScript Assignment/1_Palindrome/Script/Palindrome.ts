

function IsPalindrome():void
{
    let inputString:string;
    inputString=(document.getElementById("txt") as HTMLInputElement).value;
    let revString:string="";
    let result:string="";
    let len=inputString.length-1;
    for(let i=len; i>=0;i--)
    {
       revString+=inputString[i];
    }  
    if(inputString==revString)
    {
      result="Given string is Palindrome";
    }  
    else
    {
        result="Given string is not Palindrome";
    }
    document.getElementById("lblResult").innerText=result;
 
   
}