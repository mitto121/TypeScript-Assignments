class Airthmetic{
	add = function (number1: number, number2:number) : number{
		return (number1 + number2);
	}
}

class Adder extends Airthmetic{
	constructor(){super();}
}

function CalculateValues(){
	let num1 =Number((document.getElementById("txtFirstNum") as HTMLInputElement).value);
	let num2 =Number((document.getElementById("txtSecondNum") as HTMLInputElement).value);
	document.getElementById("divResult").innerHTML = "";
	let addValue = new Adder();
	document.getElementById("divResult").innerHTML = "Sum of "+num1+" and "+num2+" = "+ addValue.add(num1, num2).toString();
}