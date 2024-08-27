import { PlusCircle } from "@phosphor-icons/react";
import { Card } from "./Card";
import style from "./TaskList.module.css";
import { HeaderTask } from "./HeaderTask";
import { FormEvent, useState } from "react";
import { Empty } from "./Empty";

export interface TaskProps {
  id: number;
  text: string;
  isChecked: boolean;
}

export const TaskList = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [content, setContent] = useState("");

  const handleCreateTask = (e: FormEvent) => {
    e.preventDefault();
    if (!content) return;

    const newTask: TaskProps = {
      id: new Date().getTime(),
      text: content,
      isChecked: false,
    };

    setTasks((state) => [...state, newTask]);
    setContent("");
  };

  const handleDeleteTask = (id: number) => {
    const filterTask = tasks.filter((task) => task.id !== id);

    if (!confirm("Deseja mesmo apagar essa tarefa?")) return;

    setTasks(filterTask);
  };

  const handleCompletedTask = ({
    id,
    value,
  }: {
    id: number;
    value: boolean;
  }) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value };
      }

      return { ...task };
    });

    const incompleteTasks = updatedTasks.filter((task) => !task.isChecked);
    const completedTasks = updatedTasks.filter((task) => task.isChecked);

    setTasks([...incompleteTasks, ...completedTasks]);
  };

  const totalTasksCompleted = tasks.reduce((done, currentTask) => {
    if (currentTask.isChecked) {
      return done + 1;
    }

    return done;
  }, 0);

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
