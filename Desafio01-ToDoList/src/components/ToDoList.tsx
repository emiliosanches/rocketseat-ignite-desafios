import { PlusCircle } from "phosphor-react";
import { FormEvent, useMemo, useState } from "react";
import ClipboardImage from "../assets/clipboard.png";
import { ToDoItem } from "./ToDoItem";

import styles from "./ToDoList.module.css";

interface IToDoItem {
  id: number;
  content: string;
  isCompleted: boolean;
}

export function ToDoList() {
  const [newItemText, setNewItemText] = useState("");
  const [items, setItems] = useState<IToDoItem[]>([]);

  function changeToDoItemStatus(id: number) {
    setItems((state) =>
      state.map((item) => {
        return item.id !== id
          ? item
          : {
              ...item,
              isCompleted: !item.isCompleted,
            };
      })
    );
  }

  function deleteToDoItem(id: number) {
    setItems((state) => state.filter((item) => item.id !== id));
  }

  function handleAddItem(evt: FormEvent) {
    evt.preventDefault();
    setItems((state) => [
      ...state,
      {
        id: (state[state.length - 1]?.id ?? 0) + 1,
        content: newItemText,
        isCompleted: false,
      },
    ]);
    setNewItemText("");
  }

  const completedItems = useMemo(() => {
    return items.filter((i) => i.isCompleted);
  }, [...items.map((i) => JSON.stringify(i))]);

  return (
    <div className={styles.itemsListContainer}>
      <form onSubmit={handleAddItem} className={styles.newItemForm}>
        <input
          placeholder="Adicione uma nova tarefa"
          type="text"
          value={newItemText}
          onChange={(evt) => setNewItemText(evt.target.value)}
        />
        <button type="submit">
          Criar
          <PlusCircle />
        </button>
      </form>

      <header className={styles.itemsListHeader}>
        <div className={styles.itemsCount}>
          Tarefas criadas <span>{items.length}</span>
        </div>

        <div className={styles.doneItemsCount}>
          Concluídas{" "}
          <span>
            {items.length ? completedItems.length + " de " + items.length : 0}
          </span>
        </div>
      </header>

      {items.length ? (
        <ul className={styles.notEmptyList}>
          {items.map((item) => (
            <ToDoItem
              id={item.id}
              onChangeStatus={changeToDoItemStatus}
              onDelete={deleteToDoItem}
              isChecked={item.isCompleted}
              text={item.content}
            />
          ))}
        </ul>
      ) : (
        <div className={styles.emptyList}>
          <img src={ClipboardImage} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      )}
    </div>
  );
}
