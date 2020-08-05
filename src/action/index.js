export function addTodo(text){
    return{
        type: "ADD_TODO",
        text: text
    }
}

export function deleteTodo(id){
    return{
        type: "DELETE_TODO",
        id: id
    }
}

export function changeStatus(id){
    return{
        type: "CHANGE_STATUS",
        id: id
    }
}

export function initList(data){
    return{
        type: "INIT_LIST",
        data: data
    }
}

export function doneList(status){
    return{
        type: "DONE_LIST",
        status: status
    }
}