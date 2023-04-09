// Fetching All Necessary HTML Elements
let hours = document.querySelector('#hours .data');
let minutes = document.querySelector('#minutes .data');
let seconds = document.querySelector('#seconds .data');
let milliseconds = document.querySelector('#milliseconds .data');
let notification = document.getElementById('notification');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');


// time Array have counting of hours , minutes , seconds and milliseconds
//         [H, M, S, M-S]
let time = [0, 0, 0,  0 ];
let isAlreadyStart = false; //keeps track that is not StopWatch already running
let setTimeOutId;

// Printing Time Count in the DOM
let PrintTheCount = ()=>{
    time[0]<10 ? hours.textContent = '0'+time[0] : hours.textContent = time[0]; 
    time[1]<10 ? minutes.textContent = '0'+time[1] : minutes.textContent = time[1];
    time[2]<10 ? seconds.textContent = '0'+time[2] : seconds.textContent = time[2];
    milliseconds.textContent = time[3];
}


// timeConstraints function makes sure that it is following the times pattern. in this function it is defined. when the time should be increased or set to be 0 
let timeConstraints = ()=>{

//time[0] => hours, time[1] => minutes, time[2] => seconds and time[3] => milliSeconds

    if(time[3]==100){ 
        time[2]++;
        time[3] = 0;
    }
    if(time[2]==60){
        time[1]++;
        time[2] = 0;
    }
    if(time[1]==60){
        time[0]++;
        time[1] = 0;
    }

    if(time[0]==25){ // is can only count till 24 hours not more than it
        reset();
    }
}

// Start The Timer
let startTimer = ()=>{
setTimeOutId =  setInterval(()=>{
        time[3]++;
        timeConstraints();
        PrintTheCount();
    },10);
}

// Stop The Timer 
let stopTimer = ()=>{
    clearInterval(setTimeOutId);
    isAlreadyStart = false;
}
 
// Reset The Timer 
let resetTimer = ()=>{
    clearInterval(setTimeOutId);
    time.fill(0);
    milliseconds.textContent = '00';
    seconds.textContent = '00';
    minutes.textContent = '00';
    hours.textContent = '00';  
    isAlreadyStart = false;
}

// Notification => takes Two parameters message and color {message: what to display, color: to which color}
function showMessage(message,color){
    notification.textContent = message;
    notification.style.width = '200px';
    notification.style.color = color;
    setTimeout(() => {
        notification.style.width = '0px';
        notification.textContent = "";
        notification.style.color = 'black';
    }, 2500);
} 

// click event on start button to start the timer
start_btn.addEventListener('click',()=>{
    if(isAlreadyStart == false){
        isAlreadyStart = true;
        startTimer();
        showMessage("Start","green");
        stop_btn.style.cursor = 'pointer';
    }else{
        start_btn.style.cursor = 'not-allowed';
        showMessage("Already Running", 'red');
    }
});

// click event on stop button to stop the timer
stop_btn.addEventListener('click',()=>{
    if(isAlreadyStart==true){
        stopTimer();
        showMessage("Stop","red");
        start_btn.style.cursor = 'pointer';
    }else{
        stop_btn.style.cursor = 'not-allowed';
        
        showMessage("Already Stopped", 'red');
    }
 })

 // click event on reset button to reset the timer
 reset_btn.addEventListener('click',()=>{
        resetTimer(); 
        showMessage("Reset","blue");
        stop_btn.style.cursor = 'pointer';
})