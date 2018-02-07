function showCurrentDateTime():void
{    
 let WeekdayNames: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let date=new Date();
let day:string=WeekdayNames[date.getDay()]


let hours=date.getHours() - ((date.getHours() >= 12) && !(date.getHours()==12) ? 12 : 0);
let minutes=date.getMinutes();
let seconds=date.getSeconds();


let currentTime:string=hours+((hours >= 12) ? ' PM' : ' AM')+':'+minutes+':'+seconds;

 document.getElementById("lblDay").innerText=day;
 document.getElementById("lblTime").innerText=currentTime;
}

function showDateTime():void
{
    setInterval(showCurrentDateTime,1000);
}