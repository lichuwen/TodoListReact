import React from 'react';
import Axios from 'axios';
import {getTodo,postTodo} from "../../api/api"

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : ""
        }
    }

    componentDidMount() {
        getTodo()
            .then((response) => {
                this.props.initList(response.data);
            }).catch(function (error) {
                alert(error)
            })
    }

    submit = () => { 
        postTodo({
            text: this.state.text,
            status: false
        })
        .then( (response) => {
            // this.props.addTodo(this.state.text)
            this.props.addTodo(response.data)
        })
    }

    updateText = (e) => {
        this.setState({text:e.target.value})
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <p>
                    <input value={this.state.text} onChange={this.updateText}/>
                    <button onClick={this.submit}>ADD</button>
                </p>
            </div>
        )
    }
}

export default TodoForm