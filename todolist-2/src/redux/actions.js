import {
  CREATE_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  REQUEST_TODOS,
  SHOW_LOADER,
  HIDE_LOADER,
  CHECK_ALL_TODOS,
  UNCHECK_ALL_TODOS,
} from './types';

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

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function checkAllTodos() {
  return {
    type: CHECK_ALL_TODOS,
  };
}

export function uncheckAllTodos() {
  return {
    type: UNCHECK_ALL_TODOS,
  };
}
