import { PlusCircle, Trash } from "phosphor-react";
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

      {/* <div className={styles.emptyList}>
        <img src={ClipboardImage} />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div> */}

      <ul className={styles.notEmptyList}>
        <li>
          <div className={styles.checkboxContainer}>
            <div className={styles.checkboxUnchecked} />
          </div>
          <span>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </span>
          <button className={styles.deleteButton} title="Excluir">
            <Trash />
          </button>
        </li>
        <li>
          <div className={styles.checkboxContainer}>
            <div className={styles.checkboxChecked} />
          </div>
          <span>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </span>
          <button className={styles.deleteButton} title="Excluir">
            <Trash />
          </button>
        </li>
      </ul>
    </div>
  );
}
