function addZero(num) {
    if (num < 10) {
        return "0" + num;
    }
    else {
        return num;
    }
}

let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function updateClock() {

    let now = new Date();  // this tell us current time and date
    let date = now.getDate();
    let day = days[now.getDay()];
    document.getElementById("day").textContent = day;

    let month = months[now.getMonth()];
    let year = now.getFullYear();

    let dateString = date + " " + month + " " + year;
    document.getElementById("date").textContent = dateString;
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // am pm decide karna
    let ampm;
    if(hours < 12){
        ampm = "AM";
    }
    else{
        ampm = "PM";
    }

    // hours ko 12 hour format me badlenge
    let hours12 = hours % 12;
    if(hours12 === 0){
        hours12 = 12;
    }

    let timeString = addZero(hours12) + ":" + addZero(minutes) + ":" + addZero(seconds) +  " "+ ampm;
    document.getElementById("time").textContent = timeString;
}

setInterval(updateClock, 1000);