import rocketImage from "../../../assets/rocket.svg";
import todoImage from "../../../assets/todo.png";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <img className="rocket" src={rocketImage} />
      <img className={styles.todo} src={todoImage} />
    </header>
  );
};
