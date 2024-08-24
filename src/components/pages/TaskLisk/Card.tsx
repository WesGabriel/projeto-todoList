import {
  // CheckCircle,
  Trash,
} from "@phosphor-icons/react";
import style from "./TaskList.module.css";

interface CardProps {
  desriptionTask: string;
}

export const Card = ({ desriptionTask }: CardProps) => {
  return (
    <div className={style.card}>
      <div className={style.divCheck}>
        <div className={style.check}></div>
        {/* <CheckCircle size={22} weight="fill" className={style.done} /> */}
      </div>
      <div className={style.discription}>
        <span>{desriptionTask}</span>
      </div>
      <Trash size={20} className={style.trash} />
    </div>
  );
};
