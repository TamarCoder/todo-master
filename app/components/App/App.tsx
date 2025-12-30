'use client';
import { Diff } from "lucide-react";
import Button from "../Button/Button";
import { Input } from "../Input/Input";
import styles from "./App.module.scss";
import { Task } from "../Task/Task";
import { useTaskStore } from "../../store/AddTask.store";
import { useState } from "react";

export function App() {
    const tasks = useTaskStore((state) => state.tasks);
    const [taskText, setTaskText] = useState("");
    const addTask  = useTaskStore((state) => state.addTask);

    const handleAddTask = () => {
        if (taskText.trim() === "") return;
        addTask(taskText);
        setTaskText("");
    }

  

  return (
    <div className={styles.container}>

      <div className={styles.headerSection}>
        <h1 className={styles.title}>Task Manager</h1>
        <p className={styles.subtitle}>Manage your tasks efficiently</p>
      </div>

      <div className={styles.inputSection}>
        <Input 
         type="text" 
         value={taskText}
         onChange={(e) => setTaskText(e.target.value)}
         onKeyDown={(e) => {
           if (e.key === "Enter") {
             handleAddTask();
           }
         }}
         placeholder="Enter new Task" 
         className="outline" />
        <Button 
           variants="primary" 
           size="medium" 
           title="Add Task"
           rightIcon={<Diff />}
            onClick={handleAddTask}
           />
      </div>


      <div className={styles.taskLists}>
        {
          tasks.map((task) => 
            <Task 
              key={task.id}
              content={task.content}
              id={task.id}
              completed={task.completed}
              deleted={task.deleted}
            />
          )
        }
       
      </div>



    </div>
  );
}
