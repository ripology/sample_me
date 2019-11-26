import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import ToDoList from '../components/ToDoList'
import visibilityFilters from '../reducers/visibility-filter'

const getVisibleTodos = (todos, filter) => {
 switch (filter) {
  case VisibilityFilters.SHOW_ALL:
   return todos
  case VisibilityFilters.SHOW_COMPLETED:
   return todos.filter(todo => todo.completed, todos)
  case VisibilityFilters.SHOW_ACTIVE:
   return todos.filter(todo => todo.completed, todos)
  default:
   return todos

 }
}

const mapStateToProps = state => {
 return {
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
  
 }

}

const mapDispatchToProps = dispatch => {
 return{
  onToDoCLick: id => {
   dispatch(toggleTodo(id))
  }
 }
}


const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(ToDoList)

export default VisibleTodoList