import React, { FC } from "react";

import { Todo } from "../../types/todo";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
      {todo.id} - {todo.title}
    </div>
  );
};

export default TodoItem;
