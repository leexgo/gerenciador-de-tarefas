import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid"


function App() {
  const [ tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar programação para se tornar um programador full stack.",
      isCompleted: false
    },
    {
      id: 2,
      title: "Estudar Inglês",
      description: "Estudar até atingir a fluência",
      isCompleted: false
    },
    {
      id: 3,
      title: "Estudar UX/UI",
      description: "Estudar UX/UI para desenvolver aplicativos modernos e intuitivos",
      isCompleted: false
    },
  ]);

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