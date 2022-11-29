import { PlusCircle, Trash } from "phosphor-react";
import ClipboardImage from "../assets/clipboard.png";
import { ToDoItem } from "./ToDoItem";

import styles from "./ToDoList.module.css";

export function ToDoList() {
  function changeToDoItemStatus(id: number) {
    console.log(id + " changed");
  }

  function deleteToDoItem(id: number) {
    console.log(id + " deleted");
  }

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
        <ToDoItem
          id={1}
          onChangeStatus={changeToDoItemStatus}
          onDelete={deleteToDoItem}
          isChecked={true}
        />
        <ToDoItem
          id={2}
          onChangeStatus={changeToDoItemStatus}
          onDelete={deleteToDoItem}
          isChecked={false}
        />
      </ul>
    </div>
  );
}
