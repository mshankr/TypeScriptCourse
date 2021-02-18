import { ActionTypes, Todo, Action } from "../actions";

export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;

    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload);

    case ActionTypes.createTodo:
      return [
        {
          id: state.length + 1000,
          title: action.payload,
          completed: false,
        },
        ...state,
      ];

    default:
      return state;
  }
};
