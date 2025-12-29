import styles from "./page.module.scss";
import { App } from "./components/App/App";

export default function Home() {
  return (
    <div className={styles.page}>
       <App/>
    </div>
  );
}
