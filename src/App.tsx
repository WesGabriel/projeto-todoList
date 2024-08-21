import style from "./App.module.css";
import { CreateTask } from "./components/pages/CreateTask";
import { Header } from "./components/pages/Header";

function App() {
  return (
    <div className={style.appContainer}>
      <Header />
      <CreateTask />
    </div>
  );
}

export default App;
