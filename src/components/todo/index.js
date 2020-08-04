import React from 'react';
import './index.css'
import Axios from 'axios';

class Todo extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
        }
    }

    deleteTodo = () => {
        this.props.deleteTodo(this.props.id)
        Axios.delete(`https://5f2967eba1b6bf0016ead5c0.mockapi.io/todos/${this.props.id}`)
        .then(function (response) {
            console.log(response);
        })
    }

    changeStatus = () => {
        this.props.changeStatus(this.props.id,this.props.status)
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