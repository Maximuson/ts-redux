import axios from "axios";
import { Dispatch } from "redux";
import { TodoAction, TodoActionTypes, Todo } from "../../types/todo";

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS_START });
      const response = await axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos", {
        params: { _page: page, _limit: limit },
      });
      dispatch({ type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({ type: TodoActionTypes.FETCH_TODOS_ERROR, payload: e });
    }
  };
};

export const setTodosPage = (page: number): TodoAction => {
  return { type: TodoActionTypes.SET_TODOS_PAGE, payload: page };
};
