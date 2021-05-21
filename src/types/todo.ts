export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  page: number;
  limit: number;
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export enum TodoActionTypes {
  FETCH_TODOS_START = "FETCH_TODOS_START",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
  SET_TODOS_PAGE = "SET_TODOS_PAGE",
}

interface FectTodosActionStart {
  type: TodoActionTypes.FETCH_TODOS_START;
}

interface FectTodosActionSuccess {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS;
  payload: any[];
}
interface FectTodosActionError {
  type: TodoActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}
interface SetTodoPage {
  type: TodoActionTypes.SET_TODOS_PAGE;
  payload: number;
}

export type TodoAction = FectTodosActionStart | FectTodosActionSuccess | FectTodosActionError | SetTodoPage;
