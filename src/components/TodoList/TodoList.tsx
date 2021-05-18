import React, { useCallback, useEffect } from "react";
import { useTypedSelector } from "./../../hooks/useTypedSelector";
import { useActions } from "./../../hooks/useActions";
import { fetchTodos } from "./../../store/action-creators/todo";

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
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <span>
              {item.id} - {item.title}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
