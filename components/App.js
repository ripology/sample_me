import React from 'react'
//import { Router, Link } from '@reach/router'
//import Home from './Home.js'

import VisibleTodoList from '../containers/VisibleTodoList'
import AddToDo from '../containers/AddToDo'
import Footer from './Footer'

const App = () => {
  return ( <div>
    <h1> To Dos </h1> 
    <AddToDo/>
   <VisibleTodoList/>
   <Footer/>
    </div>
  )
}

export default App