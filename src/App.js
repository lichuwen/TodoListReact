import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from "./containers/todoForm"
import TodoListComponent from "./containers/todoList"
// import todoFormComponent from "./component/todoForm/index"

function App() {
  return (
    <div className="App">
      <div className="App-header">
          <TodoForm />
          <TodoListComponent />
      </div>
    </div>
  );
}

export default App;
