import React, { useState, useEffect } from 'react';
import TaskService from '../services/TaskService';
import TaskCard from '../components/TaskCard';

function TasksPages() {
    const [tasks,setTasks]=useState([]);
    useEffect(()=>{
        const fetchTasks=async()=>{
            const data =await TaskService.getTasks();
            setTasks(data)
        }
        fetchTasks()
    },[])
    const handleStatusChange=async(task)=>{
        try{
            await TaskService.updateTask(task._id,newStatus);
            setTasks((prevTasks)=>
            prevTasks.map((t)=>
            t._id===task._id ? {...t,status:newStatus}: t))
    
        }catch(error){
            console.error('Durum güncellenemedi:', error);
        }
        
    }
  return (
    <div>
<h2>Görevler</h2>
{tasks.map((task)=>(
    <TaskCard
    key={task._id}
    task={task}
    onStatusChange={(newStatus)=>handleStatusChange(task,newStatus)}
/>
))}

    </div>
  )
}

export default TasksPages