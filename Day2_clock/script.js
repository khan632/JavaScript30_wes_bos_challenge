const hourHand = document.querySelector('.hour-hand');
const minsHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.second-hand');

function getTime() {
    const now = new Date();

    const sec = now.getSeconds();
    const secDeg = ((sec / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secDeg}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((sec/60)*6) + 90;
     minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getMinutes();
    const hourDeg = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(getTime, 1000)