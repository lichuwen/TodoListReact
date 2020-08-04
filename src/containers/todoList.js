import TodoListComponent from "../components/todoList/index"
import { connect } from 'react-redux'
import {deleteTodo} from "../action"

const mapStateToProps = state => {
    return {
        todoList: state.todoList
    }
}

const mapDispatchToProps = dispatch => ({
    deleteTodo: (id) => dispatch(deleteTodo(id))
})

const todoListContainer = connect(mapStateToProps,mapDispatchToProps)(TodoListComponent)

export default todoListContainer;