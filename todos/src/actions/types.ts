import { FetchTodosAction, DeleteTodoAction, CreateTodoAction } from "./todos";

export enum ActionTypes {
  fetchTodos, // : 0
  deleteTodo, // : 1
  createTodo, // : 2
}

export type Action = FetchTodosAction | DeleteTodoAction | CreateTodoAction;
