interface AdvancedArithmetic{
divisor_sum:(number)=>number;
}

class MyCalulator implements AdvancedArithmetic
{
   divisor_sum(num:number):number{
     
     let sum=0;
     for(let i=1;i<=num;i++)
     {
       if(num%i==0)
       {
           sum+=i;
       }
     }
     return sum;
   }

}


function showDivisorSum()
{
let calObj:MyCalulator = new MyCalulator();
let num:number=Number((document.getElementById("txtNum") as HTMLInputElement).value);

let divisorSum:number=calObj.divisor_sum(num)
document.getElementById("lblResult").innerText="Sum of divisor number "+num+" is "+divisorSum;
}
