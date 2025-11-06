const countdown = document.querySelector('#countdown');
const start = document.querySelector('#startButton');

let timeLeft = 10;

start.addEventListener('click', () => {
    setInterval(() => {
        if (timeLeft >= 0) {
            countdown.textContent = timeLeft;
            timeLeft--;
        } else {
            timeLeft.textContent = 'Time\'s Up';
        }
    }, 1000);
});