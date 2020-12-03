import React from 'react';
import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../redux/actions';

export default ({ todo }) => {
  const dispatch = useDispatch();

  const onClickHandler = (event) => {
    dispatch(deleteTodo(todo.id));
  };

  const onToggleHandler = (event) => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <List>
      <ListItem role={undefined} dense button onClick={onToggleHandler}>
        <Checkbox checked={todo.completed} />
        <ListItemText primary={todo.title} />
        <ListItemSecondaryAction>
          <IconButton aria-label='Delete' onClick={onClickHandler}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};
