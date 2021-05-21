import axios from "axios";
import { Dispatch } from "redux";
import { IUser, UserAction, UserActionTypes } from "../../types/user";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS_START });
      const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
      dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: e });
    }
  };
};
