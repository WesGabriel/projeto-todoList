import { ClipboardText } from "@phosphor-icons/react";
import { Card } from "./Card";
import style from "./TaskList.module.css";
import { HeaderTask } from "./HeaderTask";

export const TaskList = ({ createTaskCount, finishedTasksCount }) => {
  return (
    <div className={style.taskList}>
      <HeaderTask
        createTaskCount={createTaskCount}
        finishedTasksCount={finishedTasksCount}
      />
      <Card
        desriptionTask={
          "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
        }
      />
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
    </div>
  );
};
