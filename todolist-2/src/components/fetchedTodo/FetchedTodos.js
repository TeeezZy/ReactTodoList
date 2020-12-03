import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../../redux/actions';
import FetchedTodo from './FetchedTodo';

const styles = {
  button: {
    color: '#fff',
    backgroundColor: '#3f51b5',
  },
};

export default () => {
  const dispatch = useDispatch();
  const fetchedTodos = useSelector((state) => {
    return state.todos.fetchedTodos;
  });

  const onClickHandler = (event) => {
    dispatch(fetchTodos());
  };

  if (!fetchedTodos.length) {
    return (
      <Button style={styles.button} onClick={onClickHandler}>
        Load todos
      </Button>
    );
  }

  return fetchedTodos.map((todo) => <FetchedTodo todo={todo} key={todo.id} />);
};
