import { CREATE_TODO, DELETE_TODO } from './types';

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
