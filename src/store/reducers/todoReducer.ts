import { TodoAction, TodoActionTypes, TodoState } from "../../types/todo";

const initialState: TodoState = {
  todos: [],
  page: 1,
  limit: 10,
  error: "",
  loading: false,
};

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS_START:
      return { ...state, loading: true };

    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };

    case TodoActionTypes.FETCH_TODOS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case TodoActionTypes.SET_TODOS_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    default:
      return state;
  }
};
