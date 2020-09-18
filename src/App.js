import React from 'react';
import TodoFormWithContext from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <h1>To-do List</h1>
      <TodoFormWithContext />
      <TodoList />
    </div>

  );
}

export default App;
