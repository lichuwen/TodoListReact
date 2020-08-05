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
        const _this = this;
        getTodo()
            .then(function (response) {
                _this.props.initList(response.data);
            }).catch(function (error) {
                alert(error)
            })
    }

    submit = () => {
        this.props.addTodo(this.state.text)
        postTodo({
            text: this.state.text,
            status: false
        })
        .then(function (response) {
            console.log('post:',response);
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