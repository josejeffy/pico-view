import { state, action, render, $ } from './j.js'

let TodoItem = (state) => state
  && state.todos.map((todo, index) =>
    `<li 
        key='${index}' 
        onclick='Remove(${index})'
      >${todo}</li>`
  ).join("")
let newItem = () => `
  <input id="newItem" onchange='Add()'>
  <button onclick="Add()">Add</button>  
`

state('todos', [])

action('Add', () => {
  let addedItem = $('#newItem')[0].value
  let prevState = state('todos')
  prevState[prevState.length] = addedItem
  state('todos', prevState)
  $('#newItem')[0].focus()
})

action('Remove', (index) => {
  let prevState = state('todos')
  delete prevState[index]
  state('todos', prevState)
})

render([
  ['app', [newItem, TodoItem]]
])
