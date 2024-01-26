import React, { useState } from 'react'

const TodoList = () => {

    const [inputTask, setInputTask] = useState("")
    const [taskList, setTaskList] = useState([])

    const handleSaveTask = ()=>{
        const newTaskList = structuredClone(taskList);
        newTaskList.push(inputTask);
        setInputTask("");
        setTaskList(newTaskList);
    }

    const showList = taskList.map((actualTask)=>{
        return(
            <ul>
                <li>{actualTask}</li>
            </ul>
        )
    })

  return (
    <div>
        {showList}
        <input onChange={(e)=>{setInputTask(e.target.value)}} placeholder='Introduce una tarea' value={inputTask} ></input>
        <button onClick={()=>{handleSaveTask()}}>send</button>

    </div>
  )
}

export default TodoList