import React from 'react';
import Todo from "../todo/index"
import Axios from 'axios';

class TodoListComponent extends React.Component{

    deleteTodo = (id) => {
        this.props.deleteTodo(id)
    }

    changeStatus = (id,status) => {
        this.props.changeStatus(id)
        const _this = this;
        Axios.put(`https://5f2967eba1b6bf0016ead5c0.mockapi.io/todos/${id}`,{status: !status})
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