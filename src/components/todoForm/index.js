import React from 'react';
import Axios from 'axios';

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : ""
        }
    }

    componentDidMount() {
        const _this = this;
        Axios.get('https://5f2967eba1b6bf0016ead5c0.mockapi.io/todos')
            .then(function (response) {
                _this.props.initList(response.data);
            }).catch(function (error) {
                alert(error)
            })
    }

    submit = () => {
        this.props.addTodo(this.state.text)
        Axios.post('https://5f2967eba1b6bf0016ead5c0.mockapi.io/todos', { text: this.state.text, status: false })
        .then(function (response) {
            console.log(response);
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
                    <button onClick={this.submit}></button>
                </p>
            </div>
        )
    }
}

export default TodoForm