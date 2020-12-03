import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
    color: '#e3f2fd',
  },
  link: {
    textDecoration: 'none',
    color: '#e3f2fd',
  },
});

function Navbar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <Box m='auto'>
            <Button className={classes.button}>
              <Link to='/' className={classes.link}>
                Todolist
              </Link>
            </Button>
            <Button className={classes.button}>
              <Link to='/fetched_todos' className={classes.link}>
                Fetched todos
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
