import React from 'react';
class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    deleteTodo = () => {
        this.props.deleteTodo(this.props.id)
    }

    render(){
        return(
            <div>
                {this.props.text}
                <button onClick={this.deleteTodo}>x</button>
            </div>
        )
    }

}
export default Todo