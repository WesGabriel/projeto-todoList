import { Check, Trash } from "@phosphor-icons/react";
import style from "./TaskList.module.css";
import { TaskProps } from "./useLogic";

interface CardProps {
  descriptionTask: TaskProps;
  onDelete: (id: number) => void;
  isCompleted: ({ id, value }: { id: number; value: boolean }) => void;
}

export const Card = ({ descriptionTask, onDelete, isCompleted }: CardProps) => {
  const handleTaskToggle = () => {
    isCompleted({
      id: descriptionTask.id,
      value: !descriptionTask.isChecked,
    });
  };

  const handleDelete = () => {
    onDelete(descriptionTask.id);
  };

  const checkboxCheckedClassname = descriptionTask.isChecked
    ? style["checkbox-checked"]
    : style["checkbox-unchecked"];
  const paragraphCheckedClassname = descriptionTask.isChecked
    ? style["paragraph-checked"]
    : "";

  return (
    <div className={style.card}>
      <div className={style.divCheck} onClick={handleTaskToggle}>
        <input readOnly type="checkbox" checked={descriptionTask.isChecked} />
        <span className={`${style.checkbox} ${checkboxCheckedClassname}`}>
          {descriptionTask.isChecked && <Check size={12} />}
        </span>
      </div>
      <div className={`${style.description} ${paragraphCheckedClassname}`}>
        <span>{descriptionTask.text}</span>
      </div>
      <Trash size={20} className={style.trash} onClick={handleDelete} />
    </div>
  );
};
