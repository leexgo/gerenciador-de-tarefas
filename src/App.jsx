import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid"
import Title from "./components/Title"


function App() {
  const [ tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []
);

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks]);

  // useEffect(() => {

  //   const fetchTasks = async () => {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');

  //    const data = await response.json();
  //    setTasks(data);
  //   }
  //   fetchTasks();
  // },[]);

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
    <div className="w-screen h-screen overflow-hidden box-border bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de tarefas</Title>
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