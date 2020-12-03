import { combineReducers } from 'redux';
import { appReducer } from './appReducer.js';
import { todosReducer } from './todosReducer';

export const rootReducer = combineReducers({
  todos: todosReducer,
  app: appReducer,
});
