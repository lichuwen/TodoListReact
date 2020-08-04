import React from 'react';
import Todo from "../todo/index"

class TodoListComponent extends React.Component{

    deleteTodo = (id) => {
        this.props.deleteTodo(id)
    }

    render(){
        return this.props.todoList ? (
            <div>
                {this.props.todoList.map((todo, index) => {
                        return <Todo key={index} 
                                    text={todo.text} 
                                    deleteTodo={this.deleteTodo} 
                                    id={todo.id}
                                />
                    })
                }
            </div>
        ) : null
    }
}

export default TodoListComponent