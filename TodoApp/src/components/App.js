import TodoList from "../components/TodoList/index";
import AddTodo from "../components/AddTodo/index";

export default function App($app) {
  this.state = {
    todos: getItemFromLocalStorage("todos"),
    todoIdx: getItemFromLocalStorage("todoIdx"),
  };

  // state를 초기화 할 때 해당 함수를 호출한다.
  // 화살표 함수를 사용할 경우 호이스팅이 안되기 때문에 에러를 출력
  function getItemFromLocalStorage(key) {
    const getJsonData = localStorage.getItem(key);

    if (getJsonData !== null) {
      return JSON.parse(getJsonData);
    } else if (key === "todos") return [];
    else return 0;
  }

  function setItemToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  const todoList = new TodoList({
    $app,
    initialState: this.state.todos,
  });

  const addTodo = new AddTodo({
    $app,
    addItem: (value) => {
      const newItem = {
        idx: this.state.todoIdx++,
        title: value,
      };

      const newState = {
        ...this.$state,
        todos: [...this.state.todos, newItem],
      };

      this.setState(newState);
      setItemToLocalStorage("todos", this.state.todos);
    },
  });

  this.setState = (newState) => {
    this.state = newState;
    todoList.setState(this.state.todos);
  };
}
