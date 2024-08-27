import { FormEvent, useState } from "react";

export interface TaskProps {
  id: number;
  text: string;
  isChecked: boolean;
}

export const useLogic = () => {
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

  return {
    handleCreateTask,
    handleDeleteTask,
    handleCompletedTask,
    totalTasksCompleted,
    tasks,
    content,
    setContent,
  };
};
