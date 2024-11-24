const timeElement = document.getElementById('time');
const timezoneSelect = document.getElementById('timezone');
const alarmButton = document.getElementById('alarm');
const stopwatchButton = document.getElementById('stopwatch');
const alarmTimeElement = document.getElementById('alarm-time');
const stopwatchTimeElement = document.getElementById('stopwatch-time');

let intervalId;
let alarmTime;
let stopwatchTime = 0;

function updateTime() {
    const now = new Date().toLocaleString('zh-TW', { timeZone: timezoneSelect.value });
    timeElement.textContent = now.slice(11, 16); // 只顯示時分秒
}

function startAlarm() {
    const hours = prompt('請輸入鬧鐘小時：');
    const minutes = prompt('請輸入鬧鐘分鐘：');
    alarmTime = new Date();
    alarmTime.setHours(hours);
    alarmTime.setMinutes(minutes);
    alarmTime.setSeconds(0);

    intervalId = setInterval(() => {
        const now = new Date();
        if (now >= alarmTime) {
            clearInterval(intervalId);
            alert('鬧鐘響了！');
        }
    }, 1000);
}

function startStopwatch() {
    intervalId = setInterval(() => {
        stopwatchTime++;
        const hours = Math.floor(stopwatchTime / 3600);
        const minutes = Math.floor((stopwatchTime % 3600) / 60);
        const seconds = stopwatchTime % 60;
        stopwatchTimeElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

timezoneSelect.addEventListener('change', updateTime);
alarmButton.addEventListener('click', startAlarm);
stopwatchButton.addEventListener('click', startStopwatch);

updateTime();
