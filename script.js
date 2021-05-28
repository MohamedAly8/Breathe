const startingMinutes = 10;

let time = startingMinutes * 60;

const countDownEl = document.createElementById('countdown');

setInterval(updateCountdown, 1000);
 
function updateCountdown() {
    const minutes = Math.floor(time / 60);

    let seconds = time % 60;
    

    countDownEl.innerHTML = minutes+":"+seconds;
    time = time < 0 ? 0: time;
}