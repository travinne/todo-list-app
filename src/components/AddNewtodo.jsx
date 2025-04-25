import React, {useState} from 'react'

function AddNewtodo({onAddtask}) {
  const [newTask,setNewTask] = useState({
    details: '',
  }
  )

  
  const handleChange = (e) =>{
    const {name, value} = e.target
      setNewTask(prev =>({ ...prev, [name]: value}))
  }

const handleSubmit = (e) => {
    e.preventDefault ();
    onAddtask({...newTask, completed: false});
    setNewTask({
     details: '',
    })
     console.log(newTask)}


    return (
      <div className='todo'>
  
          <h1>TO-DO-LIST</h1>
  
           <div className='input'> 
              <form onSubmit={handleSubmit}>
                    <input 
                    type="text"
                    name='details'
                    placeholder='enter details...'
                    value={newTask.details}
                    onChange={handleChange} 
                    required/>

                 <button type='submit' className='submit'>Add</button>
              </form>
      </div>
      </div>
    )
}

export default AddNewtodo