import React from 'react';
import Todo from "../todo/index"
import Axios from 'axios';
import {putTodo} from "../../api/api"

class TodoListComponent extends React.Component{

    deleteTodo = (id) => {
        this.props.deleteTodo(id)
    }

    changeStatus = (id,status) => {
        this.props.changeStatus(id)
        const _this = this;
        putTodo(
            id,
            {status: !status}
        )
        .then(function (response) {
            _this.props.changeStatus(response.data);
        })
    }

    render(){
        return this.props.todoList ? (
            <div>
                {this.props.todoList.map((todo, index) => {
                        return <Todo key={index} 
                                    text={todo.text} 
                                    deleteTodo={this.deleteTodo} 
                                    id={todo.id}
                                    status={todo.status}
                                    changeStatus={this.changeStatus}
                                />
                    })
                }
            </div>
        ) : null
    }
}

export default TodoListComponent