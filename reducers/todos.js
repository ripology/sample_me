import {
 ADD_TODO,
 TOGGLE_TODO,
} from '../actions'

function todos(state = [{text: "Feed the Cat", completed: false}], action) {
 switch (action.type) {
  
  case ADD_TODO:
   return append({
    text: action.payload.text,
    complete: false
   }, state)
 
 // return[...state, {text: action.payload.text, complete:false}]

 case TOGGLE_TODO:
  return state.todos.map((todo, index) => {
   if (index === payload) {
    return {
     ...todo,
     completed: !todo.completed
    }
   }
   return todo
  })


 default:
 return state
}


