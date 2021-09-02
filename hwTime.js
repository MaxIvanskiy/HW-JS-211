class Time {
    #hours;
    #minutes;
    #seconds;
    constructor(hours = 0, minutes = 0, seconds = 0){
        this.#hours = hours;
        this.#minutes = minutes;
        this.#seconds = seconds;
    }
    set hoursSet(h){
        if(h <= 24 && h >= 0){
            this.#hours = h;
        }else{
            console.log('invalid time data');
        }
    }
    set minutesSet(m){
        if(m <= 60 && m >= 0){
            this.#minutes = m;
        }else{
            console.log('invalid time data');
        }
    }
    set secondsSet(s){
        if(s <= 60 && s >=0){
            this.#seconds = s;
        }else{
            console.log('invalid time data');
        }
    }
    set timeSet(time){
        if((time.h <= 24 && time.h >= 0) && (time.m <= 60 && time.m >= 0) && (time.s <= 60 && time.s >= 0)){
            this.#hours = time.h;
            this.#minutes = time.m;
            this.#seconds = time.s;
        }else{
            console.log('invalid time data');
        }
    }
}

let time1 = new Time();

time1.hoursSet = 12;
time1.minutesSet = 35;
time1.secondsSet = 50;

let time2 = new Time();

time2.hoursSet = 24;
time2.minutesSet = 10;
time2.secondsSet = 60;

console.log('time1', time1);
console.log('time2', time2);

myTyme = {
    h : 15,
    m : 25,
    s : 30
};

time2.timeSet = myTyme;
console.log('time2', time2);

time1.hoursSet = 26;
console.log('time1', time1);