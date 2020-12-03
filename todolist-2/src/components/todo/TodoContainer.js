import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Todos from './Todos';
import { Button } from '@material-ui/core';
import { checkAllTodos, uncheckAllTodos } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    width: '50%',
    margin: '6vh auto',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  button: {
    marginRight: 6,
    backgroundColor: '#757de8',
  },
});

function TodoContainer(props) {
  const { classes } = props;
  const dispatch = useDispatch();

  const onClickCheckAllHandler = (event) => {
    dispatch(checkAllTodos());
  };

  const onClickUncheckAllHandler = (event) => {
    dispatch(uncheckAllTodos());
  };

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Button className={classes.button} onClick={onClickCheckAllHandler}>
          Check all todos
        </Button>
        <Button className={classes.button} onClick={onClickUncheckAllHandler}>
          Uncheck all todos
        </Button>
        <Todos />
      </Paper>
    </div>
  );
}

TodoContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoContainer);
