const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function setDate() {
    const now = new Date();
    const secondDegree = (now.getSeconds() * 6) + 90; //Adding 90 to augment the initial 90deg in the css
    const minuteDegree = (now.getMinutes() * 6) + 90;
    const hourDegree = (now.getHours()/12 * 360) + 90;

    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);