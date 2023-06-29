let msecs = 0;
let second = 0;
let minute = 0;


class Clock {
    constructor(template , id) {
        this.template = template;
        this.display = document.getElementById(id);
    }
    StopWatch() {


            msecs++;
     
            if (msecs == 10) {
                second++;
                msecs = 0;
            }
     
            if (second == 60) {
                minute++;
                second = 0;
            }
     
            if (minute == 60) {
                hour++;
                minute = 0;
                second = 0;
            }

            let countString = msecs ;
            let secString = second;
            let minString = minute;
     
            if (minute < 10) {
                minString = "0" + minute;
            }
     
            if (second < 10) {
                secString = "0" + second;
            }
     
            // if (msecs < 10) {
            //     countString = "0" + msecs;
            // }
            
            let output = this.template
                .replace('m', minString)
                .replace('s', secString)
                .replace('ms', countString)

            // console.log( output );
            this.display.innerHTML = output;
           

        
    }


    start() {

            
            this.StopWatch();
            this.timer = setInterval( () => {
                this.StopWatch();
            }, 100 )
        
    }

    stop() {
        clearInterval(this.timer);
    }
    reset(){
        this.stop();
        minute = 0;
        second = 0;
        msecs = 0;
        this.display.innerHTML = '00:00.0';
    }
}
let stopwatch = new Clock('m:s.ms',"clock-1")

class Clock_2 extends Clock{
    
}
let stopwatch2 = new Clock_2('m:s.ms',"clock-2")



// let clockArr = [
//     newClock1 = new Clock('m:s:ms'),
//     newClock2 = new Clock('m:s:ms'),
//     newClock3 = new Clock('m:s:ms'),
//     newClock4 = new Clock('m:s:ms'),
//     newClock5 = new Clock('m:s:ms')
// ]


// let clock_div = document.getElementById('main');
// for (watch in clockArr){
//     let item_div = document.createElement('div');
//     let clock_num = clockArr.indexOf();
//     // Add class cho element
//     item_div.classList.add('container');

//     // Thay đổi innerHtml 
//     item_div.innerHTML = 
//     `<div id="time">
//         <span>${clock_num}.</span>
//         <span class="digit" id="${watch}">
//             00:00:00</span>
//     </div>
//     <div id="buttons">
//         <button class="btn" id="start">
//             Start</button>
//         <button class="btn" id="stop">
//             Stop</button>
//         <button class="btn" id="reset">
//             Reset</button>
//     </div>`

//     // Thêm element vào list
//     clock_div.appendChild(item_div);
// }