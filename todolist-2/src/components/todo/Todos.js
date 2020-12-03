import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const Todos = ({ syncTodos }) => {
  if (!syncTodos.length) {
    return <p className='text-center'>No todos</p>;
  }
  return syncTodos.map((todo) => <Todo todo={todo} key={todo.id} />);
};

const mapStateToProps = (state) => {
  return {
    syncTodos: state.todos.syncTodos,
  };
};

export default connect(mapStateToProps, null)(Todos);
