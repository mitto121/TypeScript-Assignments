function showCurrentDateTime() {
    let WeekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = new Date();
    let day = WeekdayNames[date.getDay()];
    let hours = date.getHours() - ((date.getHours() >= 12) && !(date.getHours() == 12) ? 12 : 0);
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let currentTime = hours + ((hours >= 12) ? ' PM' : ' AM') + ':' + minutes + ':' + seconds;
    document.getElementById("lblDay").innerText = day;
    document.getElementById("lblTime").innerText = currentTime;
}
function showDateTime() {
    setInterval(showCurrentDateTime, 1000);
}
