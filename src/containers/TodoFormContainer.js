import {addTodo,initList} from "../action"
import {connect} from "react-redux"
import TodoForm from "../components/todoForm/index"


const mapDispatchToProps = dispatch => {
    return {
        addTodo: (data) => dispatch(addTodo(data)), 
        initList: (data) => dispatch(initList(data))
    }
}

const TodoFormContainer = connect(null, mapDispatchToProps) (TodoForm)

export default TodoFormContainer;