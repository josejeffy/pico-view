import {state,action,render} from './indexV2.js'

let pomodoroLength = 25*60 // 25 minutes in seconds
let Message = ({message}) => `<p class='message'>${message}</p>`
let TimeLeft = ({timeLeft}) => `
  <p class='timeLeft'>
    ${Math.round(timeLeft/60-0.5,0)} m ${timeLeft%60} s
  </p>
`
let Reset =  `<button onclick='Reset()'>Reset</button>`
let Pomodoro = (state) => `
  ${Message(state)}
  ${TimeLeft(state)}
  ${Reset}
`
state('message','')
state('timeLeft',pomodoroLength)

action('Reset',()=>{
  state('message','')
  state('timeLeft',pomodoroLength)
})

action('Refresh',()=>{
  let time = state('timeLeft')
  if(time>0){
    state('timeLeft',time-1)
  }else{
    state('message','Pomodoro ends')
  }
})

setInterval(Refresh,1000)
render(['app',Pomodoro])
