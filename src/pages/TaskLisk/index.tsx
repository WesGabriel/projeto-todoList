import { ClipboardText, PlusCircle } from "@phosphor-icons/react";
import { Card } from "./Card";
import style from "./TaskList.module.css";
import { HeaderTask } from "./HeaderTask";
import { FormEvent, useState } from "react";

export interface TaskProps {
  id: number;
  text: string;
  isChecked: boolean;
}

export const TaskList = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [content, setContent] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!content) {
      return;
    }

    const newTask: TaskProps = {
      id: new Date().getTime(),
      text: content,
      isChecked: false,
    };

    setTasks((state) => [...state, newTask]);
    setContent("");
  };

  const handleDeleteTask = (id: number) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    if (!confirm("Deseja mesmo apagar essa tarefa?")) {
      return;
    }

    setTasks(filteredTasks);
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

    setTasks(updatedTasks);
  };

  return (
    <div className={style.taskList}>
      <form onSubmit={handleSubmit} className={style.form}>
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
      <HeaderTask />
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
        <div className={style.divSleeping}>
          <ClipboardText
            className={style.iconClipboard}
            size={60}
            weight="duotone"
          />
          <h3 className={style.titleSleeping}>
            Você ainda não tem tarefas cadastradas
          </h3>
          <p className={style.subTitleSleeping}>
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      )}
    </div>
  );
};
