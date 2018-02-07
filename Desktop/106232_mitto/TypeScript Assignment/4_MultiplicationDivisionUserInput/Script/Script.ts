var multiplyTwoNumber=(num1:number,num2:number):number=>num1*num2;

var divideTwoNumber=(num1:number,num2:number):number=>num1/num2;

function ShowmultiplyNumbers (){

     let firstNumber:number =Number((document.getElementById("txtFirst") as HTMLInputElement).value);
     
     let secondNumber:number=Number((document.getElementById("txtSecond") as HTMLInputElement).value);

    let result= multiplyTwoNumber(firstNumber,secondNumber);

    document.getElementById("lblResult").innerText=result.toString();
}

function ShowDividingNumber(){
    
     let firstNumber:number =Number((document.getElementById("txtFirst") as HTMLInputElement).value);
     
     let secondNumber:number=Number((document.getElementById("txtSecond") as HTMLInputElement).value);
   

    let result= divideTwoNumber(firstNumber,secondNumber);

    document.getElementById("lblResult").innerText=result.toString();
}