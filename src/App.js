import React, { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
function App() {
  const [tasks, setTasks] = useState([
	{ id:"1",title:"Learn JS ", status:1},
	{ id:"2",title:"Code a todo list", status:0},
  ]);
  const [showIncomplete, setShowIncomplete] = useState(true);
  const [newTask, setNewTask] = useState("");
  
  const handleSubmit=(e)=>{
	e.preventDefault();
	if(newTask){
		const task={
			id: Date.now(),
			title :newTask,
			status :0
		}
		setTasks([...tasks,task]);
		setNewTask("");
	}
  }
  
  const handleInputChange=(e)=>{
	setNewTask(e.target.value);
  }
  const setTaskStatus =(taskId, status)=>{
	setTasks(tasks.map((task)=>{
		if(task.id===taskId){
			return{...task,status: status?1:0}
		}
		return task;
		}
	));
  };

  const removeTask =(taskId)=>{
	setTasks(tasks.filter((task)=>task.id!==taskId
	));
  };

  return (
    <div className="container">
		
		<Header title="Todo list" subTitle="My list" />
		<TaskList tasks={tasks} showIncomplete={showIncomplete} setTaskStatus={setTaskStatus} removeTask={removeTask} setShowIncomplete={setShowIncomplete} /> 
		<AddTaskForm handleSubmit={handleSubmit} newTask={newTask} handleInputChange={handleInputChange}/>
	  </div>
  );
}

export default App;
