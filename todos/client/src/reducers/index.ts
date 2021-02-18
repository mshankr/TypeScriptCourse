import { combineReducers } from "redux";
import { todosReducer } from "./todos";
import { Todo } from "../actions";

// make sure that reducer is returning this type!!
export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
