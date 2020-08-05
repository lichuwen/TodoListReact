import React from 'react';
import logo from './logo.svg';
import './App.css';
import DoneListContainer from "./containers/DoneListContainer"
import TodoListContainer from "./containers/TodoListContainer"
import TodoFormContainer from "./containers/TodoFormContainer"
import { HashRouter, Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="App-header">
          <TodoFormContainer />
          <HashRouter>
              <Link to="/"><span style={{color:'red'}}>All_todoList</span></Link>
              <Link to="/finish"><span style={{color:'red'}}>Finish_todoList</span></Link>
              <Route exact path="/" component={TodoListContainer}></Route>
              <Route exact path="/finish" component={DoneListContainer}></Route>
          </HashRouter>
      </div>
    </div>
  );
}

export default App;
