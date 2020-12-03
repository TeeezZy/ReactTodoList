import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';
import FetchedTodo from './FetchedTodos';

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    width: '50%',
    margin: '6vh auto',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function ProfilesContainer(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <FetchedTodo />
      </Paper>
    </div>
  );
}

ProfilesContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfilesContainer);
