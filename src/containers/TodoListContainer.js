import TodoListComponent from "../components/todoList/index"
import { connect } from 'react-redux'
import {deleteTodo,changeStatus} from "../action"

const mapStateToProps = state => {
    return {
        todoList: state.todoList
    }
}

const mapDispatchToProps = dispatch => ({
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    changeStatus: (id) => dispatch(changeStatus(id))
})

const TodoListContainer = connect(mapStateToProps,mapDispatchToProps)(TodoListComponent)

export default TodoListContainer;