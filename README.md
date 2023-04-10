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

### start time function

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

