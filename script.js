var [milseconds, seconds, minutes, hours] = [0, 0, 0, 0];
var lapCounter = 1; 
var display = document.querySelector('.wrapper p');
var stopwatch = null;
var isRunning = false; 

function toggleStartStop() {
    var startButton = document.getElementById('start');

    if (isRunning) {
        stopTimer();
    } else {
        startTimer();
    }

    startButton.innerHTML = isRunning ? 'START' : 'STOP';
    isRunning = !isRunning;
}

function startTimer() {
    if (stopwatch !== null) {
        clearInterval(stopwatch);
    }
    stopwatch = setInterval(startButtonFunc, 10);
}

function stopTimer() {
    clearInterval(stopwatch);
}

function startButtonFunc() {
    milseconds += 1;
    if (milseconds == 100) {
        milseconds = 0;
        seconds++;

        if (seconds == 60) {
            seconds = 0;
            minutes++;

            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    var h = hours < 10 ? '0' + hours : hours;
    var m = minutes < 10 ? '0' + minutes : minutes;
    var s = seconds < 10 ? '0' + seconds : seconds;
    var ms = milseconds < 10 ? '0' + milseconds : milseconds;

    display.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}

function recordLap() {
    const lapTime = display.innerHTML;
    const lapsContainer = document.getElementById('laps-container');
    const lapEntry = document.createElement('div');
    lapEntry.textContent = `Lap ${lapCounter}: ${lapTime}`;
    lapsContainer.appendChild(lapEntry);
    lapCounter++;
}

function resetTimer() {
    [seconds, minutes, hours] = [0, 0, 0];
    lapCounter = 1;
    document.getElementById('laps-container').innerHTML = '';
    display.innerHTML = '00 : 00 : 00 : 00';
    stopTimer();
    document.getElementById('start').innerHTML = 'START';
    isRunning = false;
}
