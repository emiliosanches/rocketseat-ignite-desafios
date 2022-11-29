import { PlusCircle } from "phosphor-react";
import ClipboardImage from "../assets/clipboard.png";

import styles from "./ToDoList.module.css";

export function ToDoList() {
  return (
    <div className={styles.itemsListContainer}>
      <form className={styles.newItemForm}>
        <input placeholder="Adicione uma nova tarefa" type="text" />
        <button type="submit">
          Criar
          <PlusCircle />
        </button>
      </form>

      <header className={styles.itemsListHeader}>
        <div className={styles.itemsCount}>
          Tarefas criadas <span>0</span>
        </div>

        <div className={styles.doneItemsCount}>
          Concluídas <span>0</span>
        </div>
      </header>

      <div className={styles.emptyList}>
        <img src={ClipboardImage} />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  );
}
