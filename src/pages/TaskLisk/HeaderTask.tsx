import style from "./TaskList.module.css";

interface HeaderTaskProps {
  createTaskCount: number;
  finishedTasksCount: number;
}

export const HeaderTask = ({
  createTaskCount,
  finishedTasksCount,
}: HeaderTaskProps) => {
  return (
    <div className={style.divHeaderTask}>
      <div>
        <span className={style.titleCreateTask}>Tarefas criadas</span>
        <span className={style.createTaskCount}>{createTaskCount}</span>
      </div>
      <div>
        <span className={style.titleFinishedTask}>Conculídas</span>
        <span className={style.finishedTasksCount}>
          {createTaskCount === 0
            ? createTaskCount
            : `${finishedTasksCount} de ${createTaskCount}`}
        </span>
      </div>
    </div>
  );
};
