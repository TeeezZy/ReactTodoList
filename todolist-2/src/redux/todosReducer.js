import {
  CHECK_ALL_TODOS,
  CREATE_TODO,
  DELETE_TODO,
  FETCH_TODO,
  TOGGLE_TODO,
  UNCHECK_ALL_TODOS,
} from './types';

const initialState = {
  syncTodos: [],
  fetchedTodos: [],
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return { ...state, syncTodos: [...state.syncTodos, action.payload] };
    case FETCH_TODO:
      return {
        ...state,
        fetchedTodos: action.payload,
      };
    case DELETE_TODO:
      return {
        ...state,
        syncTodos: state.syncTodos.filter((todo) => todo.id !== action.payload),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        syncTodos: state.syncTodos.map((todo) => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed;
            return todo;
          }
          return todo;
        }),
      };
    case CHECK_ALL_TODOS:
      return {
        ...state,
        syncTodos: state.syncTodos.map((todo) => {
          todo.completed = true;
          return todo;
        }),
      };
    case UNCHECK_ALL_TODOS:
      return {
        ...state,
        syncTodos: state.syncTodos.map((todo) => {
          todo.completed = false;
          return todo;
        }),
      };
    default:
      return state;
  }
};
