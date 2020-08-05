import DoneList from "../components/doneList/index"
import { connect } from 'react-redux'
import {deleteTodo,changeStatus,doneList} from "../action"

const mapStateToProps = state => {
    return {
        todoList: state.todoList.filter((item) => {return item.status})
    }
}

const mapDispatchToProps = dispatch => ({
    doneList: (status) => dispatch(doneList(status)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    changeStatus: (id) => dispatch(changeStatus(id))
})

const DoneListContainer = connect(mapStateToProps,mapDispatchToProps)(DoneList)

export default DoneListContainer;