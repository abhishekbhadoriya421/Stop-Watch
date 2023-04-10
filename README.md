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
`setTimeOutId variable is used top the timmer`
