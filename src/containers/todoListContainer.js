const { addTodo } = require("../action")
// const { default: todoList } = require("../reducers/todoList");
const todoListContainer = connect(null, mapDispatchToProps) (todoList)

const mapDispatchToProps = dispatch => {
    return {
        addTodo: () => dispatch(addTodo(text)) 
    }
}

export default todoListContainer;