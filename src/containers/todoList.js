import TodoListComponent from "../components/todoList/index"
import { connect } from 'react-redux'

const mapStateToProps = state => {
    console.log('-----',state)
    return {
        todoList: state.todoList
    }
}

const todoListContainer = connect(mapStateToProps)(TodoListComponent)

export default todoListContainer;