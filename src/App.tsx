import React from "react";
import UsersList from "./components/UsersList/UsersList";
import TodoList from "./components/TodoList/TodoList";

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
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
