class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, callback) {
        if (time === undefined || time === null || callback === undefined || typeof callback !== 'function') {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        this.alarmCollection.forEach((el) => {
            if (time === el.time) {
                console.warn('Уже присутствует звонок на это же время')
            }
        });

        this.alarmCollection.push({time: time, callback: callback, canCall: true});
    }
    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((el) => time !== el.time)
    }
    getCurrentFormattedTime() {
        const now = new Date();
        return now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
    }
    start() {
        if (this.intervalId !== null) {
            return;
        }
        let object = this;
        this.intervalId = setInterval(function () {
            object.alarmCollection.forEach(function (el) {
                if (object.getCurrentFormattedTime() === el.time) {
                    el.canCall = false;
                    el.callback();
                }
            })
        }, 1000);
    }
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    resetAllCalls() {
        this.alarmCollection.forEach((el) => el.canCall = true)
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}