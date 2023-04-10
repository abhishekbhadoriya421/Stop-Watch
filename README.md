# Stop-Watch
This is a stop watch application where we can perform all the task which can be performed in any other stop watch

  ## Useage
  > Start :- clicking on start button we can start the count down 

  > Stop  :- clicking on stop button the count down will stop
  
  > Reset :- clicking on reset button the count will set to initial state 0 
 
 ## Language
  > HTML       :- Html is used to design the body of aaplication
  
  > CSS        :- CSS is used to style the application
  
  > JavaScript :- JS is used peform all the Logical Task Like start watch stop watch etc.
 
 ## Framework And Library
 >No Other Framework and library is used to design this application

 ## Java Script Functions
 I have Defined here Java Script Function To Make You Better Understand
 
 ### Variable's
 ``` js
 //time Array have counting of hours , minutes , seconds and milliseconds
//         [H, M, S, M-S]
let time = [0, 0, 0,  0 ];
let isAlreadyStart = false; //keeps track that is not StopWatch already running
let setTimeOutId;
```

**time** 
`time Array contains 4 Elements and all repersent the time value 0th index value contain's houres, 1st index contain's minutes, 2nd index contain's second's and 3rd index contains mili-second's`

**isAlreadyStart**
`isAlreadyStart variable keeps track that is not StopWatch already running if it is false mean not running otherwise running`

**setTimeOutId**
`setTimeOutId variable is used top the timer`

#### Print The Count
``` js
let PrintTheCount = ()=>{
    time[0]<10 ? hours.textContent = '0'+time[0] : hours.textContent = time[0]; 
    time[1]<10 ? minutes.textContent = '0'+time[1] : minutes.textContent = time[1];
    time[2]<10 ? seconds.textContent = '0'+time[2] : seconds.textContent = time[2];
    milliseconds.textContent = time[3];
}
```
` In PrintTheCount function we are printing the time just hours.textContent = '0'+time[0] (this code is doing nothing just is the count is less than 10 then it is appending 0 before the count )`

#### Show Message

``` js
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
```

`ShowMessage Function show all the Notification which we pass and also set color `

####  start Timer

![](images/startWatch.gif)

``` js
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
```
` we have added a click eventListener on start_button when we click on start_btn it fires and start the time first it checks that is it already running or not if isAlreadyStart variable is false then we make isAlreadyStart to true, call the startTime function and  we make cursor poniter else we make cursor to not alowed and 
call showMessage() function`

``` js
  let startTimer = ()=>{
  setTimeOutId =  setInterval(()=>{
          time[3]++;
          timeConstraints();
          PrintTheCount();
      },10);
  }
```

` In startTimer function we get the setTimeOutId and fire the setInterval function in setInterval function we increase the time[3] which points to mili-second in time array and call timeConstraints() function and PrintTheCount() function`

#### Time Constraints 
``` js
let timeConstraints = ()=>{

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

    if(time[0]==25){
        reset();
    }
}
```
` 
In timeConstaints function we have define some constraints that how should we increase the time of mili-sec, sec, min, and hours if milisecond become 100 then we increase the second by one and if second become 60 then we increase the minutes by 1 and if minutes become to 60 then the hours increased by one
`

#### Stop Time

![](images/stopWatch.gif)
``` js
stop_btn.addEventListener('click',()=>{
    if(isAlreadyStart==true){
        stopTimer();
        showMessage("Stop","red");
        start_btn.style.cursor = 'pointer';
    }else{
        stop_btn.style.cursor = 'not-allowed';
        showMessage("Already Stopped", 'red');
    }
 });
 ```
 `When we click on stop_btn button then click event fires and in that we have checked that if timer is already so then we have to stop the timer so we call stopTimer() function other wise do nothing `
 
 ``` js
let stopTimer = ()=>{
    clearInterval(setTimeOutId);
    isAlreadyStart = false;
}
 ```
 `stopTimer function just clear the Interval and set isAlreadyStart variable to false`
 
 #### reset Time
 
 ![](images/resetWatch.gif)
 ``` js
 reset_btn.addEventListener('click',()=>{
        resetTimer(); 
        showMessage("Reset","blue");
        stop_btn.style.cursor = 'pointer';
});
```
` this function fire's when we click on reset_btn in that function we are calling resetTimer() function and ater that fire the showMessage function`

``` js
let resetTimer = ()=>{
    clearInterval(setTimeOutId);
    time.fill(0);
    milliseconds.textContent = '00';
    seconds.textContent = '00';
    minutes.textContent = '00';
    hours.textContent = '00';  
    isAlreadyStart = false;
}
```
` In resetTimmer function we call clearInterval function and set all the time array Element value to 0 and also in DOM too`

these are all the java script function which i have used to create the stopWatch application
 
