import { Diff } from "lucide-react";
import Button from "../Button/Button";
import { Input } from "../Input/Input";
import styles from "./App.module.scss";

export function App() {
  return (
    <div className={styles.container}>
      <div className={styles.inputSection}>
        <Input type="text" placeholder="Enter new Task" className="outline" />
        <Button 
           variants="primary" 
           size="medium" 
           title="Add Task"
           rightIcon={<Diff />}
           />
      </div>
    </div>
  );
}
