import React from 'react';
import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/actions';

export default ({ todo }) => {
  const dispatch = useDispatch();

  const onClickHandler = (event) => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <List>
      <ListItem
        // key={value}
        role={undefined}
        dense
        button
        // onClick={this.handleToggle(value)}
      >
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
