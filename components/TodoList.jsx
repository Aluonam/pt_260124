import React, { useState } from 'react'

const TodoList = () => {

    const [inputTask, setInputTask] = useState("")

  return (
    <div>

        <input onChange={(e)=>{setInputTask(e.target.value)}} placeholder='Introduce una tarea'></input>
        <button onClick={()=>{}}>send</button>

    </div>
  )
}

export default TodoList