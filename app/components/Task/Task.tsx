/* eslint-disable @typescript-eslint/no-unused-vars */
import { FcFullTrash } from "react-icons/fc";
import styles from "./Task.module.scss";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { useTaskStore } from "../../store/AddTask.store";

type TaskProps = {
  id: number;
  content: string;
  completed: boolean;
  deleted: boolean;
};

export function Task({ id, content, completed, deleted}: TaskProps) {
  const completeTask = useTaskStore((state) => state.completeTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  const handleComplete = () => {
    completeTask(id);
    console.log("Completed task with id:", id);
  };

  const handleDelete = () => {
    deleteTask(id);
    console.log("Deleted task with id:", id);
  };

  return (
    <div className={styles.task}>
      <button className={styles.checkicon} onClick={handleComplete}>
         {completed ? (
          <FaCheckCircle className={styles.checked} />
        ) : (
          <FaRegCircle className={styles.unchecked} />
        )}
      </button>

      <div className={styles.content}> 
        <p className={completed ? styles.completedText : ""}>{content}</p>
      </div>

      <button className={styles.deleteIcon} onClick={handleDelete}>
        <FcFullTrash className={styles.Icon} />
      </button>
    </div>
  );
}
