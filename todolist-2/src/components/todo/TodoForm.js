import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import TodoContainer from './TodoContainer';
import { connect } from 'react-redux';
import { createTodo } from '../../redux/actions';

const styles = {
  container: {
    marginTop: 32,
    width: '50%',
    margin: '0 auto',
  },

  form: {
    marginTop: '1%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textField: {
    width: 200,
  },
};

const AddBtn = styled(Button)({
  marginLeft: 8,
  background: 'primary',
  border: 0,
  borderRadius: 3,
  color: 'white',
  height: 36,
  padding: '0 30px',
});

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  submitHandler = (event) => {
    event.preventDefault();

    const { title } = this.state;

    const newTodo = {
      id: Date.now().toString(),
      title,
    };

    this.props.createTodo(newTodo);
    console.log(newTodo);
    this.setState({ title: '' });
  };

  changeInputHandler = (event) => {
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };

  render() {
    return (
      <div style={styles.container}>
        <form
          noValidate
          autoComplete='off'
          onSubmit={this.submitHandler}
          style={styles.form}
        >
          <TextField
            id='standard-search'
            label='Todo title'
            type='search'
            margin='normal'
            name='title'
            value={this.state.title}
            onChange={this.changeInputHandler}
          />

          <AddBtn variant='contained' color='primary' type='submit'>
            Add
          </AddBtn>
        </form>

        <TodoContainer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  createTodo,
};

export default connect(null, mapDispatchToProps)(TodoForm);
