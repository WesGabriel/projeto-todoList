import { ClipboardText } from "@phosphor-icons/react";
import style from "./TaskList.module.css";

export const Empty = () => {
  return (
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
  );
};
