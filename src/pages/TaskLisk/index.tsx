import { PlusCircle } from "@phosphor-icons/react";
import { Card } from "./Card";
import style from "./TaskList.module.css";
import { HeaderTask } from "./HeaderTask";
import { Empty } from "./Empty";
import { useLogic } from "./useLogic";

export const TaskList = () => {
  const {
    handleCreateTask,
    handleDeleteTask,
    handleCompletedTask,
    totalTasksCompleted,
    tasks,
    setContent,
    content,
  } = useLogic();

  return (
    <div className={style.taskList}>
      <form onSubmit={handleCreateTask} className={style.form}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          className={style.inputTask}
          value={content}
          onChange={(e) => setContent(e.target.value.trim())}
        />
        <button type="submit" className={style.buttonAdd}>
          <span>Criar</span>
          <PlusCircle size={22} />
        </button>
      </form>
      <HeaderTask
        createTaskCount={tasks.length}
        finishedTasksCount={totalTasksCompleted}
      />
      {tasks.length > 0 ? (
        tasks.map((task) => {
          return (
            <Card
              key={task.id}
              descriptionTask={task}
              isCompleted={handleCompletedTask}
              onDelete={handleDeleteTask}
            />
          );
        })
      ) : (
        <Empty />
      )}
    </div>
  );
};
