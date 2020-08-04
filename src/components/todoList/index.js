import React from 'react';
import Todo from "../todo/index"

class TodoListComponent extends React.Component{

    render(){

        return this.props.todoList ? (
            <div>
                {this.props.todoList.map((todo, index) => {
                        return <Todo key={index} text={todo.text}/>
                    })
                }
            </div>
        ) : null
    }
}

export default TodoListComponent