import React, { useState } from 'react'
import AddNewtodo from './components/AddNewtodo'
import Todolist from './components/Todolist'
import CountTask from './components/CountTask'


function App() {

  const data = [
    { details:'pick up my shirt from the tailor',completed: 'false'},
    { details:'take my phone to the repair man',completed: 'false'},
    { details:'get my assignments finalized',completed: 'false'},
    { details:'take the puppy to the vet',completed: 'false'},
    { details:'clean up my room',completed: 'false'},
    { details:'clean the dishes',completed: 'false'},
    { details:'iron out my shirts',completed: 'false'},
    { details:'repair my broken table',completed: 'false'},
    {details:'take back the library books',completed: 'false'},
    { details:'walk the dog',completed: 'false'},
    { details:'go to the market',completed: 'false'},
  ]

  const headers = ['details',]

  const [todo, setTodo] = useState(data)

  const AddNewTodo = (task) => {
    setTodo([...todo,task]);
  }

  const Complete = (index) => {
    const updated = [...todo]
    updated[index].completed = !updated[index].completed
    setTodo(updated)
  }

  return (
    <div>
      <AddNewtodo  onAddtask ={ AddNewTodo}/>
      <Todolist headers={headers} data={todo} tick={Complete}/>
      <CountTask todo={todo}/>
    </div>
  )
}

export default App