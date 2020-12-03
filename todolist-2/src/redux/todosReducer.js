import { CREATE_TODO, DELETE_TODO, FETCH_TODO } from './types';

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
    default:
      return state;
  }
};
