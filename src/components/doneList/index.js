import React from 'react';
import Todo from "../todo/index"
import Axios from 'axios';
import {putTodo,deleteTodo} from "../../api/api"

class DoneList extends React.Component{

    deleteTodo = () => {
        this.props.deleteTodo(this.props.id)
        console.log('id',this.props.id);
        deleteTodo(this.props.id)
        .then(function (response) {
            console.log(response);
        })
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

export default DoneList