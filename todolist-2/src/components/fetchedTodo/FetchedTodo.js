import React from 'react';
import { Checkbox, List, ListItem, ListItemText } from '@material-ui/core';

export default ({ todo }) => {
  return (
    <List>
      <ListItem role={undefined} dense>
        <Checkbox checked={todo.completed} />
        <ListItemText primary={todo.title} />
      </ListItem>
    </List>
  );
};
