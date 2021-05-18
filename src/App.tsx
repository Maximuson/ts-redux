import React from "react";
import UsersList from "./components/UsersList/UsersList";
import TodoList from "./components/TodoList/TodoList";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <UsersList />
      <TodoList />
    </div>
  );
}

export default App;
