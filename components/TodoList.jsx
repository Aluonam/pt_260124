import React, { useState } from 'react'

const TodoList = () => {

    const [inputTask, setInputTask] = useState("")
    const [taskList, setTaskList] = useState([])

    const handleSaveTask = ()=>{
        const newTaskList = structuredClone(taskList);
        newTaskList.push(inputTask)
        setInputTask("")
    }

  return (
    <div>

        <input onChange={(e)=>{setInputTask(e.target.value)}} placeholder='Introduce una tarea'></input>
        <button onClick={()=>{handleSaveTask()}}>send</button>
{taskList}

    </div>
  )
}

export default TodoList