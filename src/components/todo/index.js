import React from 'react';
import './index.css'
class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    deleteTodo = () => {
        this.props.deleteTodo(this.props.id)
    }

    changeStatus = () => {
        this.props.changeStatus(this.props.id)
    }

    render(){
        return(
            <div className={this.props.status ? "done" : ""}>
                <span onClick={this.changeStatus}>{this.props.text}</span>
                <button onClick={this.deleteTodo}>x</button>
            </div>
        )
    }

}
export default Todo