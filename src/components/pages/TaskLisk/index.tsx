import { Card } from "./Card";
import style from "./TaskList.module.css";

export const TaskList = () => {
  return (
    <div className={style.taskList}>
      <Card
        desriptionTask={
          "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
        }
      />
    </div>
  );
};
