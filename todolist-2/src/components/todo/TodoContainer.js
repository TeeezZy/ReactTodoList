import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Todos from './Todos';

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    width: '50%',
    margin: '6vh auto',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function TodoContainer(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Todos />
      </Paper>
    </div>
  );
}

TodoContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoContainer);
