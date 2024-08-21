import style from "./App.module.css";
import { CreateTask } from "./components/pages/CreateTask";
import { Header } from "./components/pages/Header";
import { TaskList } from "./components/pages/TaskLisk";

function App() {
  return (
    <div className={style.appContainer}>
      <Header />
      <CreateTask />
      <TaskList />
    </div>
  );
}

export default App;
