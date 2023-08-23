const today = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dayIndex = today.getDay();
const monthIndex = today.getMonth();
const dayAndDate = `${daysOfWeek[dayIndex]}, ${months[monthIndex]} ${today.getDate()}, ${today.getFullYear()}`;
const todayInfoElement = document.getElementById('todayInfo');
todayInfoElement.textContent = dayAndDate;

function tick() {
    let sound = new Audio('sound.mp3');
    sound.play();
}
setInterval(() => {
    tick();
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

   
}, 1000);