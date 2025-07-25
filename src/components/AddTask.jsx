import { useState } from "react";
import Input from "./Input";


function AddTask({ addtask }) {

    const [ title, setTitle] = useState("");
    const [description, setDescription] = useState("");



    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <Input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)} placeholder="Digite o título da tarefa"
            />

            <Input
            type="text" 
            value={description} 
            onChange={(event) => setDescription(event.target.value)} 
            placeholder="Digite a descrição da tarefa" 
            />

            <button 
            onClick={()=> {
                if(!title.trim()) { 
                   return alert("Adicione um título para a sua tarefa");
                }
                addtask(title, description);
                setTitle("");
                setDescription(""); 
            }}
            className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">
            Adicionar
            </button>
        </div>
    );
}

export default AddTask;