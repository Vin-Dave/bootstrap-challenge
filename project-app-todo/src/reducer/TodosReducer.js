export function TodosReducer(state, action) {
  switch (action.type) {
    case "form_show":
      return {
        ...state,
        isFormShown: true,
      };
    case "add_item":
      return {
        isFormShown: false,
        todos: [
          ...state.todos,
          {
            name: action.newTodoName,
            done: false,
            id: state.todos.at(-1).id + 1,
          },
        ],
      };
    case "delete_item":
      return {
        ...state,
        todos: state.todos.filter((element) => element.id !== action.id),
      };
    case "done_item":
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id !== action.id) return item;
          else {
            return { ...item, done: true };
          }
        }),
      };

    default:
      throw new Error("Not supported action");
  }

  return state;
}
