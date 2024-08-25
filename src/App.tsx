import style from "./App.module.css";
import { Header } from "./pages/Header";
import { TaskList } from "./pages/TaskLisk";

function App() {
  return (
    <div className={style.appContainer}>
      <Header />
      <div className={style.appMain}>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
