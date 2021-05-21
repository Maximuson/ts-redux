export interface UserState {
  users: IUser[];
  loading: boolean;
  error: null | string;
}
interface IUserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}
export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IUserAddress | any;
}

export enum UserActionTypes {
  FETCH_USERS_START = "FETCH_USERES",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface FetchUserStartAction {
  type: UserActionTypes.FETCH_USERS_START;
}

interface FetchUserSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}

interface FetchUserErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type UserAction = FetchUserStartAction | FetchUserSuccessAction | FetchUserErrorAction;
