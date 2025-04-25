import React from 'react'


function CountTask({todo}) {

  const total = todo.length
  const completed = todo.filter(todo => todo.completed).length
  const remaining = total - completed

  return (
    <div className="task">
    <p>
      ✅ {completed} done / ⌚ {remaining} left
    </p>
  </div>
  )
}

export default CountTask