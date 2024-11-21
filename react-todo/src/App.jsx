import React from 'react';
import TodoList from './components/TodoList';
import '@testing-library/jest-dom';

function App() {
  return (
    <div>
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
      <TodoList/>
    </div>
  );
}

export default App;