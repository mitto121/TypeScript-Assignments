var getAbsoluteDifference=(num:number):number=>num>21?(3*Math.abs(21-num)):Math.abs(21-num);

function showAbsoluteDifference()
{
   let num:number=Number((document.getElementById("txtNumber") as HTMLInputElement).value);

   let result:number= getAbsoluteDifference(num);

   document.getElementById("lblResult").innerText="Absolute difference between "+num+" and 21 is :"+result;

}