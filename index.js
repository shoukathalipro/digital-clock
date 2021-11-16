window.onload = function clockTime () {
    let newDate = new Date();
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();
    let second = newDate.getSeconds();

    const hourTime = document.getElementById("time-hour");
    const minuteTime = document.getElementById("time-minute");
    const secondTime = document.getElementById("time-second");
    const ampmTime = document.getElementById("time-am-pm");

    if (hour > 12) {
        ampmTime.innerText = "PM";
    }
    else {
        ampmTime.innerText = "AM";
    }

    if (hour > 12) {
        hour = hour - 12;
    }

    if (hour < 10) {
        hour = "0" + hour;
    }

    if (hour == 0) {
        hour = 12;
    }

    if (minute < 10) {
        minute = "0" + minute;
    }

    if (second < 10) {
        second = "0" + second;
    }

    hourTime.innerText = hour;
    minuteTime.innerText = minute;
    secondTime.innerText = second;

    setTimeout(clockTime, 1000);
}

function dynamicTimeSet () {
    let newDate = new Date();
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();

    const dropDown1 = document.getElementById("wake-up-time");
    const dropDown2 = document.getElementById("lunch-time");
    const dropDown3 = document.getElementById("nap-time");

    const value1 = dropDown1.options[dropDown1.selectedIndex].value;
    const value2 = dropDown2.options[dropDown2.selectedIndex].value;
    const value3 = dropDown3.options[dropDown3.selectedIndex].value;

    const text1 = document.getElementById("dynamic-text1");
    const text2 = document.getElementById("dynamic-text2");
    const text3 = document.getElementById("dynamic-text3");
    const image = document.getElementById("dynamic-image");

    if (hour >= 6 || hour < 12) {
        text1.innerText = "GOOD MORNING !!"
    }

    if ((hour >= 12 && minute >= 1) || hour <= 17) {
        text1.innerText = "GOOD AFTERNOON !!"
    }

    if ((hour >= 17 && minute >= 1) || (hour <= 5 && minute <= 59)) {
        text1.innerText = "GOOD EVENING !!"
    }

    if (value3 >= hour || value3 <= value1) {
        text2.innerText = "Time to sleep!";
        text3.innerText = "GOOD NIGHT !!";
        image.setAttribute("src", "images/good-night.png");
    }

    if (value2 >= hour || value2 <= value3) {
        text2.innerText = "Party time!";
        text3.innerText = "LET'S HAVE SOME LUNCH !!";
        image.setAttribute("src", "images/having-lunch.png");
    }

    if (value1 >= hour || value1 <= value2) {
        text2.innerText = "Time to wake up!";
        text3.innerText = "WAKE UP !!";
        image.setAttribute("src", "images/wake-up.png");
    }
}
dynamicTimeSet()