function  matchWithRandom()
{
   var num = Number(prompt("Please Enter number between 1 to 10"));
   
    do
    {
      alert("Please Enter number between 1 to 10");
      num=Number(prompt("Please Enter number between 1 to 10"));
    }
    while((num<0 || num>10))

   var randomNumber=Math.round(Math.random()*10);
    document.write("Random Number : "+randomNumber+"<br>");
   if(num==randomNumber)
   {
     document.write("Good Work ,Your Entered Number : "+num)
   }
   else
   {
    document.write("Not Matched , your Entered Number is "+num)
   }
}