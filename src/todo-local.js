const LOCAL_TODO_KEY = "localTodoKey";

export class TodoLocal {
  static loadTodos() {
    return JSON.parse(localStorage.getItem(LOCAL_TODO_KEY) || "[]");
  }
  static storeTodos(todos) {
    localStorage.setItem(LOCAL_TODO_KEY, JSON.stringify(todos));
  }
}
