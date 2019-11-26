import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

const AddToDo =({dispatch}) => {
 const [inputText, setInputText] = useState("")
}

<div>
 <form
 onSubmit = {e => {
  e.preventDefault()
  dispatch(addTodo(inputTextValue))
  setInputTextValue('')
 }}
 >
<input
 value= {inputTextValue}
 onChange = {e => setInputTextValue(e.target.value)}
 placeholder = "what todo?"
/>
<button disabled = {!inputTextValue.length > 0 ? true : false} type="submit">
 Add
</button>
 </form>
</div>


export default connect()(AddToDo)