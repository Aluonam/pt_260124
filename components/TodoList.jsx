import React, { useState } from 'react'

const TodoList = () => {

    const [inputTask, setInputTask] = useState("")

    const handleSaveTask = ()=>{
        const newTaskList = structuredClone(inputTask);
        console.log(newTaskList)
    }

  return (
    <div>

        <input onChange={(e)=>{setInputTask(e.target.value)}} placeholder='Introduce una tarea'></input>
        <button onClick={()=>{handleSaveTask()}}>send</button>

    </div>
  )
}

export default TodoList