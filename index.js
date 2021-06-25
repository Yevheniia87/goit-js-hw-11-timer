"use strict"

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
    };
    start() {
        const startTime = this.targetDate.getTime();
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = startTime - currentTime;
            const { days, hours, mins, secs } = this.getTimeComponents(deltaTime);
            return this.updateClock({ days, hours, mins, secs })
        }, 1000);
    }
    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return { days, hours, mins, secs };
    };
    pad(value) {
        return String(value).padStart(2, '0');
    };
   updateClock({ days, hours, mins, secs }) {
       const clockFace = document.getElementById('timer-1');
       const isDays = document.querySelector('[data-value="days"]');
       const isHours = document.querySelector('[data-value="hours"]');
       const isMinutes = document.querySelector('[data-value="mins"]');
       const isSeconds = document.querySelector('[data-value="secs"]');
       isDays.innerHTML = `${days}`;
       isHours.innerHTML = `${hours}`;
       isMinutes.innerHTML = `${mins}`;
       isSeconds.innerHTML = `${secs}`;
       if (t.total <= 0) {
      clearInterval(timeinterval);
       };
    };
    
    
};
const time = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Dec 31, 2022'),
}).start();

// function getTimeRemaining(endtime) {
//   var t = Date.parse(endtime) - Date.parse(new Date());
//   var seconds = Math.floor((t / 1000) % 60);
//   var minutes = Math.floor((t / 1000 / 60) % 60);
//   var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//   var days = Math.floor(t / (1000 * 60 * 60 * 24));
//   return {
//     'total': t,
//     'days': days,
//     'hours': hours,
//     'minutes': minutes,
//     'seconds': seconds
//   };
// }
 
// function initializeClock(id, endtime) {
//   var clock = document.getElementById('timer-1');
//   var daysSpan = clock.querySelector('[data-value="days"]');
//   var hoursSpan = clock.querySelector('[data-value="hours"]');
//   var minutesSpan = clock.querySelector('[data-value="mins"]');
//   var secondsSpan = clock.querySelector('[data-value="secs"]');
 
//   function updateClock() {
//     var t = getTimeRemaining(endtime);
 
//     daysSpan.innerHTML = t.days;
//     hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//     minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//     secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
 
//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//     }
//   }
 
//   updateClock();
//   var timeinterval = setInterval(updateClock, 1000);
// }
 
// var deadline = new Date(Date.parse(new Date()) + 11 * 24 * 60 * 60 * 1000); // for endless timer
// initializeClock('countdown', deadline);
