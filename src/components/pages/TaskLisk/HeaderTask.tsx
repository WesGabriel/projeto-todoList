import style from "./TaskList.module.css";

interface HeaderTaskProps {
  createTaskCount: string;
  finishedTasksCount: string;
}

export const HeaderTask = ({
  createTaskCount,
  finishedTasksCount,
}: HeaderTaskProps) => {
  return (
    <div className={style.divHeaderTask}>
      <div>
        <span className={style.titleCreateTask}>Tarefas criadas</span>
        <span className={style.createTaskCount}>{createTaskCount}0</span>
      </div>
      <div>
        <span className={style.titleFinishedTask}>Conculídas</span>
        <span className={style.finishedTasksCount}>
          {finishedTasksCount}2 de 5
        </span>
      </div>
    </div>
  );
};
