import { CREATE_TODO, DELETE_TODO, TOGGLE_TODO, REQUEST_TODOS } from './types';

export function createTodo(todo) {
  return {
    type: CREATE_TODO,
    payload: todo,
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id,
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
}

export function fetchTodos() {
  return {
    type: REQUEST_TODOS,
  };
}
