import './App.css';
import Navbar from './components/Navbar';
import TodoForm from './components/todo/TodoForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FetchedTodosContainer from './components/fetchedTodo/FetchedTodosContainer';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route path='/' exact component={TodoForm} />
        <Route path='/fetched_todos' exact component={FetchedTodosContainer} />
      </Router>
    </div>
  );
}

export default App;
