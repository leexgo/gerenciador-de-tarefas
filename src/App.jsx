import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid"


function App() {
  const [ tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []
);

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task)=> {
      if(task.id === taskId) { 
        return {...task, isCompleted: !task.isCompleted}
      }
      return task;
    });
    
    setTasks(newTasks);

  };

  function deleteTask(taskId){
    const newArray = tasks.filter((item) => item.id !== taskId);
    setTasks(newArray);
  };

  function addtask(title, description) {
    const newTask = { 
      id: v4(),
      title,
      description,
      isCompleted: false
    }
    
    setTasks([...tasks, newTask]);

  };
    

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de tarefas</h1>
        <AddTask addtask={addtask}/>
        <Tasks 
        tasks={tasks} 
        onTaskClick={onTaskClick} 
        deleteTask={deleteTask}
        />

      </div>
    </div>
  );
}

export default App;