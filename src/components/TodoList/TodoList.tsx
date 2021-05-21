import React, { useEffect } from "react";
import { useTypedSelector } from "./../../hooks/useTypedSelector";
import { useActions } from "./../../hooks/useActions";

import TodoItem from "../TodoItem/TodoItem";
const TodoList: React.FC = () => {
  const { todos, page, limit, loading, error } = useTypedSelector((state) => state.todo);

  const { fetchTodos } = useActions();

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page, limit]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {todos.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </div>
  );
};

export default TodoList;
