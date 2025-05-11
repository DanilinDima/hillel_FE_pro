class CoundownTimer {
    constructor(hoursInput, minutesInput, secondsInput, timerDisplay) {
        this.hoursInput = hoursInput;
        this.minutesInput = minutesInput;
        this.secondsInput = secondsInput;
        this.timerDisplay = timerDisplay;
        this.totalSeconds = 0;
        this.timerInterval = null;

        this.secondsInput.addEventListener(
            "input",
            this.normalizeSeconds.bind(this)
        );
        this.minutesInput.addEventListener(
            "input",
            this.normalizeMinutes.bind(this)
        );
        this.hoursInput.addEventListener(
            "input",
            this.normalizeHours.bind(this)
        );
    }
    updateDisplay() {
        const hrs = Math.floor(this.totalSeconds / 3600);
        const mins = Math.floor((this.totalSeconds % 3600) / 60);
        const secs = this.totalSeconds % 60;

        this.timerDisplay.textContent = `${hrs
            .toString()
            .padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs
            .toString()
            .padStart(2, "0")}`;
    }

    getTotalSeconds() {
        const hrs = parseInt(this.hoursInput.value) || 0;
        const mins = parseInt(this.minutesInput.value) || 0;
        const secs = parseInt(this.secondsInput.value) || 0;

        this.totalSeconds = hrs * 3600 + mins * 60 + secs;
    }

    startTimer() {
        if (this.timerInterval) return;

        if (this.totalSeconds === 0) {
            this.getTotalSeconds();
            if (this.totalSeconds <= 0) {
                alert("Please enter a valid time.");
                return;
            }
        }

        this.timerInterval = setInterval(() => {
            this.totalSeconds--;
            this.updateDisplay();

            if (this.totalSeconds <= 0) {
                clearInterval(this.timerInterval);
                this.timerInterval = null;
                alert("Time's up!");
            }
        }, 1000);

        this.updateDisplay();
    }

    stopTimer() {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
    }

    resetTimer() {
        this.stopTimer();
        this.totalSeconds = 0;
        this.updateDisplay();

        this.hoursInput.value = "";
        this.minutesInput.value = "";
        this.secondsInput.value = "";
    }

    normalizeSeconds() {
        let secs = parseInt(this.secondsInput.value) || 0;
        let mins = parseInt(this.minutesInput.value) || 0;

        if (secs > 60 || secs < 0) {
            secs = 0;
        }
        if (secs === 60) {
            mins += 1;
            secs = 0;
            this.minutesInput.value = mins;
        }

        this.secondsInput.value = secs;
        this.normalizeMinutes();
    }

    normalizeMinutes() {
        let mins = parseInt(this.minutesInput.value) || 0;
        let hrs = parseInt(this.hoursInput.value) || 0;

        if (mins > 60 || mins < 0) {
            mins = 0;
        }
        if (mins === 60) {
            hrs += 1;
            mins = 0;
            this.hoursInput.value = hrs;
        }

        this.minutesInput.value = mins;
        this.normalizeHours();
    }

    normalizeHours() {
        let hrs = parseInt(this.hoursInput.value) || 0;
        if (hrs < 0) {
            hrs = 0;
        }
        this.hoursInput.value = hrs;
    }
}

const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const timerDisplay = document.getElementById("timer");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

const countdownTimer = new CoundownTimer(
    hoursInput,
    minutesInput,
    secondsInput,
    timerDisplay
);

startBtn.addEventListener("click", () => countdownTimer.startTimer());
stopBtn.addEventListener("click", () => countdownTimer.stopTimer());
resetBtn.addEventListener("click", () => countdownTimer.resetTimer());
