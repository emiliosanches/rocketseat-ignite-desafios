import { Trash } from "phosphor-react";
import styles from "./ToDoItem.module.css";

interface ToDoItemProps {
  id: number;
  isChecked: boolean;
  text: string;
  onChangeStatus: (id: number) => void;
  onDelete: (id: number) => void;
}

export function ToDoItem({
  id,
  isChecked,
  text,
  onChangeStatus,
  onDelete,
}: ToDoItemProps) {
  return (
    <li className={styles.toDoItem}>
      <button
        className={styles.checkboxContainer}
        onClick={() => onChangeStatus(id)}
      >
        <div
          className={
            isChecked ? styles.checkboxChecked : styles.checkboxUnchecked
          }
        />
      </button>
      <span className={isChecked ? styles.descriptionDone : styles.description}>
        {text}
      </span>
      <button
        onClick={() => onDelete(id)}
        className={styles.deleteButton}
        title="Excluir"
      >
        <Trash />
      </button>
    </li>
  );
}
