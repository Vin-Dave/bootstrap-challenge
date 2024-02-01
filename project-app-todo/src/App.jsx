import { useReducer, useState } from "react";
import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { getSubheading } from "./utils/getSubheading";
import { TodosReducer } from "./reducer/TodosReducer";

const dates = [
  { name: "Zapłacić rachunki", done: false, id: 1 },
  { name: "Wyrzucić śmieci", done: true, id: 2 },
];
function App() {
  const [state, dispatch] = useReducer(TodosReducer, {
    todos: [...dates],
    isFormShown: false,
  });

  function addItem(newTodoName) {
    dispatch({ type: "add_item", newTodoName });
    // setTodos((prevTodos) => [
    //   ...prevTodos,
    //   { name: newTodoName, done: false, id: prevTodos.at(-1).id + 1 },
    // ]);
    // setIsFormShown(false);
  }
  function deleteItem(id) {
    dispatch({ type: "delete_item", id });
    // setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
  }

  function finishItem(id) {
    dispatch({ type: "done_item", id });
    // setTodos((prevTodos) =>
    //   prevTodos.map((item) => {
    //     if (item.id !== id) return item;
    //     else {
    //       return { ...item, done: true };
    //     }
    //   })
    // );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Do zrobienia</h1>
          <h2>{getSubheading(state.todos.length)}</h2>
        </div>
        {!state.isFormShown && (
          <button
            onClick={() => dispatch({ type: "form_show" })}
            className={styles.button}
          >
            +
          </button>
        )}
      </header>
      {state.isFormShown && (
        <Form onFormSubmit={(newTodoName) => addItem(newTodoName)} />
      )}
      <ul>
        {state.todos.map(({ id, name, done }) => (
          <TodoItem
            key={id}
            name={name}
            done={done}
            onDeleteButtonClick={() => deleteItem(id)}
            onDoneButtonClick={() => finishItem(id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
