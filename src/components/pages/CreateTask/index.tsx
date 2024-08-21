import { PlusCircle } from "@phosphor-icons/react";
import style from "./Button.module.css";

export const CreateTask = () => {
  return (
    <form className={style.form}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className={style.inputTask}
      />
      <div className={style.buttonAdd}>
        <span>Criar</span>
        <PlusCircle size={22} />
      </div>
    </form>
  );
};
