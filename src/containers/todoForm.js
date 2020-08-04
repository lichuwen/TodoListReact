import {addTodo,initList} from "../action"
import {connect} from "react-redux"
import TodoForm from "../components/todoForm/index"


const mapDispatchToProps = dispatch => {
    return {
        addTodo: (text) => dispatch(addTodo(text)), 
        initList: (data) => dispatch(initList(data))
    }
}

const todoFormContainer = connect(null, mapDispatchToProps) (TodoForm)

export default todoFormContainer;