import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const startBtn = document.querySelector('[data-start]');
const datetimePicker = document.querySelector('#datetime-picker');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        let selectedDates = selectedDates[0]
        if (selectedDates <= new Date()) {
            window.alert("Va rog alegeti o data din viitor")
            startBtn.ariaDisabled = true
        } else {
            startBtn = false
        }
    }
}
let countdownInterval = null
let selectedDate = null
startBtn.addEventListener('click', () => {
    startBtn.disabled = true
    countdownInterval = setInterval(() => {
        const now = new Date()
        const timeLeft = selectedDate - now
        
        if (timeLeft <= 0) {
            clearInterval(countdownInterval)
            return
        }
    
        const { days, hours, minutes, seconds } = convertMs(timeLeft)
        daysEl.textContent = addLeadingZero(days)
        hoursEl.textContent = addLeadingZero(hours)
        minutesEl.textContent = addLeadingZero(minutes)
        secondsEl.textContent = addLeadingZero(seconds)
    }, 1000)
})

function convertMs(ms) {
    const seconds = 1000
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24

    const days = Math.floor(ms / day)
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}